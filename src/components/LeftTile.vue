<template>
    <div class="px-10 flex flex-col md:flex-row items-center  bg-gray-400 ">
      <div class="md:w-1/3 p-4">
        <!-- Content for left div -->
        <img alt="Vue logo" src="../assets/logo.png" />
      </div>
      <div class="md:w-2/3 text-left">
        <h3 class="text-2xl">Project Title</h3>    
         <p class="pb-3">
            #1.2 Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
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
                        class="bg-blue-500 hover:bg-blue-700 text-white hover:text-green-300 font-bold py-2 px-4 rounded mx-1">
            Source Code
        </router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: "LeftTile",
};
</script>

<style>

</style>