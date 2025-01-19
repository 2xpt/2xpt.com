<template>
  <section class="py-20 my-20">
    <div class="flex flex-wrap">
      <div class="w-full lg:w-1/2">
        <div class="flex flex-col items-stretch justify-center h-full sm:items-start">
          <div class="my-5 text-lg font-bold tracking-widest text-transparent lg:text-7xl bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text">OUR TEAM</div>
        </div>
      </div>
      <div class="w-full lg:w-1/2">
        <div class="my-3 font-mono text-lg tracking-wide lg:text-2xl">Passionate team ✨ creating innovative solutions & designs 🎨 to make the world better 🌎 and empower our clients to reach their goals! 🚀</div>
      </div>
    </div>
  </section>

  <section class="py-12 overflow-hidden">
    <div class="grid w-full grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4">
      <div v-for="member in team" :key="member.name" class="flex flex-col items-center justify-center col-span-1">
        <div class="relative p-5">
          <div class="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full bg-blue-50"></div>
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
    <div class="my-3 font-mono text-lg tracking-wide lg:text-2xl">We work together to create innovative solutions that are tailored to each client's needs. Our team is committed to excellence and we strive to exceed our clients' expectations.</div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const team = ref([
  {
    name: "Aman S",
    role: "Advisor and Co-Founder",
    image: "https://ipfs.io/ipfs/QmdeGZhpRp59tkjDFJ59NXBJ5fhBppeKYaTUEceG3xtti3",
  },
  {
    name: "Anchal J",
    role: "Managing Director",
    image: "https://ipfs.io/ipfs/bafybeigbtca7y3tv7jptqj2fuhuzeotdjc7yzefoqwiuyjextephqvrklm",
  },
  {
    name: "Madhav P",
    role: " Lead Developer and Co-Founder",
    image: "https://ipfs.io/ipfs/QmdeGZhpRp59tkjDFJ59NXBJ5fhBppeKYaTUEceG3xtti3",
  },
]);

team.value = team.value.sort(() => Math.random() - 0.5);
</script>
