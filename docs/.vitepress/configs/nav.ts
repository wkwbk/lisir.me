/* configs/nav.ts */
import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '首页', link: '/' },

  { text: '导航', link: '/nav/' },

  {
    text: '学习笔记',
    items: [
      { text: 'Git', link: '/学习笔记/1、Git/00.Git-学习笔记' },
      { text: 'Java', link: '/学习笔记/2、Java/00.Java-类的五大成员' },
      { text: 'Linux', link: '/学习笔记/3、Linux/00.Linux-学习笔记' },
      { text: 'Hadoop', link: '/学习笔记/4、Hadoop/00.虚拟机中搭建-Hadoop-集群' },
      { text: 'Markdown', link: '/学习笔记/5、Markdown/00.Markdown-入门教程及书写风格' },
      { text: 'Docker', link: '/学习笔记/6、Docker/00.Docker-管理工具-Portainer' },
      { text: '备忘录', link: '/学习笔记/7、备忘录/00.英语语法' },
    ]
  },

  {
    text: '证书考试',
    items: [
      { text: '软考中级', link: '/证书考试/软考中级/00.软考中级-软件设计师' },
      { text: '计算机二级', link: '/证书考试/计算机二级/00.计算机二级-MS-Office' },
    ]
  },

  {
    text: '科学上网',
    items: [
      { text: '介绍', link: '/科学上网/介绍/00.科学上网工具哪个好？' },
      { text: '搭建', link: '/科学上网/搭建/00.233-一键安装脚本' },
      { text: '使用', link: '/科学上网/使用/00.v2rayN-使用教程' }
    ]
  },

  {
    text: '设计模式',
    items: [
      { text: '创建型模式', link: '/设计模式/创建型模式' },
      { text: '结构型模式', link: '/设计模式/结构型模式' },
      { text: '行为型模式', link: '/设计模式/行为型模式' }
    ]
  },

  {
    text: '薅羊毛',
    items: [
      { text: '薅羊毛', link: '/薅羊毛/00.青龙面板从零搭建教程' },
      { text: '薅羊毛', link: '/薅羊毛/01.全自动领取-Epic-每周赠送游戏' },
    ]
  },
]