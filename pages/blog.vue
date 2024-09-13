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
            <div class="relative" style="height: 300px">
              <div class="absolute top-0 left-0 z-10">
                <svg
                  class="rounded-tl-2xl"
                  xmlns="http://www.w3.org/2000/svg"
                  width="159"
                  height="156"
                  viewBox="0 0 159 156"
                  fill="none"
                >
                  <path
                    d="M-30 81.9324V155.361C-30 155.714 -29.7141 156 -29.3615 156H21.62C21.9724 156 22.2585 155.714 22.2585 155.361V96.299C22.2585 57.5087 60.5087 19.2585 99.299 19.2585H158.361C158.714 19.2585 159 18.9724 159 18.62V-32.3615C159 -32.7139 158.714 -33 158.361 -33H84.9324C21.4572 -33 -30 18.4572 -30 81.9324Z"
                    fill="#FF7100"
                  ></path>
                </svg>
              </div>
              <div class="absolute bottom-0 right-0 z-10">
                <svg
                  class="rounded-br-2xl"
                  xmlns="http://www.w3.org/2000/svg"
                  width="150"
                  height="158"
                  viewBox="0 0 150 158"
                  fill="none"
                >
                  <path
                    d="M189 74.0676V0.638514C189 0.286054 188.714 0 188.361 0H137.38C137.028 0 136.742 0.286054 136.742 0.638514V59.701C136.742 98.4913 98.4914 136.742 59.701 136.742H0.638514C0.286054 136.742 0 137.028 0 137.38V188.361C0 188.714 0.286054 189 0.638514 189H74.0676C137.543 189 189 137.543 189 74.0676Z"
                    fill="#FF7100"
                  ></path>
                </svg>
              </div>
              <img
                class="absolute inset-0 object-cover w-full h-full rounded-2xl"
                src="https://ipfs.io/ipfs/QmSsUfeS2EXfe6QJa5G3MYoJXmLhgr7kzUMo9cVJM6wfmq"
                alt=""
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
