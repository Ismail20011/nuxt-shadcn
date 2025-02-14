<template>
 <div class="max-w-4xl mx-auto p-4 sm:p-6">
   <!-- Toggle Switch -->
   <div class="max-w-xl mx-auto p-4 sm:p-6 flex justify-center mb-2">
     <div
       class="relative inline-flex bg-primary/10 rounded-full p-1 cursor-pointer select-none w-full sm:w-80"
       @click="toggleQuality"
     >
       <div
         class="absolute top-0 bottom-0 my-auto h-full w-1/2 bg-primary rounded-full shadow-md transform transition-transform duration-300"
         :class="{
           'translate-x-full': quality === '4K'
         }"
       ></div>
       <div
         class="relative z-10 flex items-center justify-center w-full"
       >
         <span
           class="w-1/2 text-center py-1.5 sm:py-2 text-xs sm:text-sm font-bold"
           :class="{
             'text-white': quality === 'FHD',
             'text-gray-600': quality !== 'FHD'
           }"
         >
           FHD
         </span>
         <span
           class="w-1/2 text-center py-1.5 sm:py-2 text-xs sm:text-sm font-bold"
           :class="{
             'text-white': quality === '4K',
             'text-gray-600': quality !== '4K'
           }"
         >
           4K
         </span>
       </div>
     </div>
   </div>

   <!-- Plans Grid -->
   <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
     <div v-for="item in packages"
          :key="item.package_id"
          @click="selectPlan(item.package_id)"
          class="relative">
       <!-- Check Icon wrapper -->
       <div v-if="selectedPlan === item.package_id"
            class="absolute -top-2 -right-2 z-10 bg-primary/90 rounded-full p-1.5 border-2 border-white">
         <Icon
           name="heroicons:check"
           class="w-4 sm:w-6 text-white"
         />
       </div>

       <div :class="[
         'p-4 sm:p-6 rounded-xl border cursor-pointer',
         'transition-all duration-200 ease-in-out',
         'hover:bg-primary/5',
         selectedPlan === item.package_id ?
           'bg-primary/5 border-primary/100 shadow-lg' :
           'border-gray-200'
       ]">
         <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
           <div>
             <h3 class="text-gray-600 text-xl sm:text-2xl font-semibold">
               {{ item.duration }} {{ item.duration_in }}
             </h3>
           </div>
           
           <div class="w-full sm:w-auto text-left sm:text-right">
             <div class="text-primary/90 text-xl sm:text-2xl font-semibold">
               {{ parseFloat(item.price).toFixed(2) }} €
             </div>
             <div class="text-gray-500 text-xs sm:text-sm font-semibold">
              {{ calculateMonthlyRate(item.price,item.duration) }} €/mois
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
</template>

<script setup>
import { ref } from 'vue'



const store = useRegisterStore();

const selectedPlan = computed(()=>{
  return store.user_info.package_id ;
})

const packages = computed(()=>{
  return quality.value === 'FHD' ? store.list_plans_fhd : store.list_plans_4k;
})

const selectPlan = (package_id ) => {
  store.selectPackage(package_id);
};

const quality = ref('FHD');

const toggleQuality = () => {
  quality.value = quality.value === 'FHD' ? '4K' : 'FHD'
}

const calculateMonthlyRate = (price, duration) => {
  // Convertir le prix en nombre et calculer le taux mensuel
  const monthlyRate = (parseFloat(price) / duration).toFixed(2)
  return monthlyRate
}


</script>