<template>
  <main>
    <ContentRenderer :value="data">
      <div class="mt-8">
        <nuxtLink
          :to="`/blog`"
          class="inline-flex items-center mb-12 font-bold text-white hover:text-teal-600"
        >
          <svg
            width="20"
            height="20"
            viewbox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.4167 10H5M5 10L10 5M5 10L10 15"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <span class="ml-2">Back to Blog</span>
        </nuxtLink>
        <img
          class="block object-cover w-full mb-12 rounded-xl"
          :src="data.image"
          :alt="data.title"
        />
        <div class="max-w-4xl mx-auto">
          <div class="flex items-center mb-4">
            <span class="font-mono font-bold uppercase">
              Published on : {{ data.date }}</span
            >
          </div>
          <h2
            class="mb-12 text-4xl font-bold tracking-tight text-white transition-transform duration-500 ease-in-out font-heading sm:text-5xl hover:scale-110"
          >
            {{ data.title }}
          </h2>
          <ContentRendererMarkdown :value="data" />
        </div>
      </div>
    </ContentRenderer>
  </main>
</template>

<script setup lang="ts">
const { path } = useRoute();
const cleanPath = path.replace(/\/+$/, "");

const { data } = await useAsyncData("page-data", () =>
  queryContent().where({ _path: cleanPath }).findOne()
);
</script>
