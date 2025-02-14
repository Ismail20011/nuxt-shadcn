# components/AppSidebar.vue
<template>
  <aside class="fixed inset-y-0 left-0 w-64 bg-indigo-600 text-white">
    <div class="p-4">
      <Icon name="simple-icons:nuxt-dot-js" size="32" />
    </div>

    <nav class="px-3 py-4">
      <NuxtLink 
        v-for="item in mainNavigation" 
        :key="item.name"
        :to="item.path"
        class="flex items-center px-4 py-2 mt-1 rounded-lg transition-colors"
        :class="[route.path === item.path ? 'bg-indigo-700' : 'hover:bg-indigo-700/50']"
      >
        <Icon :name="item.icon" size="20" />
        <span class="ml-3">{{ item.name }}</span>
        <span v-if="item.count" class="ml-auto bg-indigo-500 text-xs px-2 py-0.5 rounded-full">
          {{ item.count }}
        </span>
      </NuxtLink>
    </nav>

    <div class="px-3 py-4">
      <h3 class="px-4 text-sm font-medium text-indigo-200">Your teams</h3>
      <div class="mt-2 space-y-1">
        <NuxtLink
          v-for="team in teams"
          :key="team.id"
          :to="team.path"
          class="flex items-center px-4 py-2 rounded-lg transition-colors hover:bg-indigo-700/50"
        >
          <span class="flex items-center justify-center w-6 h-6 text-xs font-medium bg-indigo-800 rounded">
            {{ team.initial }}
          </span>
          <span class="ml-3">{{ team.name }}</span>
        </NuxtLink>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 right-0 p-4">
      <div class="flex items-center">
        <!-- <img src="/placeholder-avatar.jpg" alt="User avatar" class="w-8 h-8 rounded-full" /> -->
        <span class="ml-3 font-medium">Tom Cook</span>
      </div>
    </div>
  </aside>
</template>

<script setup>
const route = useRoute()

const mainNavigation = [
  { name: 'Dashboard', path: '/', icon: 'ph:house-bold', count: '5' },
  { name: 'Team', path: '/team', icon: 'ph:users-bold' },
  { name: 'Projects', path: '/projects', icon: 'ph:folder-bold', count: '12' },
  { name: 'Calendar', path: '/calendar', icon: 'ph:calendar-bold', count: '20+' },
  { name: 'Documents', path: '/documents', icon: 'ph:file-text-bold' },
  { name: 'Reports', path: '/reports', icon: 'ph:chart-bar-bold' }
]

const teams = [
  { id: 1, name: 'Heroicons', initial: 'H', path: '/teams/heroicons' },
  { id: 2, name: 'Tailwind Labs', initial: 'T', path: '/teams/tailwind' },
  { id: 3, name: 'Workcation', initial: 'W', path: '/teams/workcation' }
]
</script>