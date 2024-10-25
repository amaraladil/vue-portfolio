<template>
    <nav>
        <ul class="">
            <li>
                <router-link to="/" class="">
                    <font-awesome-icon :icon="['fas', 'home']" />
                    <div class="link-text">Home</div>
                </router-link>
            </li>
            <li>
                <router-link to="#project" class="">
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
    },
};
</script>

<style scoped>
nav {
    @apply fixed z-10 w-20 h-screen bg-indigo-500;
    transition: width 200ms ease;
}

ul {
    @apply list-none flex flex-col p-0 m-0 items-center h-full;
}

li {
    @apply w-full;
}

li:last-child {
    @apply mt-auto;
}

nav a {
    text-decoration: none;
    @apply flex items-center font-bold text-2xl h-20 text-gray-200 hover:text-purple-300;
}

svg {
    min-width: 2 rem;
    margin: 0 1.5rem;
}

.link-text {
    @apply hidden ml-1;
}

nav:hover {
    @apply w-64;
}

nav:hover .link-text {
    @apply block;
}


</style>