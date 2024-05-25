import { viteBundler } from '@vuepress/bundler-vite';
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  lang: "en-US",
  title: "Li-Lab Blog",
  description: "A Blog for Machine Learning, Natural Language Processing, and AI for Science",
  base: "/blog/",
  theme,
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
});
