<template>
  <div
    class="px-4 py-2 mr-3 text-base tracking-wider text-center text-black no-underline align-middle transition-transform duration-300 transform bg-yellow-300 rounded-lg cursor-pointer hover:bg-black hover:text-white hover:scale-110"
  >
    {{ textinput }}
  </div>
</template>

<script>
export default {
  props: {
    textinput: {
      type: String,
      required: true,
    },
  },
};
</script>
