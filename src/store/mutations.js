//使用常量替代 mutation 事件类型在各种 Flux 实现中是很常见的模式。
//这样可以使 linter 之类的工具发挥作用，
//同时把这些常量放在单独的文件中可以让你的代码合作者对整个 app 包含的 mutation 一目了然：
import {
  INCREMENT,
  STATUS,
} from './mutation-types'

import {
  constantRouterMap
} from '@/router.js'
export default {
  [INCREMENT](state, number) {
    state.count += number.count
  },
  [STATUS](state) {
    state.show = !state.show
  },
  SET_ROUTES: (state, routers) => {
    state.addRouters = routers;
    state.routers = constantRouterMap.concat(routers);
  }
}