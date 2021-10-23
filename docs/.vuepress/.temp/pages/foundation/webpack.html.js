export const data = {
  "key": "v-4b00664f",
  "path": "/foundation/webpack.html",
  "title": "",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "webpack",
      "slug": "webpack",
      "children": []
    }
  ],
  "filePathRelative": "foundation/webpack.md",
  "git": {
    "updatedTime": 1634984517000,
    "contributors": [
      {
        "name": "izeal77",
        "email": "243313724@qq.com",
        "commits": 1
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
