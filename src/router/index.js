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
      meta: {requiresAuth: true}
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {requiresAuth: true}
    },
    {
      path: '/questions',
      name: 'questions',
      component: QuestionView,
      meta: {requiresAuth: true}
    },
    {
      path:'/question-details',
      name:'question-details',
      component:QuestionDetailsView,
      meta: {requiresAuth: true}
    },
    {
      path: '/discuss',
      name: 'discuss',
      component: DiscussView,
      meta: {requiresAuth: true}
    },
    {
      path: '/contests',
      name: 'contests',
      component: ConstestView,
      meta: {requiresAuth: true}
    },
    {
      path: '/chat',
      name: 'chat',
      component: ChatView,
      meta: {requiresAuth: true}
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      meta: {requiresAuth: true}
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

// Route guard to protect private routes
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  const isAuthenticated = !!token;

  if (to.meta.requiresAuth && !isAuthenticated) {
    alert('Please login to access this page.');
    next('/login');
  } else {
    next();
  }
});

export default router
