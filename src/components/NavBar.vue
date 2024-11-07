<template>
    <nav>
        <ul class="">
            <li>
                <router-link :to="{ name:'home' }" @click.native="scrollToTop">
                    <font-awesome-icon :icon="['fas', 'home']" />
                    <div class="link-text">Home</div>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'home', hash: '#experience' }">
                    <font-awesome-icon :icon="['fas', 'briefcase']" />
                    <div class="link-text">Exp.</div>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'home', hash: '#project' }">
                    <font-awesome-icon :icon="['fas', 'folder-open']" />
                    <div class="link-text">Projects</div>
                </router-link>
            </li>
            <li>
                <a v-bind:href="linkedInUrl" class="">
                    <font-awesome-icon :icon="['fab', 'linkedin']"/>
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
            linkedInUrl: 'https://www.linkedin.com/in/amaraladil/',
        };
    },
    methods: {
        toggle() {
            this.isOpen = !this.isOpen;
        },
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
    },
};
</script>

<style scoped>
nav {
    @apply fixed z-10 w-full md:w-20 md:h-screen bg-gradient-to-t from-indigo-500 to-purple-500 md:transition-all md:duration-200 md:ease-in-out bottom-0 h-20;

    &:hover {
        @apply md:w-52;
    }
    
}

ul {
    @apply list-none flex flex-row md:flex-col p-0 m-0 items-center h-full;
}

li {
    @apply w-full;
}

li:last-child {
    @apply mt-auto;
}

nav a {
    text-decoration: none;
    @apply flex items-center md:justify-start justify-center font-bold text-2xl h-20 text-gray-200 hover:text-purple-300;
}

svg {
    min-width: 2rem;
    margin: 0 0.5rem 0 1.5rem;
}

.link-text {
    @apply hidden ml-1;
}

nav:hover .link-text {
    @apply md:block;
}

@media screen and (max-width: 768px) {
    nav {
        @apply bottom-0 ;
    }
}

</style>