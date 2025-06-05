import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ChatView from '@/views/ChatView.vue'
import DiscussView from '@/views/DiscussView.vue'
import ProfileView from '@/views/ProfileView.vue'
import QuestionView from '@/views/QuestionView.vue'
import ConstestView from '@/views/ConstestView.vue'
import NotFound from '@/views/NotFound.vue'
import TrialView from '@/views/TrialView.vue'
import QuestionDetailsView from '@/views/QuestionDetailsView.vue'
import LoginView from '@/views/LoginView.vue'
import SignupView from '@/views/SignupView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/questions',
      name: 'questions',
      component: QuestionView,
    },
    {
      path:'/question-details',
      name:'question-details',
      component:QuestionDetailsView
    },
    {
      path: '/discuss',
      name: 'discuss',
      component: DiscussView,
    },
    {
      path: '/contests',
      name: 'contests',
      component: ConstestView,
    },
    {
      path: '/chat',
      name: 'chat',
      component: ChatView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignupView,
    },
    {
      path:'/trial',
      component:TrialView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
    }
  ],
})

export default router
