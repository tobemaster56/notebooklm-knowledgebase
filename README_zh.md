# NotebookLM 知识库

一个关于谷歌 NotebookLM 的百科知识库，包含 NotebookLM 的教程用法、使用案例和历史发展脉络。

[English](./README.md)

## 关于本项目

这是一个社区驱动的 Google NotebookLM 知识库，包含：

- **完整教程** - NotebookLM 使用的分步指南
- **真实案例** - 来自各个领域的使用示例
- **历史时间线** - 发展历史和功能演进
- **多语言支持** - 提供英文、简体中文和繁体中文
- **现代文档** - 使用 VitePress 2.0 和 Vue 3.5 构建

## 快速开始

### 开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产构建
pnpm preview
```

### 贡献

我们欢迎各种形式的贡献：
- 添加新教程
- 分享使用案例
- 更新文档
- 修正错误
- 翻译内容

欢迎提交 Pull Request！

## 项目结构

```
├── docs/
│   ├── .vitepress/           # VitePress 配置
│   ├── v1/                   # 主要文档
│   │   ├── en/              # 英文
│   │   ├── zh/              # 简体中文
│   │   └── zh-TW/           # 繁体中文
│   ├── examples/            # 使用案例和示例
│   ├── resources/           # 额外资源
│   ├── public/             # 静态资源
│   └── index.md            # 首页
└── README.md
```

## 命令

| 命令 | 描述 |
|------|------|
| `pnpm dev` | 启动开发服务器 |
| `pnpm build` | 构建生产版本 |
| `pnpm preview` | 预览生产构建 |
| `pnpm lint:md` | 检查 Markdown 文件 |
| `pnpm lint:md:fix` | 修复 Markdown 检查问题 |

## 什么是 NotebookLM？

NotebookLM 是谷歌推出的 AI 驱动的笔记和研究助手，可以帮助您：
- 理解复杂的文档和来源
- 生成摘要和见解
- 对内容进行提问
- 创建学习指南和音频概述
- 与他人协作研究

本知识库包含掌握 NotebookLM 所需的一切内容。

## 技术栈

- [VitePress](https://vitepress.dev/) 2.0
- [Vue.js](https://vuejs.org/) 3.5
- [Node.js](https://nodejs.org/) 22.x
- [pnpm](https://pnpm.io/)

## 许可证

MIT 许可证

## 相关链接

- [Google NotebookLM](https://notebooklm.google.com/)
- [官方帮助中心](https://support.google.com/notebooklm/)
- [社区论坛](https://github.com/tobemaster56/notebooklm-knowledgebase/discussions)
