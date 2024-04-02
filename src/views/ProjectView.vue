<template>
  <Transition appear
    name="slide-right">
    <div class="project">
      <h1>
        This is Project {{ $route.params.projectId }}
      </h1>
      <!-- Add your layout here -->
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
  </Transition>
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
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.25s ease-out;
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
