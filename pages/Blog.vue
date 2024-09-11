<template>
  <section class="py-12">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">Latest from Our Blog</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(post, index) in blogPosts" :key="index" class="flex flex-col h-full bg-white dark:bg-gray-800 rounded-md">
          <div class="p-0">
            <img :src="post.image" :alt="post.title" class="w-full h-48 object-cover" />
          </div>
          <div class="flex-grow p-6">
            <span class="mb-2 badge badge-secondary">{{ post.category }}</span>
            <h3 class="text-xl mb-2 text-gray-800 dark:text-gray-100">{{ post.title }}</h3>
            <p class="text-gray-600 dark:text-gray-300">{{ post.description }}</p>
          </div>
          <div class="p-6 pt-0">
            <div class="flex justify-between items-center w-full">
              <span class="text-sm text-gray-500 dark:text-gray-400">{{ post.date }}</span>
              <button class="btn-outline">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      blogPosts: [
        {
          title: "Getting Started with React",
          description: "Learn the basics of React and start building your first application.",
          image: "/placeholder.svg?height=200&width=400",
          category: "React",
          date: "May 15, 2023",
        },
        {
          title: "Advanced TypeScript Techniques",
          description: "Dive deep into TypeScript and discover advanced types and patterns.",
          image: "/placeholder.svg?height=200&width=400",
          category: "TypeScript",
          date: "June 2, 2023",
        },
        {
          title: "Building Responsive Layouts with Tailwind CSS",
          description: "Master the art of creating beautiful, responsive designs using Tailwind CSS.",
          image: "/placeholder.svg?height=200&width=400",
          category: "CSS",
          date: "June 20, 2023",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* You can add scoped styles here if needed */
</style>
