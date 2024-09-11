<template>
  <main>
    <ContentList path="/" v-slot="{ list }">
      <div class="flex flex-wrap gap-4">
        <div
          v-for="article in list"
          :key="article._path"
          class="flex-1 min-w-[200px] p-4"
        >
          <div class="relative">
            <img
              src="https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;h=1700&amp;q=80"
              class="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110"
              alt=""
            />
            <div class="relative mt-5">
              <NuxtLink :to="article._path" class="block mb-3">
                <h2
                  class="text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  {{ article.title }}
                </h2>
              </NuxtLink>
              <p class="mb-4 text-gray-700">
                Seek out adventure and live a life that others envy. You only
                get one chance to reach for the sky. Explore, discover, and seek
                out adventure.
              </p>

              <NuxtLink :to="article._path" class="font-medium underline"
                >Read More</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </ContentList>
  </main>
</template>
