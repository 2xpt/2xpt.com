<template>
  <div
    class="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-white bg-black"
  >
    <NuxtLink
      v-if="route.path !== '/'"
      to="/"
      class="w-full py-5 font-bold text-center text-black bg-white"
    >
      BACK TO HOME</NuxtLink
    >
    <div class="container p-5 m-auto">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
</script>