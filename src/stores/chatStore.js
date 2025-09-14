import apiClient from '@/api/axios';
import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useChatStore = defineStore('chatStore', () => {
  const chats = ref([]);
  const selectedChat = ref([]);
  const loading = ref(false);
  const loadingSelection = ref(false);
  const loadingResponse = ref(false);
  const selectedChatId = ref(null);
  const startingChat = ref(false);


  const fetchChats = async () => {
    const userId = localStorage.getItem('user_id');
    try{
      loading.value = true;
      const response = await apiClient.get(`/chat/sessions/${userId}`);
      if (response.status === 200){
        chats.value = response.data;
        console.log("Fetched Chats: ", chats.value);
      }
      else{
        console.error("Error Fetching Chats: " + response.statusText);
        fetchChats();
      }
    }
    catch(error){
      console.error("Error Fetching Chats: " + error)
      fetchChats();
    }
    finally{
      loading.value = false;
    }
  }

  const selectChatSession = async (chatId) => {
    loadingSelection.value = true;
    try{
      const response = await apiClient.get(`/chat/history/${chatId}`);
      if (response.status === 200){
        selectedChat.value = response.data;
        selectedChatId.value = chatId;
        console.log("Selected Chat: ", selectedChat.value);
      }
      else{
        console.error("Error Fetching Selected Chat: " + response.statusText);
        selectChatSession(chatId);
      }
    }
    catch(error){
      console.error("Error Fetching Selected Chat: " + error)
      selectChatSession(chatId);
    }
    finally{
      loadingSelection.value = false;
    }
  }

  const startNewChat = () => {
    selectedChat.value = [];
    selectedChatId.value = null;
    startingChat.value = true;
    console.log("Started New Chat");
  }

  const sendMessage = async (message) => {
    if(startingChat.value === true){
      const userId = localStorage.getItem('user_id');
      const user_msg = {
        id: Date.now(),
        message: message,
        role: 'user',
        user_id: parseInt(userId)
      }
      selectedChat.value.push(user_msg); // Optimistic UI Update
      console.log("Sending Message: ", user_msg);
      const { id, role, ...payload } = user_msg; // Exclude id and role from payload

      try{
        loadingResponse.value = true;
        const response = await apiClient.post('/chat/start', payload);
        if (response.status === 200){
          console.log("Chat Started: ", response.data);
          const data = response.data.message;
          selectedChat.value.push(data);

          const title = data.session_title;
          console.log("Chat Title: ", title);
          selectedChatId.value = data.session_id;
          chats.value.unshift({ id: data.session_id, session_title: title }); // Add new chat to the top of the list
        }
        else{
          console.error("Error Starting Chat: " + response.statusText);
        }
      }
      catch(error){
        console.error("Error Starting Chat: " + error)
      }
      finally{
        loadingResponse.value = false;
        startingChat.value = false;
      }
    }
    else{
      try{
        loadingResponse.value = true;
        const user_msg = {
          id: Date.now(),
          message: message,
          role: 'user',
          session_id: selectedChatId.value,
          user_id: parseInt(localStorage.getItem('user_id'))
        }
        const { id, ...payload } = user_msg
        selectedChat.value.push(user_msg); // Optimistic UI Update
        console.log("Sending Message: ", user_msg);
        const response = await apiClient.post('/chat/message', payload);
        if (response.status === 200){
          console.log("Message Sent: ", response.data);
          selectedChat.value.push(response.data);
        }
        else{
          console.error("Error Sending Message: " + response.statusText);
        }
      }
      catch(error){
        console.error("Error Sending Message: " + error)
      }
      finally{
        loadingResponse.value = false;
      }
    }
  }

  return {
    chats,
    selectedChat,
    fetchChats,
    loading,
    selectChatSession,
    loadingSelection,
    selectedChatId,
    startNewChat,
    startingChat,
    sendMessage,
    loadingResponse
  }
})

