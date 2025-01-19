<template>
  <section class="py-5 lg:py-20">
    <div class="flex flex-wrap">
      <div class="w-full lg:w-3/5">
        <Lottie loc="ani/home.json" />
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

          <div class="flex flex-wrap gap-4 font-mono text-lg uppercase mt-5">
            <a href="mailto:2xpt@proton.me" class="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center"> 2xpt@proton.me </a>
            <a href="https://t.me/+M_aVipwr_NUzMGE1" class="text-purple-400 hover:text-purple-300 transition-colors duration-300 flex items-center"> Telegram </a>
            <a href="https://x.com/2xptcom" class="text-pink-400 hover:text-pink-300 transition-colors duration-300 flex items-center"> Twitter </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
