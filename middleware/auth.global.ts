
export default defineNuxtRouteMiddleware((to) => {
    const token = useCookie('token');
    if (!token.value && to.path !== '/sign-in' && to.path !== '/sign-up') {
      return navigateTo('/sign-in')
    }
    
    if (token.value && (to.path === '/sign-in' || to.path === '/sign-up')) {
      return navigateTo('/')
    }
})