<template>
  <section class="py-10">
    <div class="px-4 m-auto">
      <div class="flex flex-wrap items-center mb-20">
        <div class="w-full px-4 mb-8 lg:w-1/2 lg:mb-0">
          <h3 class="max-w-md text-6xl font-bold text-yellow-500 font-heading">CASE STUDIES</h3>
        </div>
        <div class="w-full px-4 lg:w-1/2">
          <Lottie loc="/ani/circle.json" />
        </div>
      </div>
      <section class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div class="rounded-lg border-2 bg-card border-red-900 p-6 space-y-4 flex flex-col justify-between">
          <div>
            <img width="400" height="225" alt="Case Study" class="rounded-lg" src="/banner.png" style="aspect-ratio: 400 / 225; object-fit: cover" />
            <h2 class="text-2xl font-bold text-white">2xpt Helps Startup Grow</h2>
            <p class="text-gray-500">Learn how 2xpt helped a startup company scale their infrastructure and increase their user base.</p>
          </div>
          <div class="flex">
            <NuxtLink to="/case-studies">
              <Xbut textinput="Read Case Study" />
            </NuxtLink>
          </div>
        </div>
        <div class="rounded-lg border-2 bg-card border-red-900 p-6 space-y-4 flex flex-col justify-between">
          <div>
            <img width="400" height="225" alt="Case Study" class="rounded-lg" src="/banner.png" style="aspect-ratio: 400 / 225; object-fit: cover" />
            <h2 class="text-2xl font-bold text-white">2xpt Helps Enterprise Innovate</h2>
            <p class="text-gray-500">
              Learn how 2xpt helped a large enterprise company modernize their tech stack and improve developer productivity.
            </p>
          </div>
          <div class="flex">
            <NuxtLink to="/case-studies">
              <Xbut textinput="Read Case Study" />
            </NuxtLink>
          </div>
        </div>
        <div class="rounded-lg border-2 bg-card border-red-900 p-6 space-y-4 flex flex-col justify-between">
          <div>
            <img width="400" height="225" alt="Case Study" class="rounded-lg" src="/banner.png" style="aspect-ratio: 400 / 225; object-fit: cover" />
            <h2 class="text-2xl font-bold text-white">2xpt Helps Non-Profit Succeed</h2>
            <p class="text-gray-500">Learn how 2xpt helped a non-profit organization streamline their operations and reach more people.</p>
          </div>
          <div class="flex">
            <NuxtLink to="/case-studies">
              <Xbut textinput="Read Case Study" />
            </NuxtLink>
          </div>
        </div>
        <div class="rounded-lg border-2 bg-card border-red-900 p-6 space-y-4 flex flex-col justify-between">
          <div>
            <img width="400" height="225" alt="Case Study" class="rounded-lg" src="/banner.png" style="aspect-ratio: 400 / 225; object-fit: cover" />
            <h2 class="text-2xl font-bold text-white">2xpt Helps Ecommerce Store Grow</h2>
            <p class="text-gray-500">Learn how 2xpt helped an ecommerce store increase their sales and improve their customer experience.</p>
          </div>
          <div class="flex">
            <NuxtLink to="/case-studies">
              <Xbut textinput="Read Case Study" />
            </NuxtLink>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>
