<template>
  <div class="max-w-sm mt-10">
    <span
      class="block mb-4 text-4xl font-bold text-yellow-500 hover:scale-125"
      >{{ id }}</span
    >
    <h4 class="mb-4 text-2xl font-bold text-white hover:text-yellow-500">
      {{ title }}
    </h4>
    <p class="tracking-wide text-white">{{ subtitle }}</p>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
};
</script>
