export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "22:08",
  "description": "得其偏爱，倾尽平生慷慨",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/assets/img/logoDark.png"
      }
    ],
    [
      "link",
      {
        "rel": "manifest",
        "href": "/manifest.json"
      }
    ],
    [
      "meta",
      {
        "name": "theme-color",
        "content": "#3eaf7c"
      }
    ],
    [
      "meta",
      {
        "name": "apple-mobile-web-app-capable",
        "content": "yes"
      }
    ],
    [
      "meta",
      {
        "name": "apple-mobile-web-app-status-bar-style",
        "content": "black"
      }
    ],
    [
      "link",
      {
        "rel": "apple-touch-icon",
        "href": "/icons/apple-touch-icon-152x152.png"
      }
    ],
    [
      "link",
      {
        "rel": "mask-icon",
        "href": "/icons/safari-pinned-tab.svg",
        "color": "#3eaf7c"
      }
    ],
    [
      "meta",
      {
        "name": "msapplication-TileImage",
        "content": "/icons/msapplication-icon-144x144.png"
      }
    ],
    [
      "meta",
      {
        "name": "msapplication-TileColor",
        "content": "#000000"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
