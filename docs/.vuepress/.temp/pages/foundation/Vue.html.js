export const data = {
  "key": "v-7e4d2576",
  "path": "/foundation/Vue.html",
  "title": "",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "01 Vue 概述",
      "slug": "_01-vue-概述",
      "children": []
    },
    {
      "level": 3,
      "title": "02 Vue CLI",
      "slug": "_02-vue-cli",
      "children": []
    }
  ],
  "filePathRelative": "foundation/Vue.md",
  "git": {
    "updatedTime": null,
    "contributors": []
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
