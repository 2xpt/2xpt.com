<template>
  <ContentList path="/" v-slot="{ list }">
    <div class="flex flex-wrap mb-32 -mx-4">
      <div
        v-for="article in list"
        :key="article._path"
        class="w-full p-4 md:w-1/2 lg:w-1/3"
      >
        <nuxtLink :to="article._path">
          <div
            class="h-full p-3 transition duration-200 border border-gray-100 hover:border-orange-500 rounded-2xl"
          >
            <div style="height: 300px">
              <img
                class="object-cover w-full h-full rounded-2xl"
                src="https://ipfs.io/ipfs/QmSsUfeS2EXfe6QJa5G3MYoJXmLhgr7kzUMo9cVJM6wfmq"
              />
            </div>
            <div class="px-4 pt-6 pb-3">
              <h2 class="mb-3 font-bold font-heading">
                {{ article.title }}
              </h2>
              <p class="mb-6 text-sm">
                {{ article.description }}
              </p>
              <div class="flex flex-wrap items-center gap-3">
                <p class="text-sm">{{ article.date }}</p>
              </div>
            </div>
          </div>
        </nuxtLink>
      </div>
    </div>
  </ContentList>
</template>
