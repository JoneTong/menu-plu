// packages/menu/index.js

// 导入组件，组件必须声明 name
import menuPlu from './index.vue'

// 为组件添加 install 方法，用于按需引入
menuPlu.install = function (Vue) {
    Vue.component(menuPlu.name, menuPlu)
}

export default menuPlu