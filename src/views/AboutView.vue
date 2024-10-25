<template>
  <ClayMan />
  
  <MarqueeInfinite />

  <div class="container-slider border-b-8 border-black border-double">
    <div class="left-side mt-10 mb-5">
      <!-- Parent container for the sticky content -->
      <div class="sticky-container">
        <!-- Content that will stick -->
        <div class="sticky-content">
          <img alt="Vue logo" src="../assets/logo.png" class="w-full" />
        </div>
      </div>
    </div>
    <div class="right-side px-6 items-center mb-5">
      <div class="right-side-layers">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel numquam
          veritatis, quis dignissimos molestias mollitia debitis sapiente quae
          ullam ea quaerat laboriosam iste. Corrupti quasi est ratione
          cupiditate at repellendus!
        </p>
      </div>
      <div class="right-side-layers">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
          provident neque officiis amet, distinctio ad obcaecati. Cupiditate,
          repellendus architecto delectus impedit ea fuga eos sed molestias
          magnam laborum? Impedit, laboriosam?
        </p>
      </div>
      <div class="right-side-layers">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          aspernatur aperiam quos exercitationem nam soluta fugit quod eaque
          nobis, rem, in facilis omnis expedita minima a incidunt cupiditate
          inventore odio?
        </p>
      </div>
      <div class="right-side-layers">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          expedita cupiditate architecto perspiciatis ab officiis cum dolore
          velit quas, mollitia totam delectus iusto non minima libero! Sapiente
          nemo voluptatibus earum!
        </p>
      </div>
    </div>
  </div>
  
  <!-- gradient blue/purple -->
  <!-- <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:svgjs="http://svgjs.dev/svgjs"
    viewBox="0 0 700 700"
    width="700"
    height="700"
  >
    <defs>
      <linearGradient
        gradientTransform="rotate(150, 0.5, 0.5)"
        x1="50%"
        y1="0%"
        x2="50%"
        y2="100%"
        id="ffflux-gradient"
      >
        <stop stop-color="hsl(315, 100%, 72%)" stop-opacity="1" offset="0%" />
        <stop stop-color="hsl(227, 100%, 50%)" stop-opacity="1" offset="100%" />
      </linearGradient>
      <filter
        id="ffflux-filter"
        x="-20%"
        y="-20%"
        width="140%"
        height="140%"
        filterUnits="objectBoundingBox"
        primitiveUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.005 0.003"
          numOctaves="2"
          seed="2"
          stitchTiles="stitch"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          result="turbulence"
        ></feTurbulence>
        <feGaussianBlur
          stdDeviation="20 0"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          in="turbulence"
          edgeMode="duplicate"
          result="blur"
        ></feGaussianBlur>
        <feBlend
          mode="hard-light"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          in="SourceGraphic"
          in2="blur"
          result="blend"
        ></feBlend>
      </filter>
    </defs>
    <rect
      width="700"
      height="700"
      fill="url(#ffflux-gradient)"
      filter="url(#ffflux-filter)"
    ></rect>
  </svg> -->

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

  <article id="projects" class="pb-10 ">
    
    <RightTile title="#1 hello world" content="Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum." 
            demoLink="hi"/>
    <LeftTile title="#2 whats up world" content="Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum." 
            demoLink="hi"/>
    <RightTile title="#3 Monke" content="Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum." />
    <LeftTile title="#4 Dumdum" content="Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum."/>
    <RightTile title="#5 My G" content="Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum."/>
    <RightTile title="#6 GalPal" content="Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum."/>
    <RightTile title="#7 ToDo App" content="Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum."/>
    <LeftTile title="#8 Hello World" content="Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum."/>

  </article>
</template>

<script>
import ClayMan from "@/components/ClayMan.vue";
import LeftTile from "@/components/LeftTile.vue";
import RightTile from "@/components/RightTile.vue";
import MarqueeInfinite from "@/components/Marquee.vue";

export default {
  name: "about",
  components: {
    ClayMan,
    LeftTile,
    RightTile,
    MarqueeInfinite,
  },
};
</script>

<style scoped>
.container-slider {
  border-top: 1px solid #000;
  display: flex;
  position: relative;
  @apply bg-gray-500 px-10;
}

.left-side {
  /* width: 50%; */
  @apply w-1/3 sm:w-1/2;
}

.right-side {
  width: 50%;
  /* vertical-align: middle; */
  height: 100vh; /* Make this taller to see the effect */
}

.right-side-layers {
  height: 60vh;
  @apply flex flex-wrap items-center;
}

.sticky-container {
  height: 240vh; /* Adjust this to control when the sticky content stops sticking */
}

.sticky-content {
  position: sticky;
  top: 10vh;
  margin-top: 10vh; /* Adjust this to control the space at the top */
  @apply bg-gray-400;
}

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
