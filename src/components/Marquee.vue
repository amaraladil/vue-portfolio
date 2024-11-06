<template>
    <div class="marquee-overview" >
        <div class="marquee-container">
            <img alt="Vue logo" src="../assets/logo.png" />
            <img alt="Vue logo" src="../assets/logo.png" />
            <img alt="Vue logo" src="../assets/logo.png" />
            <img alt="Vue logo" src="../assets/logo.png" />
            <img alt="Vue logo" src="../assets/logo.png" />
            <img alt="Vue logo" src="../assets/logo.png" />
            <img alt="Vue logo" src="../assets/logo.png" />
            <img alt="Vue logo" src="../assets/logo.png" />
            <img alt="Vue logo" src="../assets/logo.png" />
            <img alt="Vue logo" src="../assets/logo.png" />
            <img alt="Vue logo" src="../assets/logo.png" />
            <img alt="Vue logo" src="../assets/logo.png" />
            <img alt="Vue logo" src="../assets/logo.png" />
            <img alt="Vue logo" src="../assets/logo.png" />
            <img alt="Vue logo" src="../assets/logo.png" />
            <img alt="Vue logo" src="../assets/logo.png" />
            <img alt="Vue logo" src="../assets/logo.png" />
            <img alt="Vue logo" src="../assets/logo.png" />
            <img alt="Vue logo" src="../assets/logo.png" />
            <img alt="Vue logo" src="../assets/logo.png" />
            <img alt="Vue logo" src="../assets/logo.png" />
            <img alt="Vue logo" src="../assets/logo.png" />
            <img alt="Vue logo" src="../assets/logo.png" />
            <img alt="Vue logo" src="../assets/logo.png" />
            <img alt="Vue logo" src="../assets/logo.png" />
            <img alt="Vue logo" src="../assets/logo.png" />
            <img alt="Vue logo" src="../assets/logo.png" />
            <img alt="Vue logo" src="../assets/logo.png" />
            <img alt="Vue logo" src="../assets/logo.png" />
            <img alt="Vue logo" src="../assets/logo.png" />
            <img alt="Vue logo" src="../assets/logo.png" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'MarqueeInfinite',
};
</script>

<style>
    .marquee-overview {
        overflow: hidden; 
        /* height: 30em; */
        /* bottom: 300px; */
        position: relative;
    }

    .marquee-container {
        display: flex;
        white-space: nowrap;
        bottom: -50px;
        transform: translateX(-5vw) translateY(10px) rotate(-3deg); ;
        z-index: 1;
        width: 140vw;
        @apply bg-gray-500;
        padding: 0 10em 10em 10em;
        position: relative;
        
        & img {
            height: 10em;
            margin-right: 20px;
            width: 170px;
            animation: marquee 15s linear infinite;
        }
    }

        @keyframes marquee {
        0% {
            transform: translateX(-10vw);
        }
        100% {
            transform: translateX(-110vw);
        }
    }

</style>