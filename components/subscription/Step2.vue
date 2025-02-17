<template>
  <div class="mt-3 space-y-6 px-5">
    <!-- First Name & Last Name -->
    <div class="grid grid-cols-2 gap-4">
      <div>
        <label class="block text-sm font-medium text-gray-700">
          {{ $t('signup.firstName') }}
        </label>
        <Field 
          v-model="formData.firstName" 
          name="firstName" 
          type="text" 
          class="mt-1 block w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/90"
        />
        <ErrorMessage name="firstName" class="text-red-500 text-sm mt-1"/>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">
          {{ $t('signup.lastName') }}
        </label>
        <Field 
          v-model="formData.lastName" 
          name="lastName" 
          type="text" 
          class="mt-1 block w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/90"
        />
        <ErrorMessage name="lastName" class="text-red-500 text-sm mt-1"/>
      </div>
    </div>

    <!-- Email & Phone Number -->
    <div class="grid grid-cols-2 gap-4">
      <div>
        <label class="block text-sm font-medium text-gray-700">
          {{ $t('signup.email') }}
        </label>
        <div class="mt-1 relative">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="absolute left-3 top-3 text-gray-400 h-5 w-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <Field 
            v-model="formData.email" 
            name="email" 
            type="email" 
            class="pl-10 block w-full rounded-lg border py-2.5 focus:ring-2 focus:ring-primary/20 focus:border-primary/90"
          />
          <ErrorMessage name="email" class="text-red-500 text-sm mt-1"/>
        </div>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">
          {{ $t('signup.phoneNumber') }}
        </label>
        <div class="flex mt-1">
          <div class="relative w-1/4 mr-2">
            <Field
              name="phonePrefix"
              as="input"
              class="block w-full px-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/90"
              :disabled="true"
              />
          </div>
          <div class="relative w-3/4">
            <Field 
              v-model="formData.phone_number" 
              name="phoneNumber" 
              type="tel" 
              class="block w-full px-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/90"
            />
            <ErrorMessage name="phoneNumber" class="text-red-500 text-sm mt-1"/>
          </div>
        </div>
      </div>
    </div>

    <!-- Country and City -->
    <!-- @change="loadCities('ma')" -->
    <div class="grid grid-cols-2 gap-4">
      <div>
        <label class="block text-sm font-medium text-gray-700">
          {{ $t('signup.country') }}
        </label>
        <Field
          name="country"
          as="select"
          v-model="formData.country"
          
          class="mt-1 block w-full px-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/90"
        >
          <option value="">{{ $t('signup.selectCountry') }}</option>
          <option 
            v-for="country in countries" 
            :key="country.id" 
            :value="country.name"
          >
            {{ country.name }}
          </option>
        </Field>
        <ErrorMessage name="country" class="text-red-500 text-sm mt-1"/>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">
          {{ $t('signup.city') }}
        </label>
        <Field
          name="city"
          as="select"
          v-model="formData.city"
          :disabled="!formData.country"
          class="mt-1 block w-full px-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/90"
        >
          <option value="">{{ $t('signup.selectCity') }}</option>
          <option 
            v-for="city in cities" 
            :key="city" 
            :value="city"
          >
            {{ city }}
          </option>
        </Field>
        <ErrorMessage name="city" class="text-red-500 text-sm mt-1"/>
      </div>
    </div>

    <!-- Address and Postal Code -->
    <div class="grid grid-cols-3 gap-4">
      <div class="col-span-2">
        <label class="block text-sm font-medium text-gray-700">
          {{ $t('signup.address') }}
        </label>
        <Field 
          v-model="formData.address" 
          name="address" 
          type="text" 
          class="mt-1 block w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/90"
        />
        <ErrorMessage name="address" class="text-red-500 text-sm mt-1"/>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">
          {{ $t('signup.postalCode') }}
        </label>
        <Field 
          v-model="formData.postal_code" 
          name="postalCode" 
          type="text" 
          class="mt-1 block w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/90"
        />
        <ErrorMessage name="postalCode" class="text-red-500 text-sm mt-1"/>
      </div>
    </div>

    <!-- Password -->
    <div class="grid grid-cols-2 gap-4">
      <div>
        <label class="block text-sm font-medium text-gray-700">
          {{ $t('signup.password') }}
        </label>
        <div class="mt-1 relative">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="absolute left-3 top-3 text-gray-400 h-5 w-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          <Field 
            v-model="formData.password"
            :type="showPassword ? 'text' : 'password'" 
            name="password"
            class="pl-10 block w-full rounded-lg border py-2.5 focus:ring-2 focus:ring-primary/20 focus:border-primary/90"
          />
          <button 
            @click="showPassword = !showPassword" 
            type="button" 
            class="absolute right-3 top-3"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              class="h-5 w-5 text-gray-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                v-if="!showPassword"
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path 
                v-if="!showPassword"
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
              <path 
                v-else
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
              />
            </svg>
          </button>
          <ErrorMessage name="password" class="text-red-500 text-sm mt-1"/>
        </div>
      </div>

      <!-- Confirm Password -->
      <div>
        <label class="block text-sm font-medium text-gray-700">
          {{ $t('signup.confirmPassword') }}
        </label>
        <div class="mt-1 relative">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="absolute left-3 top-3 text-gray-400 h-5 w-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          <Field 
            v-model="formData.confirmPassword"
            :type="showPassword ? 'text' : 'password'" 
            name="confirmPassword"
            class="pl-10 block w-full rounded-lg border py-2.5 focus:ring-2 focus:ring-primary/20 focus:border-primary/90"
          />
          <button 
            @click="showPassword = !showPassword" 
            type="button" 
            class="absolute right-3 top-3"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              class="h-5 w-5 text-gray-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                v-if="!showPassword"
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path 
                v-if="!showPassword"
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
              <path 
                v-else
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
              />
            </svg>
          </button>
          <ErrorMessage name="confirmPassword" class="text-red-500 text-sm mt-1"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref} from 'vue'
import { Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'

const showPassword = ref(false);

const store = useRegisterStore();

const countries = computed(()=>{
  return store.countries;
})
const cities = ref([]);

const loadCities = (code) =>{
  store.fetchCitiesByCountryCode(code);
}


const formData = computed(()=>{
  return store.user_info;
})


</script>

