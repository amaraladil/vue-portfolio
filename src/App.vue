<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Your App</span>
    </div>
    <div class="block lg:hidden">
      <button @click="toggle" class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <!-- Hamburger Icon -->
        <svg v-if="!isOpen" class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z"/></svg>
        <!-- X Icon -->
        <svg v-else class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
      </button>
    </div>
    <div :class="{ 'hidden': !isOpen, 'block': isOpen }" class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <router-link to="/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Home
        </router-link>
        <router-link to="/about" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          About
        </router-link>
      </div>
    </div>
  </nav>
  <router-view/>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss">
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
</style>
