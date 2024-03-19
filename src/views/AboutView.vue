<template>
  <div class="container px-10">
    <div class="left-side mb-5">
      <!-- Parent container for the sticky content -->
      <div class="sticky-container">
        <!-- Content that will stick -->
        <div class="sticky-content">
          <p>Ipsum #1 Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru
          </p>
        </div>
      </div>
    </div>
    <div class="right-side px-6 items-center mb-5">
      <div class="right-side-layers">
        <p>This content will continue to scroll.</p>
      </div>
      <div class="right-side-layers">
        <p>This content will continue to scroll.</p>
        <img alt="Vue logo" src="../assets/logo.png">
      </div>
      <div class="right-side-layers">
        <p>This content will continue to scroll.</p>
        <img alt="Vue logo" src="../assets/logo.png">
      </div>
      <div class="right-side-layers">
        <p>This content will continue to scroll.</p>
        <img alt="Vue logo" src="../assets/logo.png">
      </div>
    </div>
  </div>


  <div class="px-10 flex flex-col md:flex-row items-center">
    <div class="md:w-1/2 p-4 text-left">
      <!-- Content for left div -->
      #1.1 Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
    <div class="md:w-1/2 order-first md:order-last mx-9">
      <!-- Content for right div -->
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
  </div>

  <div class="px-10 flex flex-col md:flex-row items-center mb-10">
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
  height: 100vh; /* Make this taller to see the effect */
}

.right-side-layers{
  height: 60vh;
}

.sticky-container {
  height: 240vh; /* Adjust this to control when the sticky content stops sticking */
}

.sticky-content {
  position: sticky;
  top: 0;
}
</style>