import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { HiSolidHome, HiSolidSun, HiSolidMoon } from "oh-vue-icons/icons/hi";
import {
  FaFolderOpen,
  FaBriefcase,
  FaLinkedin,
  FaGithub,
} from "oh-vue-icons/icons/fa";

import {
  CoIbm,
  CoVueJs,
  CoReact,
  CoPython,
  CoJava,
  CoMongodb,
  CoCss3Shiled,
  CoHtml5,
  CoMysql,
  CoRuby,
  CoCplusplus,
  CoTensorflow,
} from "oh-vue-icons/icons/co";
import {
  SiFastapi,
  SiCsharp,
  SiNodedotjs,
  SiPostgresql,
  SiPhp,
  SiGooglecloud,
  SiSupabase,
  SiDotnet,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiGithub,
} from "oh-vue-icons/icons/si";

import router from "./router";
import store from "./store";

addIcons(
  HiSolidHome,
  HiSolidSun,
  HiSolidMoon,
  FaFolderOpen,
  FaBriefcase,
  FaLinkedin,
  FaGithub,
  CoIbm,
  CoVueJs,
  CoReact,
  CoPython,
  CoJava,
  CoMongodb,
  CoCss3Shiled,
  CoHtml5,
  CoMysql,
  CoRuby,
  CoCplusplus,
  CoTensorflow,
  SiFastapi,
  SiCsharp,
  SiNodedotjs,
  SiPostgresql,
  SiPhp,
  SiGooglecloud,
  SiSupabase,
  SiDotnet,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiGithub
);

createApp(App)
  .use(store)
  .use(router)
  .component("v-icon", OhVueIcon)
  .mount("#app");
