<template>
    <div class="px-10 flex flex-col md:flex-row items-center bg-gray-500">
      <div class="md:w-1/2 p-4 text-left">
        <h3 class="text-2xl">{{ title }}</h3>
        <p class="pb-3">
            {{ content }}
        </p>
        
        <div class="flex justify-end">
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
      </div>


      <div class=" md:w-1/3 p-4 order-first md:order-last mx-9">
        <img alt="Vue logo" src="@/assets/logo.png" />
      </div>
    </div>
</template>

<script>
export default {
  name: "ClayMan",
  props: {
    title: String,
    content: String,
    demoLink: String,
    sourceLink: String,
    image: String,
  },
};
</script>

<style>

</style>