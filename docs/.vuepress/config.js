module.exports = {
  // 网站标题
  title: '22:08',
  // 网站描述
  description: '得其偏爱，倾尽平生慷慨',
  // 设置站点根路径
  base: '/',
  // 设置输出目录
  dest: './ROOT',
  // head的标签
  head: [
    ['link', { rel: 'icon', href: '/assets/img/logoDark.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  plugins: [

    '@vuepress/plugin-search',
    {
      // 排除首页
      isSearchable: (page) => page.path !== '/',
      maxSuggestions: 10,
    },

  ],
  themeConfig: {
    // 导航栏logo
    logo: '/assets/img/logo.png',
    logoDark: '/assets/img/logoDark.png',
    // 夜间模式
    darkMode: true,
    // 仓库
    repo: "https://gitee.com/izeal77",
    // 仓库标签
    repoLabel: 'Gitee',
    // 添加导航栏
    navbar: [
      {
        text: '主页', link: '/'
      },
      {
        text: '基础知识',
        children: [
          { text: '前端基础', link: '/foundation/HTML.md' },
          { text: '数据结构与算法', link: '/dataStructure/数据结构.md' },
        ]
      },
      {
        text: '前端面经',
        children: [
          { text: '基础知识', link: '/interview/自我介绍.md' },
          { text: 'HR面', link: '/interview/interview-hr.md' },
          { text: '公司真题', link: '/interview/interview-company.md' }
        ]
      },
    ],
    // 添加侧边栏
    sidebar: {
      "/foundation/": [
        {
          text: "前端基础",
          children: [
            'HTML',
            'CSS',
            'JavaScript',
            'Ajax',
            'webpack',
            'Vue'
          ],
        }
      ],
      "/dataStructure/": [
        {
          text: "数据结构与算法",
          children: [
            '数据结构',
            '算法'
          ]
        }
      ],
      "/interview/": [
        {
          text: "前端面经",
          children: [
            '自我介绍',
            '计算机基础',
          ]
        }
      ]
    },
    // 侧边栏最大深度
    sidebarDepth: 5,
    // 上次更新时间
    lastUpdated: 'Last Updated',
    // tip默认标题
    tip: "小提示",
    // warning默认标题
    warning: '注意点',
    // danger默认标题
    danger: "敲重点",
    // 404的提示信息
    notFound: ["啊哦，找不到了！", "再看看别的？"],
    // 编辑
    editLink: true,
    editLinkText: '编辑此页',
    smoothScroll: true,
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        message: "有新的内容更新",
        buttonText: "刷新"
      }
    }
  },

}
