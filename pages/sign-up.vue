<template>
  <div class="min-h-screen bg-gray-50">
    <Form @submit="handleSignup" :validation-schema="validationSchema">

      <select :value="locale" @change="switchLanguage($event.target.value)"
        class="absolute top-4 right-4 rounded-lg border p-2">
        <option value="fr">Français</option>
        <option value="en">English</option>
      </select>

      <div class="flex min-h-screen justify-center pt-4 pb-24">
        <div
          class="flex-1 overflow-y-auto py-10 max-w-6xl bg-white rounded-xl shadow-lg mx-auto my-4 relative border border-gray-100/20">

          <!-- begin : Stepper  -->
          <Stepper class="flex w-full items-start gap-2  pointer-events-none">
            <StepperItem v-for="step in steps" :key="step.step"
              class="relative flex w-full flex-col items-center justify-center" :step="step.step"
              :active="currentStep >= step.step">
              <StepperSeparator 
                v-if="step.step !== steps.length"
                class="absolute left-[calc(50%+20px)] right-[calc(-50%+10px)] top-5 block h-0.5 shrink-0 rounded-full bg-primary/60"
                :class="{ 'bg-gray-200': currentStep < step.step }" 
              />

              <StepperTrigger as-child>
                <Button :variant="currentStep >= step.step ? 'default' : 'outline'" size="icon"
                  class="z-10 rounded-full shrink-0 bg-white hover:bg-white" :class="[
                    currentStep === step.step && 'ring-2 ring-primary/60 ring-offset-2',
                    currentStep > step.step && 'bg-primary'
                  ]">
                  <Icon v-if="currentStep > step.step" name="ph:check-bold" class="size-5 text-white" />
                  <Icon v-if="currentStep === step.step" name="ph:circle-bold" class="text-primary/60" />
                  <Icon v-if="currentStep < step.step" name="ph:dot-bold" class="text-primary" />
                </Button>
              </StepperTrigger>

              <div class="mt-5 flex flex-col items-center text-center">
                <StepperTitle :class="[currentStep >= step.step ? 'text-primary' : 'text-gray-400']"
                  class="text-sm font-semibold transition lg:text-base">
                  {{ step.title }}
                </StepperTitle>
                <StepperDescription class="sr-only text-xs text-gray-600 transition md:not-sr-only lg:text-sm">
                  {{ step.description }}
                </StepperDescription>
              </div>
            </StepperItem>
          </Stepper>

          <div class="w-full mx-auto px-10 " v-if="currentStep == 1">
            <SubscriptionStep1 />
          </div>

          <div class="w-full max-w-4xl mx-auto mt-12" v-if="currentStep == 2">
            <SubscriptionStep2 />
          </div>

          <div class="w-full max-w-xl mx-auto " v-if="currentStep == 3">
            <SubscriptionStep3 />
          </div>

          <p class="mt-6 text-center text-sm text-gray-600">
            {{ $t('signup.haveAccount') }}
            <NuxtLink to="/sign-in" class="font-medium text-primary hover:text-indigo-500">
              {{ $t('signup.login') }}
            </NuxtLink>
          </p>

        </div>

      </div>
      
      <div class="fixed bottom-0 left-0 right-0 border-t border-gray-100 bg-white p-4 mt-6">
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex items-center justify-end gap-4">
            <button
              v-if="currentStep>1"
              @click="changeStep(currentStep-1)"
              class="text-primary/90 bg-primary/10 hover:bg-primary/20 px-6 py-2 rounded-lg transition-colors duration-200">
              Retour
            </button>
            <button type="submit"
              class="bg-primary hover:bg-primary/70 text-white px-6 py-2 rounded-lg transition-colors duration-200">
              Continuer
            </button>
          </div>
        </div>
      </div>
    </Form>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage, useForm } from 'vee-validate'
import * as yup from 'yup'

const { locale } = useI18n()
const { switchLanguage } = useLanguage()

const store = useRegisterStore();

const userInfo = computed(()=>{
  return store.user_info;
})


const handleSignup = () => {
  if(currentStep.value == 1){
    changeStep(2);
  }
}


onMounted(() => {

  store.getListPlans();
  store.fetchCountries();
});

const currentStep = ref(3);

const steps = [
  {
    step: 1,
    title: 'Abonnement',
    description: '',
  },
  {
    step: 2,
    title: 'Informations',
    description: '',
  },
  {
    step: 3,
    title: 'Paiement',
    description: '',
  },
]

const changeStep = (stepNumber) => {
  currentStep.value = stepNumber;
}

// Correct the Yup reference
const validationSchema = computed(() => {
  if (currentStep.value === 2) {
    return yup.object().shape({
      firstName: yup
        .string()
        .required('Le prénom est requis')
        .min(2, 'Le prénom doit contenir au moins 2 caractères')
        .max(50, 'Le prénom ne doit pas dépasser 50 caractères'),
    
      lastName: yup
        .string()
        .required('Le nom est requis')
        .min(2, 'Le nom doit contenir au moins 2 caractères')
        .max(50, 'Le nom ne doit pas dépasser 50 caractères'),
      
      email: yup
        .string()
        .required('L\'email est requis')
        .email('Veuillez entrer un email valide'),
      
      phoneNumber: yup
        .string()
        .required('Le numéro de téléphone est requis')
        .matches(/^[0-9]{9,10}$/, 'Numéro de téléphone invalide'),
      
      country: yup
        .string()
        .required('Le pays est requis'),
      
      city: yup
        .string()
        .required('La ville est requise'),
      
      address: yup
        .string()
        .required('L\'adresse est requise')
        .min(5, 'L\'adresse doit contenir au moins 5 caractères')
        .max(100, 'L\'adresse ne doit pas dépasser 100 caractères'),
      
      postalCode: yup
        .string()
        .required('Le code postal est requis')
        .matches(/^[0-9]{5}$/, 'Code postal invalide'),
      
      password: yup
        .string()
        .required('Le mot de passe est requis')
        .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          'Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial'
        ),
      
      confirmPassword: yup
        .string()
        .required('Veuillez confirmer le mot de passe')
        .oneOf([yup.ref('password')], 'Les mots de passe ne correspondent pas')
    })
  }
  else {
    return yup.object().shape({}) // Return an empty schema for other steps
  }
})

 
  
</script>