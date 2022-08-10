// import demo from './src/main'
import demo from './src/main.vue'

demo.install = function(Vue) {
    Vue.component(demo.name, demo)
}

export default demo
