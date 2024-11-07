<template>
    <div class="px-10 flex flex-col md:flex-row items-center bg-gradient-to-tr from-electric-violet-100 to-electric-violet-300">
      <div class="md:w-1/2 p-4 text-left font-serif">
        <h3 class="text-3xl">{{ project.name }}</h3>
        <p class="pb-3 text-lg ">
            {{ project.description }}
        </p>
        
        <div class="flex md:justify-end">
          <a v-if="demoLink" :href="demoLink" target="_blank" rel="noopener noreferrer"
                        class="border border-blue-500 bg-gray-700 hover:bg-blue-700 text-white hover:text-green-300 font-bold py-2 px-4 rounded mx-1">
              Demo
          </a>
          <router-link title="Git Hub" :to="{ name: 'project', params: { projectId: '1' } }"
                          class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg px-4 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-bold">
                <font-awesome-icon :icon="['fab', 'github']"/>
                <br/>
                Source Code
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </router-link>
        </div>
      </div>


      <div class=" md:w-1/2 p-4 order-first md:order-last ">
        <div class="rounded-lg border-8">
          <img alt="Vue logo" :src="getImageUrl(project.image)" class="w-full"/>
          <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "ProjectsRightPicture",
  props: {
    project: Object,
    title: String,
    content: String,
    demoLink: String,
    sourceLink: String,
    image: String,
  },
  methods: {
    getImageUrl(image) {
      return require(`@/assets/${image}`);
    },
  },
  created() {
    console.log(this.project);
  },
};
</script>

<style>

</style>