import { defineConfig } from "vitepress";
import { registerContainers } from "./markdown/containers";

// v1 English documentation sidebar
const v1EnSidebar = [
  {
    text: "Getting Started",
    items: [
      { text: "Introduction", link: "/v1/en/" },
      { text: "Quick Start", link: "/v1/en/getting-started" },
      { text: "Key Features", link: "/v1/en/features" },
    ],
  },
  {
    text: "Tutorials",
    items: [
      { text: "Basic Operations", link: "/v1/en/tutorials/basics" },
      { text: "Advanced Features", link: "/v1/en/tutorials/advanced" },
      { text: "Best Practices", link: "/v1/en/tutorials/best-practices" },
    ],
  },
  {
    text: "History",
    items: [
      { text: "Development Timeline", link: "/v1/en/history" },
    ],
  },
];

// v1 Simplified Chinese documentation sidebar
const v1ZhSidebar = [
  {
    text: "开始使用",
    items: [
      { text: "简介", link: "/v1/zh/" },
      { text: "快速开始", link: "/v1/zh/getting-started" },
      { text: "核心功能", link: "/v1/zh/features" },
    ],
  },
  {
    text: "教程指南",
    items: [
      { text: "基础操作", link: "/v1/zh/tutorials/basics" },
      { text: "高级功能", link: "/v1/zh/tutorials/advanced" },
      { text: "最佳实践", link: "/v1/zh/tutorials/best-practices" },
    ],
  },
  {
    text: "历史发展",
    items: [
      { text: "发展时间线", link: "/v1/zh/history" },
    ],
  },
];

// v1 Traditional Chinese documentation sidebar
const v1ZhTWSidebar = [
  {
    text: "開始使用",
    items: [
      { text: "簡介", link: "/v1/zh-TW/" },
      { text: "快速開始", link: "/v1/zh-TW/getting-started" },
      { text: "核心功能", link: "/v1/zh-TW/features" },
    ],
  },
  {
    text: "教程指南",
    items: [
      { text: "基礎操作", link: "/v1/zh-TW/tutorials/basics" },
      { text: "高級功能", link: "/v1/zh-TW/tutorials/advanced" },
      { text: "最佳實踐", link: "/v1/zh-TW/tutorials/best-practices" },
    ],
  },
  {
    text: "歷史發展",
    items: [
      { text: "發展時間線", link: "/v1/zh-TW/history" },
    ],
  },
];

// v2 English documentation sidebar (placeholder)
const v2EnSidebar = [
  {
    text: "Documentation (v2)",
    items: [{ text: "Overview", link: "/v2/en/" }],
  },
];

// v2 Simplified Chinese documentation sidebar (placeholder)
const v2ZhSidebar = [
  {
    text: "文档 (v2)",
    items: [{ text: "概述", link: "/v2/zh/" }],
  },
];

// v2 Traditional Chinese documentation sidebar (placeholder)
const v2ZhTWSidebar = [
  {
    text: "文件 (v2)",
    items: [{ text: "概述", link: "/v2/zh-TW/" }],
  },
];

// Examples sidebar
const examplesEnSidebar = [
  {
    text: "Use Cases",
    items: [
      { text: "Overview", link: "/examples/en/" },
      { text: "Academic Research", link: "/examples/en/academic" },
      { text: "Business Applications", link: "/examples/en/business" },
      { text: "Personal Learning", link: "/examples/en/personal" },
      { text: "Content Creation", link: "/examples/en/content-creation" },
    ],
  },
];

const examplesZhSidebar = [
  {
    text: "使用案例",
    items: [
      { text: "概述", link: "/examples/zh/" },
      { text: "学术研究", link: "/examples/zh/academic" },
      { text: "商业应用", link: "/examples/zh/business" },
      { text: "个人学习", link: "/examples/zh/personal" },
      { text: "内容创作", link: "/examples/zh/content-creation" },
    ],
  },
];

const examplesZhTWSidebar = [
  {
    text: "使用案例",
    items: [
      { text: "概述", link: "/examples/zh-TW/" },
      { text: "學術研究", link: "/examples/zh-TW/academic" },
      { text: "商業應用", link: "/examples/zh-TW/business" },
      { text: "個人學習", link: "/examples/zh-TW/personal" },
      { text: "內容創作", link: "/examples/zh-TW/content-creation" },
    ],
  },
];

// Resources sidebar
const resourcesEnSidebar = [
  {
    text: "Resources",
    items: [
      { text: "Overview", link: "/resources/en/" },
      { text: "Official Links", link: "/resources/en/official" },
      { text: "Community", link: "/resources/en/community" },
      { text: "Tips & Tricks", link: "/resources/en/tips" },
    ],
  },
];

const resourcesZhSidebar = [
  {
    text: "资源",
    items: [
      { text: "概述", link: "/resources/zh/" },
      { text: "官方链接", link: "/resources/zh/official" },
      { text: "社区资源", link: "/resources/zh/community" },
      { text: "技巧提示", link: "/resources/zh/tips" },
    ],
  },
];

const resourcesZhTWSidebar = [
  {
    text: "資源",
    items: [
      { text: "概述", link: "/resources/zh-TW/" },
      { text: "官方連結", link: "/resources/zh-TW/official" },
      { text: "社區資源", link: "/resources/zh-TW/community" },
      { text: "技巧提示", link: "/resources/zh-TW/tips" },
    ],
  },
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/notebooklm-knowledgebase/",
  title: "NotebookLM 知识库",
  head: [["link", { rel: "icon", href: "/notebooklm-knowledgebase/favicon.ico" }]],
  description: "一个关于谷歌 NotebookLM 的百科知识库，包含教程用法、使用案例和历史发展脉络",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "文档", link: "/v1/zh/" },
      { text: "使用案例", link: "/examples/zh/" },
      { text: "资源", link: "/resources/zh/" },
    ],

    sidebar: {
      // v1 documentation
      "/v1/en/": v1EnSidebar,
      "/v1/zh/": v1ZhSidebar,
      "/v1/zh-TW/": v1ZhTWSidebar,
      // v2 documentation
      "/v2/en/": v2EnSidebar,
      "/v2/zh/": v2ZhSidebar,
      "/v2/zh-TW/": v2ZhTWSidebar,
      // Examples
      "/examples/en/": examplesEnSidebar,
      "/examples/zh/": examplesZhSidebar,
      "/examples/zh-TW/": examplesZhTWSidebar,
      // Resources
      "/resources/en/": resourcesEnSidebar,
      "/resources/zh/": resourcesZhSidebar,
      "/resources/zh-TW/": resourcesZhTWSidebar,
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/tobemaster56/notebooklm-knowledgebase",
      },
    ],
  },
  markdown: {
    image: {
      lazyLoading: true,
    },
    config(md) {
      registerContainers(md);
    },
  },
});
