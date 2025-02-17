<template>
  <DynamicSelect 
    v-model="selectedFramework"
    :items="frameworks"
    placeholder="Select a framework"
    searchPlaceholder="Search frameworks..."
    emptyMessage="No framework found"
  />
</template>

<script setup>
const selectedFramework = ref('')
const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt', label: 'Nuxt' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
]
</script>