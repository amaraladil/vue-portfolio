<template  >
    <div id="experience" class="container-slider border-b-8 border-black border-double">
        <div class="left-side mt-10 mb-5">
            <!-- Parent container for the sticky content -->
            <div class="sticky-container">
                <!-- Content that will stick -->
                <div class="sticky-content">
                  <img alt="Vue logo" src="../assets/logo.png" class="w-full" />
                </div>
            </div>
        </div>
        <div class="right-side px-6 items-center mb-5">
            <div class="right-side-layers">
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel numquam
                veritatis, quis dignissimos molestias mollitia debitis sapiente quae
                ullam ea quaerat laboriosam iste. Corrupti quasi est ratione
                cupiditate at repellendus!
                </p>
            </div>
            <div class="right-side-layers">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
                provident neque officiis amet, distinctio ad obcaecati. Cupiditate,
                repellendus architecto delectus impedit ea fuga eos sed molestias
                magnam laborum? Impedit, laboriosam?
                </p>
            </div>
            <div class="right-side-layers">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                aspernatur aperiam quos exercitationem nam soluta fugit quod eaque
                nobis, rem, in facilis omnis expedita minima a incidunt cupiditate
                inventore odio?
                </p>
            </div>
            <div class="right-side-layers">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                expedita cupiditate architecto perspiciatis ab officiis cum dolore
                velit quas, mollitia totam delectus iusto non minima libero! Sapiente
                nemo voluptatibus earum!
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Experience',
};
</script>

<style scoped>

.container-slider {
  /* border-top: 10px solid #000; */
  display: flex;
  position: relative;
  @apply bg-indigo-500 px-10 text-lg font-serif dark:bg-gray-700 dark:text-gray-200;
}

.left-side {
  /* width: 50%; */
  /* overflow-x: visible; */
  @apply w-2/5 sm:w-1/2;
}

.right-side {
  width: 50%;
  /* vertical-align: middle; */
  height: 100vh; /* Make this taller to see the effect */
}

.right-side-layers {
  height: 60vh;
  @apply flex flex-wrap items-center;
}

.sticky-container {
  height: 240vh; /* Adjust this to control when the sticky content stops sticking */
}

.sticky-content {
  position: sticky;
  top: 5vh;
  margin-top: 10vh; /* Adjust this to control the space at the top */
  @apply bg-gray-400 dark:bg-gray-600;
}

</style>