<template>
  <div
    id="experience"
    class="bg-indigo-300 text-center font-bold font- text-4xl font-serif text-gray-900 dark:text-gray-200 pt-24 dark:bg-gray-700"
  >
    Experience
  </div>
  <div class="container-slider">
    <div class="left-side mb-5">
      <!-- Parent container for the sticky content -->
      <div class="sticky-container">
        <!-- Content that will stick -->
        <div class="sticky-content">
          <img
            :alt="'Company logo'"
            :src="currentImage"
            class="w-full transition-all duration-1000 ease-in-out"
          />
        </div>
      </div>
    </div>
    <div class="right-side">
      <div class="right-side-layers">
        <h3>IT Helpdesk Support</h3>
        <h4>Centennial College <span>Mar - Jun 2024</span></h4>
        <ul>
          <li>
            Delivered first-level technical support to 500+ students and faculty
            through ServiceNow ticketing system, maintaining 95% customer
            satisfaction rating
          </li>
          <li>
            Resolved complex hardware/software issues and communicated technical
            solutions in user-friendly language, reducing repeat tickets by 40%
          </li>
          <li>
            Collaborated with IT team to streamline support processes and update
            knowledge base documentation
          </li>
        </ul>
      </div>
      <div class="right-side-layers">
        <h3>Helpdesk Analyst</h3>
        <h4>ESRI Canada <span>Apr - Jun 2018</span></h4>
        <ul>
          <li>
            Spearheaded documentation initiative with management team, creating
            comprehensive guides for new technologies and reducing support calls
            by 35%
          </li>
          <li>
            Optimized office infrastructure and inventory management systems,
            improving team efficiency and workspace organization
          </li>
        </ul>
      </div>
      <div class="right-side-layers">
        <h3>Programmer Tutor</h3>
        <h4>Freelance <span>Dec 2017 - Feb 2018</span></h4>
        <ul>
          <li>
            Mentored Computer Programmer Analyst students at Durham College,
            specializing in C#, Java, and SQL fundamentals
          </li>
          <li>
            Developed personalized learning plans and coding exercises, helping
            students achieve average grade improvements of 15-20%
          </li>
          <li>
            Created supplementary materials and debugging strategies that
            enhanced student comprehension of complex programming concepts
          </li>
        </ul>
      </div>
      <div class="right-side-layers">
        <h3>Education</h3>
        <h4 class="edu">
          Bachelor's in Computer Science
          <span class="edu">OnTech University</span
          ><span>Sept 2018 - May 2020</span>
        </h4>
        <h4 class="edu">
          Adv Diploma of Computer Programmer Analyst
          <span class="edu">Durham College</span>
          <span>Sept 2015 - May 2018</span>
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

import defaultLogo from "../assets/logo.png";
import centennialLogo from "../assets/centennial-logo.png";
import esriLogo from "../assets/esri-logo.png";
import freelanceIcon from "../assets/freelance-icon.png";
import educationIcon from "../assets/education-icon.png";

export default {
  name: "Experience",
  setup() {
    const currentImage = ref(centennialLogo); // Use imported image
    const currentSection = ref(0);

    const images = [centennialLogo, esriLogo, freelanceIcon, educationIcon];

    const handleScroll = () => {
      const sections = document.querySelectorAll(".right-side-layers");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionBottom = sectionTop + rect.height;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          if (currentSection.value !== index) {
            currentSection.value = index;
            currentImage.value = images[index] || defaultLogo;
          }
        }
      });
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      currentImage,
    };
  },
};
</script>

<style scoped>
.container-slider {
  /* border-top: 10px solid #000; */
  display: flex;
  position: relative;
  @apply bg-indigo-300 px-5 text-lg dark:bg-gray-700 dark:text-gray-200;
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
  @apply pl-4 mt-10 items-center mb-5;
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
      @apply text-sm;
    }
  }

  & ul {
    @apply list-disc list-outside pl-5;

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
  margin-top: 4vh; /* Adjust this to control the space at the top */
  @apply bg-radial;
}

@layer utilities {
  .bg-radial {
    background: radial-gradient(circle, #c4b5fd 0%, transparent 70%);
  }
  .dark .bg-radial {
    background: radial-gradient(circle, #4b5563 0%, transparent 70%);
  }
}
</style>
