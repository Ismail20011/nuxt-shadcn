<template>
    <Popover v-model:open="isOpen">
      <PopoverTrigger as-child>
        <Button
          :variant="variant"
          role="combobox"
          :aria-expanded="isOpen"
          :class="buttonClasses"
        >
          {{ selectedLabel || placeholder }}
          <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent :class="contentClasses">
        <Command>
          <CommandInput 
            :class="inputClasses" 
            :placeholder="searchPlaceholder" 
            @input="searchTerm = $event.target.value"
          />
          <CommandEmpty>{{ emptyMessage }}</CommandEmpty>
          <CommandList>
            <CommandGroup>
              <CommandItem
                v-for="item in filteredItems"
                :key="item[valueKey]"
                :value="item[valueKey]"
                @select="(ev) => {
                  if (typeof ev.detail.value === 'string') {
                    selectItem(item)
                  }
                }"
              >
                {{ item[labelKey] }}
                <Check
                  :class="cn(
                    'ml-auto h-4 w-4',
                    modelValue === item[valueKey] ? 'opacity-100' : 'opacity-0'
                  )"
                />
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue'
  import { Button } from '@/components/ui/button'
  import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
  } from '@/components/ui/command'
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from '@/components/ui/popover'
  import { Check, ChevronsUpDown } from 'lucide-vue-next'
  import { cn } from '@/lib/utils'
  
  
  // Define props with sensible defaults
  const props = withDefaults(defineProps<{
    items: Array<Record<string, any>>,
    modelValue?: string | number,
    valueKey?: string,
    labelKey?: string,
    placeholder?: string,
    searchPlaceholder?: string,
    emptyMessage?: string,
    variant?: 'default' | 'outline' | 'secondary' | 'ghost',
    buttonClasses?: string,
    contentClasses?: string,
    inputClasses?: string
  }>(), {
    valueKey: 'value',
    labelKey: 'label',
    placeholder: 'Select an option...',
    searchPlaceholder: 'Search...',
    emptyMessage: 'No items found.',
    variant: 'outline',
    buttonClasses: 'w-[200px] justify-between',
    contentClasses: 'w-[200px] p-0',
    inputClasses: 'h-9'
  })
  
  // Emit events for v-model support
  const emit = defineEmits<{
    (e: 'update:modelValue', value: string | number): void
  }>()
  
  // Internal state
  const isOpen = ref(false)
  const searchTerm = ref('')
  
  // Computed selected label
  const selectedLabel = computed(() => {
    const selectedItem = props.items.find(
      item => item[props.valueKey] === props.modelValue
    )
    return selectedItem ? selectedItem[props.labelKey] : ''
  })
  
  // Filtered items based on search
  const filteredItems = computed(() => {
    return props.items.filter(item => 
      item[props.labelKey].toLowerCase().includes(searchTerm.value.toLowerCase())
    )
  })
  
  // Select item method
  const selectItem = (item: Record<string, any>) => {
    emit('update:modelValue', item[props.valueKey])
    isOpen.value = false
    searchTerm.value = ''
  }
  </script>