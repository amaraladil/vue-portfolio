<template>
  <NavBar/>
  <router-view/>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar
  },
};
</script>

<style lang="scss">
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

body {
  @apply bg-gray-200;
}

:root {
  --primary: #3b82f6;
  --secondary: #f87171;
  --tertiary: #fbbf24;
  --quaternary: #10b981;
  --quinary: #f59e0b;
  --senary: #6366f1;
  --septenary: #ec4899;
  --octonary: #4f46e5;
  --nonary: #f43f5e;
  --denary: #f43f5e;
}

body::-webkit-scrollbar {
  width: 10rem;
}

body::-webkit-scrollbar-track {
  background: #1e1e24;
}

body::-webkit-scrollbar-thumb {
  background-color: var(--primary);
}
</style>
