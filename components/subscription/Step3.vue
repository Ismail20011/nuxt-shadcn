<!-- components/VerificationCode.vue -->
<template>
    <div>
      <div class="max-w-xl mx-auto p-6 text-center">
        <h2 class="text-2xl font-semibold text-gray-800 mb-3">
          {{ $t('verification.title') }}
        </h2>
        <p class="text-gray-600 mb-8">
          {{ $t('verification.description', { method: isEmail ? 'email' : 'SMS' }) }}
        </p>
  
        <!-- Code Input -->
        <div class="space-y-4">
          <div class="flex justify-center gap-3">
            <input
              v-for="(digit, index) in 6"
              :key="index"
              v-model="codeDigits[index]"
              type="text"
              maxlength="1"
              class="w-12 h-14 text-center text-2xl font-semibold border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary/90"
              @input="handleInput($event, index)"
              @keydown.delete="handleBackspace($event, index)"
              @keydown.left="focusPrevious(index)"
              @keydown.right="focusNext(index)"
            />
          </div>
  
          <!-- Timer & Resend -->
          <div class="mt-6 text-sm">
            <p v-if="timer > 0" class="text-gray-600">
              {{ $t('verification.resendIn', { time: formatTime(timer) }) }}
            </p>
            <button
              v-else
              @click="resendCode"
              class="text-primary/90 hover:text-primary/100 font-medium"
            >
              {{ $t('verification.resend') }}
            </button>
          </div>
  
          <!-- Error Message -->
          <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
        </div>
      </div>
  
      <!-- Footer -->
      <div class="fixed bottom-0 left-0 right-0 border-t border-gray-100 bg-white p-4">
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex items-center justify-end gap-4">
            <button 
              @click="$emit('change-step', -1)"
              class="text-primary/90 bg-primary/10 hover:bg-primary/20 px-6 py-2 rounded-lg transition-colors duration-200"
            >
              {{ $t('common.back') }}
            </button>
            <button 
              @click="verifyCode"
              :disabled="!isCodeComplete"
              :class="[
                'px-6 py-2 rounded-lg transition-colors duration-200',
                isCodeComplete 
                  ? 'bg-primary/90 hover:bg-primary/100 text-white' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              ]"
            >
              {{ $t('common.continue') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue'
  
  const props = defineProps({
    isEmail: {
      type: Boolean,
      default: true
    },
    initialTimer: {
      type: Number,
      default: 60
    }
  })
  
  const emit = defineEmits(['change-step', 'verified'])
  
  const codeDigits = ref(Array(6).fill(''))
  const timer = ref(props.initialTimer)
  const error = ref('')
  
  // Computed
  const isCodeComplete = computed(() => {
    return codeDigits.value.every(digit => digit !== '')
  })
  
  // Methods
  const handleInput = (event, index) => {
    const value = event.target.value
    if (value && /^\d$/.test(value)) {
      codeDigits.value[index] = value
      if (index < 5) {
        focusNext(index)
      }
    } else {
      codeDigits.value[index] = ''
    }
  }
  
  const handleBackspace = (event, index) => {
    if (!codeDigits.value[index] && index > 0) {
      focusPrevious(index)
    }
  }
  
  const focusPrevious = (index) => {
    if (index > 0) {
      const prevInput = document.querySelector(`input:nth-child(${index})`)
      prevInput?.focus()
    }
  }
  
  const focusNext = (index) => {
    if (index < 5) {
      const nextInput = document.querySelector(`input:nth-child(${index + 2})`)
      nextInput?.focus()
    }
  }
  
  const startTimer = () => {
    const interval = setInterval(() => {
      if (timer.value > 0) {
        timer.value--
      } else {
        clearInterval(interval)
      }
    }, 1000)
  }
  
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }
  
  const resendCode = async () => {
    try {
      // Logique pour renvoyer le code
      timer.value = props.initialTimer
      startTimer()
      error.value = ''
    } catch (err) {
      error.value = err.message
    }
  }
  
  const verifyCode = async () => {
    if (!isCodeComplete.value) return
    
    try {
      const code = codeDigits.value.join('')
      // Logique de vérification du code
      emit('verified', code)
    } catch (err) {
      error.value = err.message
    }
  }
  
  onMounted(() => {
    startTimer()
  })
  </script>
  
