<template>
    <div class="marquee-overview" >
        <div class="marquee-container">
            <div class="marquee-content">
                <img alt="Vue logo" src="../assets/20170729_215128.jpg" />
                <img alt="Vue logo" src="../assets/blackjack.png" />
                <img alt="Vue logo" src="../assets/logo.png" />
                <img alt="Vue logo" src="../assets/20170729_215128.jpg" />
                <img alt="Vue logo" src="../assets/Durak.png" />
                <img alt="Vue logo" src="../assets/20170729_215013.jpg" />
                <img alt="Vue logo" src="../assets/20170702_195708.jpg" />
                <!-- <font-awesome-icon :icon="['fab', 'github']" /> -->
                <img alt="Vue logo" src="../assets/20170729_215128.jpg" />
                <img alt="Vue logo" src="../assets/blackjack.png" />
                <img alt="Vue logo" src="../assets/realtor-new.png" />
                <img alt="Vue logo" src="../assets/20170729_215128.jpg" />
                <img alt="Vue logo" src="../assets/Durak.png" />
                <img alt="Vue logo" src="../assets/20170729_215013.jpg" />
                <img alt="Vue logo" src="../assets/20170702_195708.jpg" />
                <img alt="Vue logo" src="../assets/logo.png" />
            </div>
            <div class="marquee-content">
                <img alt="Vue logo" src="../assets/20170729_215128.jpg" />
                <img alt="Vue logo" src="../assets/blackjack.png" />
                <img alt="Vue logo" src="../assets/logo.png" />
                <img alt="Vue logo" src="../assets/20170729_215128.jpg" />
                <img alt="Vue logo" src="../assets/Durak.png" />
                <img alt="Vue logo" src="../assets/20170729_215013.jpg" />
                <img alt="Vue logo" src="../assets/20170702_195708.jpg" />
                <img alt="Vue logo" src="../assets/20170729_215128.jpg" />
                <img alt="Vue logo" src="../assets/blackjack.png" />
                <img alt="Vue logo" src="../assets/realtor-new.png" />
                <img alt="Vue logo" src="../assets/20170729_215128.jpg" />
                <img alt="Vue logo" src="../assets/Durak.png" />
                <img alt="Vue logo" src="../assets/20170729_215013.jpg" />
                <img alt="Vue logo" src="../assets/20170702_195708.jpg" />
                <img alt="Vue logo" src="../assets/logo.png" />
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
        position: relative;
        white-space: nowrap;
    }

    .marquee-container {
        /* display: flex; */
        white-space: nowrap;
        bottom: -50px;
        transform: translateX(-5vw) translateY(10px) rotate(-3deg); ;
        z-index: 1;
        width: 140vw;
        @apply bg-gray-500;
        padding: 0.5em 0 10em 1em;
        position: relative;
        
    }

    .marquee-content {
        display: inline-flex;
        animation: marquee 15s linear infinite;


        img {
            height: 10em;
            margin-right: 20px;
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