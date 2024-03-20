<template>
  <div class="container px-10 bg-gray-500">
    <div class="left-side mt-10 mb-5">
      <!-- Parent container for the sticky content -->
      <div class="sticky-container">
        <!-- Content that will stick -->
        <div class="sticky-content">
            <img alt="Vue logo" src="../assets/logo.png" class="w-full">
          <!-- <p>Ipsum #1 Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru
          </p> -->
        </div>
      </div>
    </div>
    <div class="right-side px-6 items-center mb-5">
      <div class="right-side-layers">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel numquam veritatis, quis dignissimos molestias mollitia debitis sapiente quae ullam ea quaerat laboriosam iste. Corrupti quasi est ratione cupiditate at repellendus!</p>
      </div>
      <div class="right-side-layers">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam provident neque officiis amet, distinctio ad obcaecati. Cupiditate, repellendus architecto delectus impedit ea fuga eos sed molestias magnam laborum? Impedit, laboriosam?</p>
      </div>
      <div class="right-side-layers">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aspernatur aperiam quos exercitationem nam soluta fugit quod eaque nobis, rem, in facilis omnis expedita minima a incidunt cupiditate inventore odio?</p>
      </div>
      <div class="right-side-layers">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione expedita cupiditate architecto perspiciatis ab officiis cum dolore velit quas, mollitia totam delectus iusto non minima libero! Sapiente nemo voluptatibus earum!</p>
      </div>
    </div>
  </div>

  <div class="custom-shape-divider-top-1710910973 bg-gray-400">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
  </div>
  
  <div class="px-10 flex flex-col md:flex-row items-center bg-gray-400">
    <div class="md:w-1/2 p-4 text-left">
      <!-- Content for left div -->
      #1.1 Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
    <div class="md:w-1/2 order-first md:order-last mx-9">
      <!-- Content for right div -->
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
  </div>

  <div class="px-10 flex flex-col md:flex-row items-center mb-10 bg-gray-400">
    <div class="md:w-1/3">
      <!-- Content for left div -->
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
    <div class="md:w-2/3 text-left">
      <!-- Content for right div -->
      #1.2 Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    </div>
  </div>


  <div>
    <!-- Row 1: Image on left, text on right -->
    <div class="md:grid md:grid-cols-2 items-center">
      <div class="order-last md:order-first">
        <img alt="Vue logo" src="../assets/logo.png">
      </div>
      <div class="text-left">
        <p>#2 Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>

    <!-- Row 2: Text on left, image on right -->
    <div class="md:grid md:grid-cols-2 items-center">
      <div class="text-left md:pr-8">
        <p>#3 Your text here...</p>
      </div>
      <div class="md:order-last sm:order-first">
        <img alt="Vue logo" src="../assets/logo.png">
      </div>
    </div>

    <!-- Add more rows as needed -->
  </div>
  <div class="flex flex-wrap">
    <div class="col-span-2">
      <div class="text-left col-12">
        #4 Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
      <div>
        <img alt="Vue logo" src="../assets/logo.png">
      </div>
    </div>
    <!-- <div class="text-left">
      Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div> -->
    <div class="m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:flex-wrap-reverse">
      <div>01
        <img alt="Vue logo" src="../assets/logo.png">
      </div>
      <div>02
        <img alt="Vue logo" src="../assets/logo.png">
      </div>
      <div>03
        <img alt="Vue logo" src="../assets/logo.png">
      </div>
      <div>04
        <img alt="Vue logo" src="../assets/logo.png">
      </div>
      <div>05
        <img alt="Vue logo" src="../assets/logo.png">
      </div>
      <div>06
        <img alt="Vue logo" src="../assets/logo.png">
      </div>

    </div>
  </div>
    
    
</template>

<style scoped>
.container {
  display: flex;
}

.left-side {
  width: 50%;
}

.right-side {
  width: 50%;
  /* vertical-align: middle; */
  height: 100vh; /* Make this taller to see the effect */
}

.right-side-layers{
  height: 60vh;
  @apply flex items-center
}

.sticky-container {
  height: 240vh; /* Adjust this to control when the sticky content stops sticking */
}

.sticky-content {
  position: sticky;
  top: 0;
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

.custom-shape-divider-top-1710910973 .shape-fill  {
  --tw-bg-opacity: 1;
  fill: rgba(107, 114, 128, var(--tw-bg-opacity));
}
</style>