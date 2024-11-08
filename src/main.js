import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { HiSolidHome } from "oh-vue-icons/icons/hi";
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
} from "oh-vue-icons/icons/si";

import router from "./router";
import store from "./store";

addIcons(
  HiSolidHome,
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
  SiExpress
);

library.add(fas, fab, far);
createApp(App)
  .use(store)
  .use(router)
  .component("v-icon", OhVueIcon)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
