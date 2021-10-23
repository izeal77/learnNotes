import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-15d5de1f","/dataStructure/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.html","",["/dataStructure/数据结构.html","/dataStructure/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84","/dataStructure/数据结构.md","/dataStructure/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.md"]],
  ["v-61d980ac","/dataStructure/%E7%AE%97%E6%B3%95.html","",["/dataStructure/算法.html","/dataStructure/%E7%AE%97%E6%B3%95","/dataStructure/算法.md","/dataStructure/%E7%AE%97%E6%B3%95.md"]],
  ["v-528484b6","/foundation/Ajax.html","",["/foundation/Ajax","/foundation/Ajax.md"]],
  ["v-b96891ce","/foundation/CSS.html","",["/foundation/CSS","/foundation/CSS.md"]],
  ["v-05f7d62b","/foundation/HTML.html","",["/foundation/HTML","/foundation/HTML.md"]],
  ["v-5d495ba9","/foundation/JavaScript.html","",["/foundation/JavaScript","/foundation/JavaScript.md"]],
  ["v-7e4d2576","/foundation/Vue.html","",["/foundation/Vue","/foundation/Vue.md"]],
  ["v-4b00664f","/foundation/webpack.html","",["/foundation/webpack","/foundation/webpack.md"]],
  ["v-66aa3d90","/interview/%E8%87%AA%E6%88%91%E4%BB%8B%E7%BB%8D.html","",["/interview/自我介绍.html","/interview/%E8%87%AA%E6%88%91%E4%BB%8B%E7%BB%8D","/interview/自我介绍.md","/interview/%E8%87%AA%E6%88%91%E4%BB%8B%E7%BB%8D.md"]],
  ["v-5628f5cf","/interview/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%9F%A5%E8%AF%86.html","",["/interview/计算机知识.html","/interview/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%9F%A5%E8%AF%86","/interview/计算机知识.md","/interview/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%9F%A5%E8%AF%86.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
