import { type Plan, type UserInfo } from '@/types';
import { defineStore } from 'pinia';



interface UserRegistration {
  list_plans_fhd : Array<Plan>,
  list_plans_4k : Array<Plan>,
  list_countries : Array<any>,
  list_cities : Array<any>,
   user_info : UserInfo,
//   subscription: {
//     plan: string
//     price: number
//     duration: number
//   } | null
//   personal: {
//     firstName: string
//     lastName: string
//     email: string
//     password: string
//   } | null
//   verification: {
//     code: string
//     verified: boolean
//   } | null
//   currentStep: number
}

export const useRegisterStore = defineStore('register', {
  state: (): UserRegistration => ({
    list_plans_fhd: [],
    list_plans_4k : [],
    user_info : {
        package_id:"",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        country_id : -1,
        city_id : -1,
    },
    list_countries : [],
    list_cities : [],

    // personal: null,
    // verification: {
    //   code: '',
    //   verified: false
    // },
    // currentStep: 1
  }),

  getters: {
    // isStepComplete: (state) => (step: number) => {
    //   switch (step) {
    //     case 1:
    //       return !!state.subscription
    //     case 2:
    //       return !!state.personal
    //     case 3:
    //       return state.verification?.verified
    //     default:
    //       return false
    //   }
    // }
  },

  actions: {

    async getListPlans() {
        try {
            const response = await $fetch('https://france.thebroadwave.com/internal/api/packages/list.php', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json'
              }
            })
    
            if (response && response.data) {
              this.list_plans_4k = response.data['4K'];
              this.list_plans_fhd = response.data['FHD'];
            }
          } catch (error) {
            this.error = 'Erreur lors de la récupération des plans'
            console.error('Erreur:', error)
            throw error
          }
    },

    selectPackage(package_id : string) {
        this.user_info.package_id = package_id
    }

    // async getListCountries(){

    // }



    // setSubscriptionPlan(plan: { plan: string; price: number; duration: number }) {
    //   this.subscription = plan
    // },

    // setPersonalInfo(info: { firstName: string; lastName: string; email: string; password: string }) {
    //   this.personal = info
    // },

    // async sendVerificationCode() {
    //   const { api } = useApi()
      
    //   try {
    //     if (!this.personal?.email) throw new Error('Email required')
        
    //     await api('/auth/send-verification', {
    //       method: 'POST',
    //       body: {
    //         email: this.personal.email
    //       }
    //     })
        
    //     return { success: true }
    //   } catch (error) {
    //     console.error('Error sending verification code:', error)
    //     return { success: false, error }
    //   }
    // },

    // async verifyCode(code: string) {
    //   const { api } = useApi()
      
    //   try {
    //     const response = await api('/auth/verify-code', {
    //       method: 'POST',
    //       body: {
    //         email: this.personal?.email,
    //         code
    //       }
    //     })

    //     if (response.verified) {
    //       this.verification = {
    //         code,
    //         verified: true
    //       }
    //     }

    //     return { success: true, verified: response.verified }
    //   } catch (error) {
    //     console.error('Error verifying code:', error)
    //     return { success: false, error }
    //   }
    // },

    // async register() {
    //   const { api } = useApi()
      
    //   try {
    //     if (!this.subscription || !this.personal || !this.verification?.verified) {
    //       throw new Error('Missing required information')
    //     }

    //     const response = await api('/auth/register', {
    //       method: 'POST',
    //       body: {
    //         ...this.personal,
    //         subscription: {
    //           plan: this.subscription.plan,
    //           duration: this.subscription.duration
    //         }
    //       }
    //     })

    //     // Réinitialiser le store après l'inscription réussie
    //     this.resetStore()

    //     return { success: true, data: response }
    //   } catch (error) {
    //     console.error('Registration error:', error)
    //     return { success: false, error }
    //   }
    // },

    // setStep(step: number) {
    //   this.currentStep = step
    // },

    // resetStore() {
    //   this.subscription = null
    //   this.personal = null
    //   this.verification = {
    //     code: '',
    //     verified: false
    //   }
    //   this.currentStep = 1
    // }

//     async getListPlans() {
//       const { api } = useApi()
//       try {
        
//         const response = await api('/packages/list.php', {
//           method: 'GET',
//         })
//         console.log("list_plans",response)

//         return { success: true, data: response }
//       } catch (error) {
//         console.error('Registration error:', error)
//         return { success: false, error }
//       }
//     },

  },

  // Persistance du store (optionnel)
//   persist: {
//     key: 'register-store',
//     storage: window.sessionStorage,
//     paths: ['subscription', 'personal', 'currentStep']
//   }
})