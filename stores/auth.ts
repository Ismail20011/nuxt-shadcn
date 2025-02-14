// stores/auth.ts
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {
        email : '' as string,
        password : '',
        role: '',
        token: ''
    },
    package: null,

    currentStep: 1
  }),

  actions: {
    setUser(user: any) {
      this.user = user
    },

    setPackage(pkg: any) {
      this.package = pkg
    },

    nextStep() {
      this.currentStep++
    },

    previousStep() {
      this.currentStep--
    },

    async login(email: string, password: string) {
      const { api } = useApi();
      try {
        const response = await api('/auth/login', {
          method: 'POST',
          body: {email:email,password:password}
        })
        console.log('dddd',response);
        // this.token = response.token
        // this.user = response.user
        // this.isAuthenticated = true
        
        // Stocker le token
        // localStorage.setItem('token', response.token)
      } catch (error) {
        throw error
      }
    },
    // async logout() {
    // try {
    //     // Appel API de déconnexion
    //     await useFetch('/api/auth/logout', {
    //     method: 'POST'
    //     })

    //     // Réinitialisation du store
    //     this.token = null
    //     this.user = null
        
    //     // Redirection vers la page de login
    //     navigateTo('/login')
    // } catch (error) {
    //     console.error('Erreur de déconnexion', error)
    // }
    // },
  }
})