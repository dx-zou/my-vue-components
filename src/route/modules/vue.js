import layout from "@/layout";
export default [
  {
    path: "/vue",
    component: layout,
    sort: 4,
    children: [
      {
        path: "router",
        name: "router",
        component: () => import("@/views/vue/vue-router"),
        meta: {
          breadcrumbs: ["vue", "route"]
        }
      },
      {
        name: "slot",
        path: "slot",
        component: () => import("@/views/vue/todo"),
        meta: {
          breadcrumbs: ["vue", "slot"]
        }
      },
      {
        path: "transition",
        name: "transition",
        component: () => import("@/views/vue/transition"),
        meta: {
          breadcrumbs: ["vue", "transiton"]
        }
      },
      {
        path: "computed",
        name: "computed",
        component: () => import("@/views/vue/computed"),
        meta: {
          breadcrumbs: ["vue", "computed"]
        }
      }
    ]
  },
]