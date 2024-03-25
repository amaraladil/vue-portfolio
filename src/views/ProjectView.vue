<template>
  <div class="project1">
    <h1 class="transition-opacity duration-10000 opacity-0 animate from-left to-right">
      This is Project 1 {{ $route.params.projectId }}
    </h1>
    <!-- Add your layout here -->
  </div>
</template>

<script>
export default {
  name: 'Project1View',
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    // Simulating loading delay
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
