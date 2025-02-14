


<script setup>
  const token = useCookie('token')
  const layout = computed(() => token.value ? 'authenticated' : 'guest')
</script>

<template>
  <NuxtLayout :name="layout">
    <slot />
  </NuxtLayout>
</template>

  