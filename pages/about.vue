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

  <section class="py-20 overflow-hidden">
    <div class="flex flex-wrap items-end">
      <div class="w-full px-4 mb-12 md:w-1/2 lg:w-1/4">
        <div class="max-w-2xs">
          <div class="mb-8">
            <svg
              width="50"
              height="50"
              viewbox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40.475 32.142C39.8933 31.5603 39.1525 31.1638 38.3458 31.0025L33.3718 30.0077C30.6461 29.4626 27.8164 29.8415 25.3302 31.0846L24.669 31.4152C22.1827 32.6583 19.3531 33.0373 16.6274 32.4921L12.6029 31.6872C11.2368 31.414 9.82455 31.8416 8.83945 32.8267M16.6663 8.33325H33.3329L31.2496 10.4166V21.1907C31.2496 22.2958 31.6886 23.3556 32.47 24.137L42.8866 34.5536C45.5115 37.1785 43.6525 41.6666 39.9404 41.6666H10.0588C6.3467 41.6666 4.48768 37.1785 7.11253 34.5536L17.5292 24.137C18.3106 23.3556 18.7496 22.2958 18.7496 21.1907V10.4166L16.6663 8.33325Z"
                stroke="#F2FF5A"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <h4 class="mb-4 text-2xl font-bold text-white">Quality Products</h4>
          <p class="text-gray-400">
            Lorem ipsum dolor sit amet, consec tetur of adipiscing a elit.
            Nullam.
          </p>
        </div>
      </div>
      <div class="w-full px-4 mb-12 md:w-1/2 lg:w-1/4">
        <div class="max-w-2xs">
          <div class="mb-8">
            <svg
              width="36"
              height="40"
              viewbox="0 0 36 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.0835 15.8333V1.25L1.3335 24.1667H15.9168L15.9168 38.75L34.6668 15.8333L20.0835 15.8333Z"
                stroke="#F2FF5A"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <h4 class="mb-4 text-2xl font-bold text-white">Fast Delivery</h4>
          <p class="text-gray-400">
            Lorem ipsum dolor sit amet, consec tetur of adipiscing a elit.
            Nullam.
          </p>
        </div>
      </div>
      <div class="w-full px-4 mb-12 md:w-1/2 lg:w-1/4">
        <div class="max-w-2xs">
          <div class="mb-8">
            <svg
              width="40"
              height="32"
              viewbox="0 0 40 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.25 11.8334H38.75M9.58333 22.2501H11.6667M20 22.2501H22.0833M7.5 30.5834H32.5C35.9518 30.5834 38.75 27.7852 38.75 24.3334V7.66675C38.75 4.21497 35.9518 1.41675 32.5 1.41675H7.5C4.04822 1.41675 1.25 4.21497 1.25 7.66675V24.3334C1.25 27.7852 4.04822 30.5834 7.5 30.5834Z"
                stroke="#F2FF5A"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <h4 class="mb-4 text-2xl font-bold text-white">Touchless Payments</h4>
          <p class="text-gray-400">
            Lorem ipsum dolor sit amet, consec tetur of adipiscing a elit.
            Nullam.
          </p>
        </div>
      </div>
      <div class="w-full px-4 mb-12 md:w-1/2 lg:w-1/4">
        <div class="max-w-2xs">
          <div class="mb-8">
            <svg
              width="40"
              height="36"
              viewbox="0 0 40 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.58333 9.66659H30.4167M9.58333 17.9999H17.9167M20 34.6666L11.6667 26.3333H5.41667C3.11548 26.3333 1.25 24.4678 1.25 22.1666V5.49992C1.25 3.19873 3.11548 1.33325 5.41667 1.33325H34.5833C36.8845 1.33325 38.75 3.19873 38.75 5.49992V22.1666C38.75 24.4678 36.8845 26.3333 34.5833 26.3333H28.3333L20 34.6666Z"
                stroke="#F2FF5A"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <h4 class="mb-4 text-2xl font-bold text-white">Best Support</h4>
          <p class="text-gray-400">
            Lorem ipsum dolor sit amet, consec tetur of adipiscing a elit.
            Nullam.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="py-12 overflow-hidden">
    <div class="flex flex-wrap justify-between">
      <div class="w-full p-6 lg:w-5/12 xl:w-1/2">
        <p class="mb-5 text-xl font-medium text-gray-400 font-heading">
          Testimonials
        </p>
        <h1
          class="font-bold text-yellow-200 mb-14 font-heading text-7xl md:text-9xl xl:text-11xl"
        >
          What Our Clients Say
        </h1>
      </div>
      <div class="w-full p-6 lg:w-7/12 xl:w-1/2">
        <div class="mx-auto max-w-max">
          <div class="flex flex-wrap justify-center mb-3 -m-3">
            <div class="w-full p-3">
              <div
                class="w-64 p-3 mx-auto transition duration-1000 ease-out transform bg-white hover:-translate-y-3 rounded-2xl"
              >
                <div class="flex flex-wrap -m-2">
                  <div class="w-auto p-2">
                    <img
                      src="https://shuffle.dev/gradia-assets/images/hero/avatar-circle.png"
                      alt=""
                    />
                  </div>
                  <div class="w-auto p-2">
                    <p class="text-base text-gray-900 font-heading">
                      Albert Flores
                    </p>
                    <p class="mb-2 text-sm text-gray-500">Best Hackers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap justify-center mb-3 -m-3 max-w-max">
            <div class="w-full p-3 sm:w-1/2">
              <div
                class="w-64 p-3 mx-auto transition duration-1000 ease-out transform bg-white hover:-translate-y-3 rounded-2xl"
              >
                <div class="flex flex-wrap -m-2">
                  <div class="w-auto p-2">
                    <img
                      src="https://shuffle.dev/gradia-assets/images/hero/avatar-circle2.png"
                      alt=""
                    />
                  </div>
                  <div class="w-auto p-2">
                    <p class="text-base text-gray-900 font-heading">
                      Darlene Robertson
                    </p>
                    <p class="mb-2 text-sm text-gray-500">Software Tester</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full p-3 sm:w-1/2">
              <div
                class="w-64 p-3 mx-auto transition duration-1000 ease-out transform bg-white hover:-translate-y-3 rounded-2xl"
              >
                <div class="flex flex-wrap -m-2">
                  <div class="w-auto p-2">
                    <img
                      src="https://shuffle.dev/gradia-assets/images/hero/avatar-circle3.png"
                      alt=""
                    />
                  </div>
                  <div class="w-auto p-2">
                    <p class="text-base text-gray-900 font-heading">
                      Kristin Watson
                    </p>
                    <p class="mb-2 text-sm text-gray-500">Project Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex flex-wrap justify-center mb-3 -m-3 max-w-max xl:-ml-20"
          >
            <div class="w-full p-3 sm:w-1/2">
              <div
                class="w-64 p-3 mx-auto transition duration-1000 ease-out transform bg-white hover:-translate-y-3 rounded-2xl"
              >
                <div class="flex flex-wrap -m-2">
                  <div class="w-auto p-2">
                    <img
                      src="https://shuffle.dev/gradia-assets/images/hero/avatar-circle4.png"
                      alt=""
                    />
                  </div>
                  <div class="w-auto p-2">
                    <p class="text-base text-gray-900 font-heading">
                      Guy Hawkins
                    </p>
                    <p class="mb-2 text-sm text-gray-500">
                      Complete & Talented
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full p-3 sm:w-1/2">
              <div
                class="w-64 p-3 mx-auto transition duration-1000 ease-out transform bg-white hover:-translate-y-3 rounded-2xl"
              >
                <div class="flex flex-wrap -m-2">
                  <div class="w-auto p-2">
                    <img
                      src="https://shuffle.dev/gradia-assets/images/hero/avatar-circle5.png"
                      alt=""
                    />
                  </div>
                  <div class="w-auto p-2">
                    <p class="text-base text-gray-900 font-heading">
                      Annette Black
                    </p>
                    <p class="mb-2 text-sm text-gray-500">Genius & Talented</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap justify-center -m-3 max-w-max">
            <div class="w-full p-3 sm:w-1/2">
              <div
                class="w-64 p-3 mx-auto transition duration-1000 ease-out transform bg-white hover:-translate-y-3 rounded-2xl"
              >
                <div class="flex flex-wrap -m-2">
                  <div class="w-auto p-2">
                    <img
                      src="https://shuffle.dev/gradia-assets/images/hero/avatar-circle.png"
                      alt=""
                    />
                  </div>
                  <div class="w-auto p-2">
                    <p class="text-base text-gray-900 font-heading">
                      Robert Fox
                    </p>
                    <p class="mb-2 text-sm text-gray-500">Fast & Efficient</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full p-3 sm:w-1/2">
              <div
                class="w-64 p-3 mx-auto transition duration-1000 ease-out transform bg-white hover:-translate-y-3 rounded-2xl"
              >
                <div class="flex flex-wrap -m-2">
                  <div class="w-auto p-2">
                    <img
                      src="https://shuffle.dev/gradia-assets/images/hero/avatar-circle2.png"
                      alt=""
                    />
                  </div>
                  <div class="w-auto p-2">
                    <p class="text-base text-gray-900 font-heading">
                      Cody Fisher
                    </p>
                    <p class="mb-2 text-sm text-gray-500">Perfect & Talented</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const team = ref([
  {
    name: "Freddy Smith",
    role: "CEO and Founder",
    image: "https://cdn.devdojo.com/images/june2021/avt-03.jpg",
  },
  {
    name: "Carl Jones",
    role: "CTO and Co-Founder",
    image: "https://cdn.devdojo.com/images/june2021/avt-07.jpg",
  },
  {
    name: "Susan Peterson",
    role: "Marketing Directory",
    image: "https://cdn.devdojo.com/images/june2021/avt-20.jpg",
  },
  {
    name: "Tommy Barnes",
    role: "Designer",
    image: "https://cdn.devdojo.com/images/june2021/avt-09.jpg",
  },
  {
    name: "Ron Jenson",
    role: "Senior Developer",
    image: "https://cdn.devdojo.com/images/june2021/avt-14.jpg",
  },
  {
    name: "Pete Tompkins",
    role: "Web Developer",
    image: "https://cdn.devdojo.com/images/june2021/avt-13.jpg",
  },
  {
    name: "Kelly Richards",
    role: "Sales Manager",
    image: "https://cdn.devdojo.com/images/june2021/avt-16.jpg",
  },
  {
    name: "Alexis Jordan",
    role: "Affiliate Manager",
    image: "https://cdn.devdojo.com/images/june2021/avt-08.jpg",
  },
]);
</script>
