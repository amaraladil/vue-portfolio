<template>
    <div class="px-10 flex flex-col md:flex-row items-center  bg-gray-400">
      <div class="md:w-1/2 p-4 text-left">
        <h3 class="text-2xl">Project Title</h3>
        <p class="pb-3">
            #1.1 Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
        </p>
        <router-link :to="{ name: 'project', params: { projectId: '1' } }"
                        class="border border-blue-500 bg-gray-700 hover:bg-blue-700 text-white hover:text-green-300 font-bold py-2 px-4 rounded mx-1">
            Demo
        </router-link>
        <router-link :to="{ name: 'project', params: { projectId: '1' } }"
                        class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg px-4 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-bold">
          Source Code
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </router-link>

      </div>
      <div class="md:w-1/2 p-4 order-first md:order-last mx-9">
        <!-- Content for right div -->
        <img alt="Vue logo" src="@/assets/logo.png" />
      </div>
    </div>
</template>

<script>
export default {
  name: "ClayMan",
};
</script>

<style>

</style>