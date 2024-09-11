<template>
  <section class="py-5 lg:py-20">
    <div class="flex flex-wrap">
      <div class="w-full lg:w-3/5">
        <Lottie loc="/ani/circle.json" />
      </div>
      <div class="w-full lg:w-2/5">
        <div
          class="flex flex-col items-stretch justify-center h-full sm:items-start"
        >
          <div
            class="my-5 text-2xl font-bold tracking-widest text-yellow-300 lg:text-6xl hover:text-white"
          >
            2 X P L
          </div>

          <div class="my-3 font-mono text-base tracking-wide lg:text-xl">
            2 Experts in Programming & Technology
          </div>

          <div class="my-3 uppercase">
            <div class="relative inline-block mr-3">
              <NuxtLink to="/blog"> <Xbut textinput="Blog" /> </NuxtLink>
            </div>
            <div class="relative inline-block mr-3">
              <NuxtLink to="/service"> <Xbut textinput="Services" /> </NuxtLink>
            </div>
            <div class="relative inline-block mr-3">
              <NuxtLink to="/contact"> <Xbut textinput="CONTACT" /> </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
