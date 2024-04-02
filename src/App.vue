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
  watch: {
    $route() {
      console.log('Route changed');
    },
    $route(to, from) {
      process.env.BASE_URL
      console.log(to, from);
    },
  },
};
</script>

<style lang="scss">
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

body {
  @apply bg-gray-500;
}

.router-link-exact-active {
  @apply underline font-bold;
}
</style>
