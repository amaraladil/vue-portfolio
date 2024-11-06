<template>
  <NavBar/>
  <main>
    <router-view/>
  </main>
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
  @apply bg-gradient-to-br from-purple-300 to-indigo-300 overscroll-none;
}

html {
  scroll-behavior: smooth;
}

main {
  @apply md:ml-20 pb-10 md:pb-0 font-sans ;
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

.scrollbar {
  scrollbar-width: thin;
  scrollbar-color: var(--primary) var(--tertiary);
}

::-webkit-scrollbar {
  width: 0.5rem;
}

::-webkit-scrollbar-track {
  
  background: var(--tertiary);
}

::-webkit-scrollbar-thumb {
  background-color: var(--primary);
}
</style>
