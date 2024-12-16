import { defineConfig } from 'vitepress'
import { nav } from './configs'
import { generateSidebar } from 'vitepress-sidebar';

export default defineConfig({
  cleanUrls: true,
  lang: 'zh-CN',
  title: "LI SIR - 个人博客",
  titleTemplate: 'Remember me.',
  description: "A VitePress Site",
  lastUpdated: true,

  // Markdown 配置
  markdown: {
    // 行号显示
    lineNumbers: true,
    image: {
      // 开启图片懒加载
      lazyLoading: true,
    },
  },

  // Fav 图标
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
  ],

  // 站点地图
  sitemap: {
    hostname: 'https://lisir.me',
  },

  // 默认主题配置
  themeConfig: {
    // 左上角 logo
    logo: '/logo.png',

    // 移动端侧边栏文字更改
    sidebarMenuLabel: '目录',

    // 移动端深浅模式文字修改
    darkModeSwitchLabel: '深浅模式',

    // 移动端返回顶部文字修改
    returnToTopLabel: '返回顶部',

    // 本地搜索
    search: {
      provider: 'local'
    },

    // 页脚
    // footer: {
    //   message: 'Released under the MIT License.',
    //   copyright: `Copyright © 2021-${new Date().getFullYear()} present Evan You`, 
    // },

    // 大纲
    outline: {
      level: [2, 4],
      label: '页面导航'
    },

    // 编辑本页
    editLink: {
      pattern: 'https://github.com/wkwbk/wkwbk.github.io/edit/main/docs/:path',
      text: '在 GitHub 编辑本页'
    },

    // 上次更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      },
    },

    // 自定义上下页名
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    // 导航栏
    nav,

    // 侧边栏
    sidebar: generateSidebar([
      {
        documentRootPath: '/docs',
        scanStartPath: '学习笔记',
        basePath: '/学习笔记/',
        resolvePath: '/学习笔记/',
        useTitleFromFileHeading: true,
        collapsed: false, //折叠组关闭
        collapseDepth: 2, //折叠组2级菜单
      },
      {
        documentRootPath: '/docs',
        scanStartPath: '证书考试',
        basePath: '/证书考试/',
        resolvePath: '/证书考试/',
        useTitleFromFileHeading: true,
        collapsed: false, //折叠组关闭
        collapseDepth: 2, //折叠组2级菜单
      },
      {
        documentRootPath: '/docs',
        scanStartPath: '科学上网',
        basePath: '/科学上网/',
        resolvePath: '/科学上网/',
        useTitleFromFileHeading: true,
        collapsed: false, //折叠组关闭
        collapseDepth: 2, //折叠组2级菜单
      },
      {
        documentRootPath: '/docs',
        scanStartPath: '设计模式',
        basePath: '/设计模式/',
        resolvePath: '/设计模式/',
        useTitleFromFileHeading: true,
        collapsed: false, //折叠组关闭
        collapseDepth: 2, //折叠组2级菜单
      },
      {
        documentRootPath: '/docs',
        scanStartPath: '薅羊毛',
        basePath: '/薅羊毛/',
        resolvePath: '/薅羊毛/',
        useTitleFromFileHeading: true,
        collapsed: false, //折叠组关闭
        collapseDepth: 2, //折叠组2级菜单
      },
    ]),

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wkwbk' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"/></svg>'
        },
        link: 'https://t.me/lisir_me'
      }
    ]
  }
})
