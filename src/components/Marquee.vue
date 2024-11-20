<template>
    <div class="marquee-overview" >
        <div class="marquee-container">
            <div class="marquee-content">
                <v-icon name="co-vue-js" />
                <v-icon name="si-nodedotjs" />
                <v-icon name="co-html5" />
                <v-icon name="co-css3-shiled" />
                <v-icon name="co-ibm" />
                <v-icon name="si-postgresql" />
                <v-icon name="si-csharp" />
                <v-icon name="co-cplusplus" />
                <v-icon name="co-python" />
                <v-icon name="co-tensorflow" />
                <v-icon name="co-java" />
                <v-icon name="co-mongodb" />
                <v-icon name="si-fastapi" />
                <v-icon name="si-php" />
                <v-icon name="co-react" />
                <v-icon name="si-googlecloud" />
                <v-icon name="co-mysql" />
                <v-icon name="co-ruby" />
                <v-icon name="si-supabase" />
                <v-icon name="si-dotnet" />
                <v-icon name="si-tailwindcss" />
                <v-icon name="si-bootstrap" />
                <v-icon name="si-express" />
            </div>
            <div class="marquee-content">
                <v-icon name="co-vue-js" />
                <v-icon name="si-nodedotjs" />
                <v-icon name="co-html5" />
                <v-icon name="co-css3-shiled" />
                <v-icon name="co-ibm" />
                <v-icon name="si-postgresql" />
                <v-icon name="si-csharp" />
                <v-icon name="co-cplusplus" />
                <v-icon name="co-python" />
                <v-icon name="co-tensorflow" />
                <v-icon name="co-java" />
                <v-icon name="co-mongodb" />
                <v-icon name="si-fastapi" />
                <v-icon name="si-php" />
                <v-icon name="co-react" />
                <v-icon name="si-googlecloud" />
                <v-icon name="co-mysql" />
                <v-icon name="co-ruby" />
                <v-icon name="si-supabase" />
                <v-icon name="si-dotnet" />
                <v-icon name="si-tailwindcss" />
                <v-icon name="si-bootstrap" />
                <v-icon name="si-express" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MarqueeInfinite',
};
</script>

<style scoped>
    .marquee-overview {
        overflow: hidden; 
        /* height: 30em; */
        /* bottom: 300px; */
        /* position: relative;
        white-space: nowrap; */
    }

    .marquee-container {
        /* display: flex; */
        overflow: hidden;
        white-space: nowrap;
        bottom: -50px;
        transform: translateX(-5vw) translateY(10px) rotate(-3deg); ;
        z-index: 1;
        /* width: 140vw; */
        width: 4000px;
        @apply bg-gradient-to-t from-indigo-500 to-purple-500 dark:from-gray-700 dark:to-gray-700;
        padding: 0.5em 0 10em 1em;
        position: relative;
        
    }

    .marquee-content {
        display: inline-flex !important;
        /* background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c); */
        animation: marquee 35s linear infinite;

        @apply text-indigo-900 dark:text-indigo-200;
        svg {
            height: 10em;
            margin-right: 10px;
            width: 170px;
        }
    }


        @keyframes marquee {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-100%);
        }
    }

</style>