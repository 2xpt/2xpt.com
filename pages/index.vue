<template>
  <section class="py-5 lg:py-20">
    <div class="flex flex-wrap">
      <div class="w-full lg:w-3/5">
        <Lottie :loc="randomani" />
      </div>
      <div class="w-full lg:w-2/5">
        <div class="flex flex-col items-stretch justify-center h-full sm:items-start">
          <div class="my-5 text-2xl font-bold tracking-widest text-yellow-300 lg:text-4xl hover:text-white">2 X P T</div>

          <div class="my-3 font-mono text-base tracking-wide lg:text-xl">We deliver innovative, secure, and customized technology solutions that drive organizational success.</div>

          <div class="my-3 uppercase">
            <div class="relative inline-block mr-3">
              <NuxtLink to="/service"> <Xbut textinput="Services" /> </NuxtLink>
            </div>

            <div class="relative inline-block mr-3">
              <NuxtLink to="/about"> <Xbut textinput="About" /> </NuxtLink>
            </div>
          </div>

          <div class="flex flex-wrap gap-4 mt-5 font-mono text-lg uppercase">
            <a href="mailto:2xpt@proton.me" class="flex items-center text-blue-400 transition-colors duration-300 hover:text-blue-300"> 2xpt@proton.me </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const lottieani = ["ani/home.json", "ani/circle.json"];
const randomani = lottieani[Math.floor(Math.random() * lottieani.length)];
</script>
