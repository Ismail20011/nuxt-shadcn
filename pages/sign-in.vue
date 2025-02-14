<template>
    <div class="min-h-screen bg-gray-50">
        <select 
            :value="locale" 
            @change="switchLanguage($event.target.value)"
            class="absolute top-4 right-4 rounded-lg border p-2"
        >
            <option value="fr">Français</option>
            <option value="en">English</option>
        </select>
   
        <div class="flex min-h-screen">
            <!-- Sidebar -->
            <div class="hidden lg:flex lg:w-1/2 bg-primary p-12 flex-col justify-between">
                <div>
                    <Icon name="simple-icons:nuxt-dot-js" size="32" class="text-white" />
                    <h2 class="mt-16 text-4xl font-bold text-white">{{ $t('login.welcome') }}</h2>
                    <p class="mt-4 text-lg text-white">{{ $t('login.subtitle') }}</p>
                </div>
                <div class="space-y-6 text-white">
                    <div v-for="feature in features" :key="feature.key" class="flex items-center">
                    <Icon :name="feature.icon" size="24" />
                    <span class="ml-4">{{ $t(`features.${feature.key}`) }}</span>
                    </div>
                </div>
            </div>
            <!-- Login Form -->
            <div class="flex-1 flex items-center justify-center p-8">
                <div class="w-full max-w-md">
                    <div class="text-center mb-8">
                        <h2 class="text-3xl font-bold text-gray-900">{{ $t('login.title') }}</h2>
                        <p class="mt-2 text-gray-600">{{ $t('login.access') }}</p>
                    </div>
        
                    <form @submit.prevent="store.login('ii@gmail.com','ddd')" class="space-y-6">
                        <div>
                            <label class="block text-sm font-medium text-gray-700">{{ $t('login.email') }}</label>
                            <div class="mt-1 relative">
                            <Icon name="ph:envelope" class="absolute left-3 top-3 text-gray-400" size="20" />
                            <input 
                                v-model="signInData.email"
                                type="email" 
                                :placeholder="$t('login.emailPlaceholder').replace('{at}', '@')"
                                class="pl-10 block w-full rounded-lg border border-gray-300 py-2.5"
                            />
                            </div>
                        </div>
        
                        <div>
                            <label class="block text-sm font-medium text-gray-700">{{ $t('login.password') }}</label>
                            <div class="mt-1 relative">
                            <Icon name="ph:lock" class="absolute left-3 top-3 text-gray-400" size="20" />
                            <input 
                                v-model="signInData.password"
                                :type="showPassword ? 'text' : 'password'" 
                                class="pl-10 block w-full rounded-lg border border-gray-300 py-2.5"
                            />
                            <button 
                                @click="showPassword = !showPassword" 
                                type="button"
                                class="absolute right-3 top-3"
                            >
                                <Icon 
                                :name="showPassword ? 'ph:eye-slash' : 'ph:eye'" 
                                class="text-gray-400"
                                size="20"
                                />
                            </button>
                            </div>
                        </div>
        
                        <!-- <div class="flex items-center justify-between">
                            <div class="flex items-center">
                            <input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600" />
                            <label class="ml-2 text-sm text-gray-600">{{ $t('login.remember') }}</label>
                            </div>
                            <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                            {{ $t('login.forgot') }}
                            </a>
                        </div> -->
        
                        <button type="submit" class="w-full flex justify-center py-2.5 px-4 rounded-lg text-white bg-primary">
                            {{ $t('login.submit') }}
                        </button>
                    </form>
        
                    <p class="mt-6 text-center text-sm text-gray-600">
                    {{ $t('login.noAccount') }}
                    <NuxtLink to="/sign-up" class="font-medium text-primary/90 hover:text-primary/60">
                        {{ $t('login.register') }}
                    </NuxtLink>
                    </p>
                </div>
            </div>
        </div>
    </div>
   </template>
   
   <script lang="ts" setup >
    const {locale} = useI18n();
    const showPassword = ref(false);
    const features = [
        { icon: 'ph:users-bold', key: 'teamManagement' },
        { icon: 'ph:folder-bold', key: 'projectManagement' },
        { icon: 'ph:chart-line-bold', key: 'analytics' }
    ];
    const store = useAuthStore();

    const signInData = computed(() => {
        return store.user;
    })

    const {switchLanguage} = useLanguage()

   </script>