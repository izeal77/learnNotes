export const themeData = {
  "logo": "/assets/img/logo.png",
  "logoDark": "/assets/img/logoDark.png",
  "darkMode": true,
  "repo": "https://gitee.com/izeal77",
  "repoLabel": "Gitee",
  "navbar": [
    {
      "text": "主页",
      "link": "/"
    },
    {
      "text": "基础知识",
      "children": [
        {
          "text": "前端基础",
          "link": "/foundation/HTML.md"
        },
        {
          "text": "数据结构与算法",
          "link": "/dataStructure/数据结构.md"
        }
      ]
    },
    {
      "text": "前端面经",
      "children": [
        {
          "text": "基础知识",
          "link": "/interview/自我介绍.md"
        },
        {
          "text": "HR面",
          "link": "/interview/interview-hr.md"
        },
        {
          "text": "公司真题",
          "link": "/interview/interview-company.md"
        }
      ]
    }
  ],
  "sidebar": {
    "/foundation/": [
      {
        "text": "前端基础",
        "children": [
          "HTML.md",
          "CSS.md",
          "JavaScript.md",
          "Ajax.md",
          "webpack.md",
          "Vue.md"
        ]
      }
    ],
    "/dataStructure/": [
      {
        "text": "数据结构与算法",
        "children": [
          "数据结构.md",
          "算法.md"
        ]
      }
    ],
    "/interview/": [
      {
        "text": "前端面经",
        "children": [
          "自我介绍.md",
          "计算机网络.md",
          "HTML"
        ]
      }
    ]
  },
  "sidebarDepth": 5,
  "lastUpdated": "Last Updated",
  "tip": "小提示",
  "warning": "注意点",
  "danger": "敲重点",
  "notFound": [
    "啊哦，找不到了！",
    "再看看别的？"
  ],
  "editLink": true,
  "editLinkText": "编辑此页",
  "smoothScroll": true,
  "@vuepress/pwa": {
    "serviceWorker": true,
    "updatePopup": {
      "message": "有新的内容更新",
      "buttonText": "刷新"
    }
  },
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
