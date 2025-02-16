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
  }),

  actions: {
    setUser(user: any) {
      this.user = user
    },

    async login() {
      try {
        const response = await $fetch('https://france.thebroadwave.com/internal/api/auth/login.php', {
          method: 'POST',
          body: {email:this.user.email,password:this.user.password},
          // headers: {
          //   'Content-Type': 'application/json'
          // }
        })

        console.log('dddd',response);
      } catch (error) {
        this.error = 'Erreur lors de la récupération des plans'
        console.error('Erreur:', error)
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