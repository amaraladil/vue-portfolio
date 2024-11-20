<template>
    <nav>
        <ul class="">
            <li>
                <router-link :to="{ name:'home' }" @click.native="scrollToTop">
                    <v-icon name="hi-solid-home" />
                    <div class="link-text">Home</div>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'home', hash: '#experience' }">
                    <v-icon name="fa-briefcase" scale="2" />
                    <div class="link-text">Exp.</div>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'home', hash: '#project' }">
                    <v-icon name="fa-folder-open" />
                    <div class="link-text">Projects</div>
                </router-link>
            </li>
            <li class="spacer">
                <button @click="toggleTheme" class="">
                    <div v-if="!isDark" class="toggle">
                        <v-icon  name="hi-solid-sun" scale="1" />
                        <div class="link-text">Light</div>
                    </div>
                    <div v-else="isDark" class="toggle">
                        <v-icon  name="hi-solid-moon" scale="1" />
                        <div class="link-text">Dark</div>
                    </div>
                    
                    
                </button>
            </li>
            <li>
                <a v-bind:href="linkedInUrl" class="">
                    <v-icon  name="fa-linkedin" scale="1" />
                    <div class="link-text">LinkedIn</div>
                </a>
            </li>
        </ul>
  </nav>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            isOpen: false,
            isDark: false,
            linkedInUrl: 'https://www.linkedin.com/in/amaraladil/',
        };
    },
    created() {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            console.log("Dark mode");
            this.isDark = true;
            document.documentElement.classList.add('dark');
        } else {
            console.log("Light mode");
            this.isDark = false;
            document.documentElement.classList.remove('dark');
        }
    },
    methods: {
        toggle() {
            this.isOpen = !this.isOpen;
        },
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        toggleTheme() {
            console.log("Toggle theme"+ this.isDark);
            this.isDark = !this.isDark;
            document.documentElement.classList.toggle('dark', this.isDark);
            localStorage.theme = this.isDark ? 'dark' : 'light';
            console.log("is Dark: "+ this.isDark);
        },
    },
};
</script>

<style scoped>
nav {
    @apply fixed z-10 w-full md:w-20 md:h-screen bg-gradient-to-t  dark:from-gray-600 dark:via-gray-600 dark:to-gray-700 dark:text-red-200 from-indigo-500 via-indigo-500 to-purple-600 md:bg-gradient-to-r md:transition-all md:duration-200 md:ease-in-out bottom-0 h-20;

    &:hover {
        @apply md:w-44;
    }
    
}

ul {
    @apply list-none flex flex-row md:flex-col p-0 m-0 items-center h-full;
}

li {
    @apply w-full;
}

li.spacer {
    @apply mt-auto;
}

nav a, nav button, nav .toggle {
    text-decoration: none;
    @apply flex items-center md:justify-start justify-center font-bold text-lg h-20 text-gray-200 hover:text-purple-300 dark:text-gray-200 dark:hover:text-red-200;
}

nav button, nav .toggle {
    @apply w-full;
}

svg {
    min-width: 2rem;
    margin: 0 0.5rem 0 1.5rem;
    @apply h-6 w-8;
}

.link-text {
    @apply hidden ml-1;
}

nav:hover .link-text {
    @apply md:block;
}

@media screen and (max-width: 768px) {
    nav {
        @apply bottom-0;
    }
}

</style>