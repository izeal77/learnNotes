export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroImage": "/assets/img/滑板.svg",
    "tagline": "得其偏爱，倾尽平生慷慨",
    "actions": [
      {
        "text": "快速开始 →",
        "link": "/foundation/HTML.md"
      }
    ],
    "footer": "MIT Licensed | Copyright © 2021"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "README.md",
  "git": {
    "updatedTime": 1635057322000,
    "contributors": [
      {
        "name": "izeal77",
        "email": "243313724@qq.com",
        "commits": 2
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
