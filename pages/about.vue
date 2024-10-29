<template>
  <section class="py-12 overflow-hidden">
    <div class="flex flex-wrap items-center -mx-4">
      <div class="w-full lg:w-1/2">
        <Lottie loc="/ani/circle.json" />
      </div>
      <div class="w-full lg:w-1/2">
        <div class="m-auto">
          <img
            class="mb-4"
            src="https://shuffle.dev/mockup-assets/images/quote.svg"
            alt=""
          />
          <h2 class="mb-4 text-5xl font-bold text-yellow-200 font-heading">
            Who We Are
          </h2>
          <p class="font-mono text-2xl">
            We are a team of passionate individuals dedicated to making the
            world a better place through innovative solutions and creative
            design. Our mission is to empower our clients and help them achieve
            their goals.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="py-12 overflow-hidden">
    <p class="font-medium tracking-wide text-blue-500 uppercase">OUR TEAM</p>
    <h2
      class="relative max-w-lg mt-5 mb-10 text-4xl font-semibold leading-tight lg:text-5xl"
    >
      An incredible team of <br />amazing individuals
    </h2>
    <div class="grid w-full grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4">
      <div
        v-for="member in team"
        :key="member.name"
        class="flex flex-col items-center justify-center col-span-1"
      >
        <div class="relative p-5">
          <div
            class="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full bg-blue-50"
          ></div>
          <img class="relative z-20 w-full rounded-full" :src="member.image" />
        </div>
        <div class="mt-3 space-y-2 text-center">
          <div class="space-y-1 text-lg font-medium leading-6">
            <h3>{{ member.name }}</h3>
            <p class="font-extrabold text-yellow-200">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-20 my-20">
    <div class="flex flex-wrap">
      <div class="w-full lg:w-1/2">
        <div
          class="flex flex-col items-stretch justify-center h-full sm:items-start"
        >
          <div class="my-5 text-lg font-bold tracking-widest lg:text-7xl">
            TEAM THAT BUILDS
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/2">
        <div class="my-3 font-mono text-lg tracking-wide lg:text-2xl">
          We work together to create innovative solutions that are tailored to
          each client's needs. Our team is committed to excellence and we strive
          to exceed our clients' expectations.
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const team = ref([
  {
    name: "Aman S",
    role: "Advisor and Co-Founder",
    image: "https://cdn.devdojo.com/images/june2021/avt-03.jpg",
  },
  {
    name: "Anchal J",
    role: "Managing Director",
    image: "https://cdn.devdojo.com/images/june2021/avt-07.jpg",
  },
  {
    name: "Madhav P",
    role: " Lead Developer and Co-Founder",
    image: "https://cdn.devdojo.com/images/june2021/avt-07.jpg",
  },
]);

team.value = team.value.sort(() => Math.random() - 0.5);
</script>
