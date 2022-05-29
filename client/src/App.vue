
<script lang="ts" setup>
</script>

<template>
  <VApp>
    <VAppBar app absolute>
      <VSpacer />
      
      <VBtn text exact class="text-none" :to="{name:'home'}">Home</VBtn>
      <VBtn text exact class="text-none" :to="{name:'typescript'}">Typescript</VBtn>
      <VBtn text exact class="text-none" :to="{name:'vite'}">Vite</VBtn>
      <VBtn text exact class="text-none" :to="{name:'vuetify'}">Vuetify</VBtn>
      
      <VSpacer />
    </VAppBar>

    <VMain>
      <RouterView />
    </VMain>
  </VApp>
</template>
