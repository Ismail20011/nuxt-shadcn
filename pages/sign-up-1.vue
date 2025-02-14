<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
    <select v-model="locale" class="absolute top-4 right-4 rounded-lg border p-2">
      <option value="fr">Français</option>
      <option value="en">English</option>
    </select>
    
    <div class="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
      <!-- Logo -->
      <div class="text-center mb-8">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600">
          <Icon name="simple-icons:nuxt-dot-js" class="text-white" size="32" />
        </div>
        <h2 class="mt-6 text-3xl font-bold text-gray-900">{{ $t('signup.title') }}</h2>
        <p class="mt-2 text-gray-600">{{ $t('signup.subtitle') }}</p>
      </div>
 
      <form @submit.prevent="handleSignup" class="space-y-6">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">{{ $t('signup.firstName') }}</label>
            <div class="mt-1 relative">
              <input 
                v-model="firstName"
                type="text" 
                :placeholder="$t('signup.firstName')"
                class="block w-full rounded-lg border border-gray-300 px-3 py-2.5"
              />
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">{{ $t('signup.lastName') }}</label>
            <div class="mt-1 relative">
              <input 
                v-model="lastName"
                type="text" 
                :placeholder="$t('signup.lastNamePlaceholder')"
                class="block w-full rounded-lg border border-gray-300 px-3 py-2.5" 
              />
            </div>
          </div>
        </div>
 
        <div>
          <label class="block text-sm font-medium text-gray-700">{{ $t('signup.email') }}</label>
          <div class="mt-1 relative">
            <Icon name="ph:envelope" class="absolute left-3 top-3 text-gray-400" size="20" />
            <input 
              v-model="email"
              type="email"
              :placeholder="$t('signup.emailPlaceholder')" 
              class="pl-10 block w-full rounded-lg border border-gray-300 py-2.5"
            />
          </div>
        </div>
 
        <div>
          <label class="block text-sm font-medium text-gray-700">{{ $t('signup.password') }}</label>
          <div class="mt-1 relative">
            <Icon name="ph:lock" class="absolute left-3 top-3 text-gray-400" size="20" />
            <input 
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              :placeholder="$t('signup.passwordPlaceholder')"
              class="pl-10 block w-full rounded-lg border border-gray-300 py-2.5"
            />
            <button 
              @click="showPassword = !showPassword"
              type="button" 
              class="absolute right-3 top-3"
            >
              <Icon 
                :name="showPassword ? 'ph:eye-slash' : 'ph:eye'"
                class="text-gray-400 hover:text-gray-600"
                size="20"
              />
            </button>
          </div>
          <div class="mt-1 text-sm text-gray-500">
            {{ $t('signup.passwordRequirements') }}
          </div>
        </div>
 
        <div>
          <div class="flex items-center">
            <input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600" />
            <label class="ml-2 block text-sm text-gray-600" v-html="$t('signup.terms')" />
          </div>
        </div>
 
        <button type="submit" class="w-full flex justify-center py-2.5 px-4 rounded-lg text-white bg-indigo-600">
          {{ $t('signup.submit') }}
        </button>
 
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-white text-gray-500">{{ $t('signup.orSignup') }}</span>
          </div>
        </div>
 
        <div class="grid grid-cols-2 gap-3">
          <button type="button" class="flex items-center justify-center px-4 py-2 border rounded-lg">
            <Icon name="ph:google-logo" size="20" class="mr-2" />
            {{ $t('signup.google') }}
          </button>
          <button type="button" class="flex items-center justify-center px-4 py-2 border rounded-lg">
            <Icon name="ph:github-logo" size="20" class="mr-2" />
            {{ $t('signup.github') }}
          </button>
        </div>
 
        <p class="text-center text-sm text-gray-600">
          {{ $t('signup.alreadyAccount') }}
          <NuxtLink to="/login" class="font-medium text-indigo-600 hover:text-indigo-500">
            {{ $t('signup.login') }}
          </NuxtLink>
        </p>
      </form>
    </div>
  </div>
</template>
 
<script setup>
  const { locale } = useI18n()
  const showPassword = ref(false)
  const firstName = ref('')
  const lastName = ref('')
  const email = ref('')
  const password = ref('')
  
  const handleSignup = () => {
    console.log({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value
    })
  }
</script>