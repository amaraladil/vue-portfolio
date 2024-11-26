<template>
    <div class="px-10 flex flex-col md:flex-row items-center bg-gradient-to-tr from-electric-violet-100 to-electric-violet-300 dark:from-gray-700 dark:to-gray-800 dark:text-gray-300">
      <div class="flex flex-col md:w-1/2 p-4 text-left font-source border-b-8 border-indigo-400 border-dotted md:border-0">
        <div class="techstack order-first md:order-2">
          <v-icon v-if="project.icons" v-for="shap in project.icons" :name="shap" class="text-indigo-900 dark:text-indigo-400" />
        </div>

        <h3 class="text-3xl order-1">{{ project.name }}</h3>
        <p class="pb-3 text-lg order-2">
            {{ project.description }}
        </p>
        
        <div class="flex md:justify-end order-3">
          <a v-if="project.demoLink" :href="demoLink" target="_blank" rel="noopener noreferrer"
                        class="border border-indigo-500 bg-gray-700 hover:bg-gray-600 text-gray-200 hover:text-electric-violet-300 font-bold py-2 px-4 rounded mx-1">
              Demo
          </a>
          <router-link title="Git Hub" :to="{ name: 'project', params: { projectId: '1' } }"
                          class="text-gray-200 bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg px-4 py-2 text-center inline-flex items-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-blue-800 font-bold">
                <v-icon name="si-github" />
                Source
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </router-link>
        </div>
      </div>


      <div class="md:w-1/2 p-4 order-first md:order-last ">
        <div class="rounded-lg border-4 border-indigo-600">
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
  },
  methods: {
    getImageUrl(image) {
      return require(`@/assets/${image}`);
    },
  },
  created() {
    // console.log(this.project);
  },
};
</script>

<style>
</style>