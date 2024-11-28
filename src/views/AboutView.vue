<template>
  <ClayMan />
  
  <MarqueeInfinite />

  <Experience />
  
  <div id="project" class="spliter whitespace-nowrap overflow-hidden h-48 bg-gradient-to-tr from-electric-violet-100 to-electric-violet-300 dark:from-purple-900 dark:to-indigo-800">
    <div class="spliter-slate"></div>
    <div class="proj-title ">
      Projects
    </div> 
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

.spliter .spliter-slate {
  transform: translateX(-5vw) translateY(10px) rotate(2deg);
  bottom: 70px;
  width: 105vw;
  @apply relative h-36 bg-purple-300 dark:bg-gray-700 border-b-8 border-indigo-900 dark:border-indigo-400 border-dotted;
}

.proj-title {
  left: 0; 
  right: 0; 
  z-index: 1;
  margin-inline: auto; 
  width: fit-content;
  @apply absolute text-center font-bold text-4xl font-serif text-gray-900 dark:text-gray-200;
}
</style>
