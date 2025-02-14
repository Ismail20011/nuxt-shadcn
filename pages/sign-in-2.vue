<template>
    <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div class="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
            <!-- Logo -->
            <div class="text-center mb-8">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600">
                <Icon name="simple-icons:nuxt-dot-js" class="text-white" size="32" />
            </div>
            <h2 class="mt-6 text-3xl font-bold text-gray-900">Connexion</h2>
            <p class="mt-2 text-gray-600">Accédez à votre espace de travail</p>
            </div>
    
            <form @submit.prevent="handleLogin" class="space-y-6">
            <div>
                <label class="block text-sm font-medium text-gray-700">Email</label>
                <div class="mt-1 relative">
                <Icon name="ph:envelope" class="absolute left-3 top-3 text-gray-400" size="20" />
                <input 
                    v-model="email"
                    type="email" 
                    class="pl-10 block w-full rounded-lg border border-gray-300 py-2.5 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="nom@exemple.com"
                />
                </div>
            </div>
    
            <div>
                <label class="block text-sm font-medium text-gray-700">Mot de passe</label>
                <div class="mt-1 relative">
                <Icon name="ph:lock" class="absolute left-3 top-3 text-gray-400" size="20" />
                <input 
                    v-model="password"
                    :type="showPassword ? 'text' : 'password'" 
                    class="pl-10 block w-full rounded-lg border border-gray-300 py-2.5 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="••••••••"
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
            </div>
    
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                <input 
                    type="checkbox" 
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" 
                />
                <label class="ml-2 text-sm text-gray-600">Se souvenir de moi</label>
                </div>
                <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                Mot de passe oublié ?
                </a>
            </div>
    
            <button
                type="submit"
                class="w-full flex justify-center py-2.5 px-4 rounded-lg text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
                Se connecter
            </button>
    
            <div class="relative">
                <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
                </div>
                <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-white text-gray-500">Ou continuer avec</span>
                </div>
            </div>
    
            <div class="grid grid-cols-2 gap-3">
                <button
                type="button"
                class="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                <Icon name="ph:google-logo" size="20" class="mr-2" />
                Google
                </button>
                <button
                type="button"
                class="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                <Icon name="ph:github-logo" size="20" class="mr-2" />
                GitHub
                </button>
            </div>
    
            <p class="text-center text-sm text-gray-600">
                Pas encore de compte?
                <NuxtLink to="/register" class="font-medium text-indigo-600 hover:text-indigo-500">
                S'inscrire
                </NuxtLink>
            </p>
            </form>
        </div>
    </div>
  </template>
  
  <script setup>
  const showPassword = ref(false)
  const email = ref('')
  const password = ref('')
  
  const handleLogin = () => {
    console.log({ email: email.value, password: password.value })
  }
  </script>