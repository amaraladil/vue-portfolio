<template>
  <ClayMan />
  
  <MarqueeInfinite />

  <Experience />


  <div class="custom-shape-divider-top-1710910973 bg-gray-400">
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        class="shape-fill"
      ></path>
      <linearGradient
        gradientTransform="rotate(150, 0.5, 0.5)"
        id="gradient-0"
        x1="0%"
        x2="100%"
        y1="0%"
        y2="0%"
      >
        <stop offset="0%" stop-color="rgba(107, 114, 128)" />
        <stop offset="100%" stop-color="rgba(156, 163, 175, var(--tw-bg-opacity))" />
      </linearGradient>
    </svg>
  </div>

  <Projects />
</template>

<script>
import ClayMan from "@/components/ClayMan.vue";
import LeftTile from "@/components/ProjectsLeftPicture.vue";
import RightTile from "@/components/ProjectsRightPicture.vue";
import MarqueeInfinite from "@/components/Marquee.vue";
import Experience from "@/components/Experience.vue";
import Projects from "@/components/Projects.vue";

export default {
  name: "home",
  components: {
    ClayMan,
    LeftTile,
    RightTile,
    MarqueeInfinite,
    Experience,
    Projects,
  },
};
</script>

<style scoped>

.custom-shape-divider-top-1710910706 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-top-1710910973 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 349px;
}

.custom-shape-divider-top-1710910973 .shape-fill {
  --tw-bg-opacity: 1;
  fill: url(#gradient-0);
  /* fill: rgba(107, 114, 128, var(--tw-bg-opacity)); */
}
</style>
