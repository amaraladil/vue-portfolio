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
        <div class="right-side ">
            <div class="right-side-layers">
                <h3>Helpdesk Support</h3>
                <h4>Centennial College <span>Mar - Jun 2024</span></h4>
                <ul>
                    <li>Provided first-level technical support to students and staff in person and on ServiceNow ticketing system</li>
                    <li>Delivered exceptional customer service by communicating complex technical issues in an understandable manner</li>
                </ul>
            </div>
            <div class="right-side-layers">
                <h3>Helpdesk Analyst</h3>
                <h4>ESRI Canada <span>Apr - Jun 2018</span></h4>
                <ul>
                    <li>Revitalized new documentations with the manager to increase employee knowledge and reduce the number of calls related to the new technologies by 35%.</li>
                    <li>Facilitated with coworkers office space and independently organized inventory to create a more efficient and comfortable work environment.</li>
                </ul>
            </div>
            <div class="right-side-layers">
                <h3>Programmer Tutor</h3>
                <h4>Freelance <span>Dec 2017 - Feb 2018</span></h4>
                <ul>
                    <li>Provided tutoring services to students in the Computer Programmer Analyst program at Durham College</li>
                    <li>Assisted students with assignments and projects in C#, Java, and SQL</li>
                </ul>
            </div>
            <div class="right-side-layers">
                <h3>Education</h3>
                <h4 class="edu">Bachelor's in Computer Science <span class="edu">OnTech University</span><span>Sept 2018 - May 2020</span></h4>
                <h4 class="edu">Adv Diploma of Computer Programmer Analyst <span class="edu">Durham College</span> <span>Sept 2015 - May 2018</span></h4>
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
  @apply bg-indigo-500 px-5 text-lg font-serif dark:bg-gray-700 dark:text-gray-200;
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
  @apply pl-4 mt-28 items-center mb-5;
}

.right-side-layers {
  height: 60vh;

  @apply font-source;


  & h3 {
    @apply text-2xl font-bold;
  }
  & h4 {
    @apply flex flex-col text-lg italic;

    & span {
      @apply  text-sm;
    }
  }

  & ul {
    @apply list-disc list-outside pl-4;

    & li {
      @apply mb-2;
    }
  }
}

h4.edu {
  @apply text-2xl py-2 !important;

  span.edu {
    @apply text-xl !important;
  }
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