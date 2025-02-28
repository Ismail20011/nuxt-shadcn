<script setup lang="ts">
import { ref } from 'vue'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

interface Props {
  triggerText?: string
  title?: string
  description?: string
  cancelText?: string
  confirmText?: string
  triggerClass?: string
  onConfirm?: () => void
  onCancel?: () => void
  modelValue?: boolean // Pour v-model
}

const props = withDefaults(defineProps<Props>(), {
  triggerText: 'Open',
  title: 'Are you sure?',
  description: 'This action cannot be undone.',
  cancelText: 'Cancel',
  confirmText: 'Continue',
  triggerClass: '',
  modelValue: false
})

const emit = defineEmits(['confirm', 'cancel', 'update:modelValue'])

const isOpen = ref(props.modelValue)

// Surveiller les changements de modelValue
watch(() => props.modelValue, (newValue) => {
  isOpen.value = newValue
})

// Méthodes pour contrôler le dialogue
const open = () => {
  isOpen.value = true
  emit('update:modelValue', true)
}

const close = () => {
  isOpen.value = false
  emit('update:modelValue', false)
}

const handleConfirm = () => {
  props.onConfirm?.()
  emit('confirm')
  close()
}

const handleCancel = () => {
  props.onCancel?.()
  emit('cancel')
  close()
}

// Exposer les méthodes
defineExpose({
  open,
  close
})
</script>

<template>
  <AlertDialog :open="isOpen" @update:open="(value) => emit('update:modelValue', value)">
    <AlertDialogTrigger :class="triggerClass" @click="open">
      {{ triggerText }}
    </AlertDialogTrigger>
    
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>{{ title }}</AlertDialogTitle>
        <AlertDialogDescription>
          {{ description }}
        </AlertDialogDescription>
      </AlertDialogHeader>
      
      <AlertDialogFooter>
        <AlertDialogCancel @click="handleCancel">
          {{ cancelText }}
        </AlertDialogCancel>
        <AlertDialogAction @click="handleConfirm">
          {{ confirmText }}
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>