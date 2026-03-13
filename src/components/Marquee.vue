<template>
  <div class="marquee-overview">
    <div class="marquee-container">
      <div class="marquee-content">
        <v-icon name="co-vue-js" />
        <v-icon name="si-nodedotjs" />
        <v-icon name="co-html5" />
        <v-icon name="co-css3-shiled" />
        <v-icon name="co-ibm" />
        <v-icon name="si-postgresql" />
        <v-icon name="si-csharp" />
        <v-icon name="co-cplusplus" />
        <v-icon name="co-python" />
        <v-icon name="co-tensorflow" />
        <v-icon name="co-java" />
        <v-icon name="co-mongodb" />
        <v-icon name="si-nuxtdotjs" />
        <v-icon name="si-fastapi" />
        <v-icon name="si-php" />
        <v-icon name="co-react" />
        <v-icon name="si-googlecloud" />
        <v-icon name="co-mysql" />
        <v-icon name="co-ruby" />
        <v-icon name="si-supabase" />
        <v-icon name="si-dotnet" />
        <v-icon name="si-tailwindcss" />
        <v-icon name="si-bootstrap" />
        <v-icon name="si-express" />
      </div>
      <div class="marquee-content">
        <v-icon name="co-vue-js" />
        <v-icon name="si-nodedotjs" />
        <v-icon name="co-html5" />
        <v-icon name="co-css3-shiled" />
        <v-icon name="co-ibm" />
        <v-icon name="si-postgresql" />
        <v-icon name="si-csharp" />
        <v-icon name="co-cplusplus" />
        <v-icon name="co-python" />
        <v-icon name="co-tensorflow" />
        <v-icon name="co-java" />
        <v-icon name="co-mongodb" />
        <v-icon name="si-nuxtdotjs" />
        <v-icon name="si-fastapi" />
        <v-icon name="si-php" />
        <v-icon name="co-react" />
        <v-icon name="si-googlecloud" />
        <v-icon name="co-mysql" />
        <v-icon name="co-ruby" />
        <v-icon name="si-supabase" />
        <v-icon name="si-dotnet" />
        <v-icon name="si-tailwindcss" />
        <v-icon name="si-bootstrap" />
        <v-icon name="si-express" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MarqueeInfinite",
};
</script>

<style scoped>
.marquee-overview {
  overflow: hidden;
  /* height: 30em; */
  /* bottom: 300px; */
  /* position: relative;
        white-space: nowrap; */
}

.marquee-container {
  overflow: hidden;
  white-space: nowrap;
  bottom: -50px;
  transform: translateX(-5vw) translateY(10px) rotate(-3deg);
  z-index: 1;
  /* Dynamic width based on viewport */
  width: max(4000px, 150vw); /* Ensures it covers ultra-wide screens */
  @apply bg-indigo-300 dark:bg-gray-700;
  padding: 0.5em 0 10em 1em;
  position: relative;
}

.marquee-content {
  display: inline-flex !important;
  animation: marquee var(--marquee-duration, 35s) linear infinite;
  @apply text-indigo-900 dark:text-indigo-400;

  svg {
    height: 10em;
    margin-right: clamp(10px, 2vw, 20px);
    width: clamp(150px, 15vw, 200px);
    flex-shrink: 0;
  }
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
