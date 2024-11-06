<template>
    <section id="project" class="pb-10 ">

        <div v-for="project in Projects" :key="project.id">
            <component :is="project.component" :title="project.name" :content="project.description" :demoLink="project.demoLink" :project="project" />
        </div>
    
        <!--<ProjectsRightPicture title="#1 hello world" content="Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum." 
                demoLink="hi"/>
        <ProjectsLeftPicture title="#2 whats up world" content="Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
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
                mollit anim id est laborum."/> -->

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
        };
    },
    async created() {
        const cachedProjects = loadWithExpiry('projects');

        if (cachedProjects) {
            this.Projects = cachedProjects;
            return;
        }

        const response = await fetch('/.netlify/functions/get-all-projects');
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
            };
        });
        saveWithExpiry('projects', this.Projects); 
        console.log(this.Projects);
    },
};
</script>