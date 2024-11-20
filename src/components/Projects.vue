<template>
    <section id="project" class="pb-10 ">
        <div v-if="errorMessage" class="text-center text-red-500">
            {{ errorMessage }}
        </div>

        <div v-else>
            <component v-for="project in Projects" :key="project.id" :is="project.component" :title="project.name" :content="project.description" :demoLink="project.demoLink" :project="project" />
        </div>

  </section>
</template>

<script>
import ProjectsRightPicture from './ProjectsRightPicture.vue';
import ProjectsLeftPicture from './ProjectsLeftPicture.vue';
import { saveWithExpiry, loadWithExpiry } from '@/utils/storage';

export default {
    name: 'Projects',
    components: {
        ProjectsRightPicture,
        ProjectsLeftPicture,
    },
    data() {
        return {
            Projects: [],
            errorMessage: '',
        };
    },
    async created() {
        const cachedProjects = loadWithExpiry('projects');

        if (cachedProjects) {
            this.Projects = cachedProjects;
            return;
        }

        try { // Fetch projects from the server
            const response = await fetch('/.netlify/functions/get-all-projects');
            if (!response.ok) {
                throw new Error('Failed to fetch projects');
            }
            const data = await response.json();

            let count = 0;
            this.Projects = data.map((project) => {
                count++;
                return {
                    id: project.id,
                    name: project.name,
                    description: project.description,
                    demoLink: project.web,
                    component: count % 2 == 0 ? 'ProjectsRightPicture' : 'ProjectsLeftPicture',
                    icons: project.code,
                    image: project.image,
                };
            });
            saveWithExpiry('projects', this.Projects); 
        } catch (error) {
            this.errorMessage = 'Failed to fetch projects';
        }
    },
};
</script>

