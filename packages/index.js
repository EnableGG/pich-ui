// 整个包的入口
// 定义 install 方法,接收 Vue 作为参数。如果使用use注册插件，则所有的组件都将被注册
// 统一导出
// 导入颜色选择器组件
import Button from './button.vue'
import Dialog from './dialog.vue'
import Input from './input.vue'
import Radio from './radio.vue'
import RadioGroup from './radio-group.vue'
import Checkbox from './checkbox.vue'
import CheckboxGroup from './checkbox-group.vue'
import Form from './form.vue'
import FormItem from './form-item.vue'
import Switch from './switch.vue'
import './font/iconfont.css'
// 存储组件列表
const components = [
    Button,
    Dialog,
    Input,
    Radio,
    RadioGroup,
    Checkbox,
    CheckboxGroup,
    Form,
    FormItem,
    Switch
]
const install = function (Vue) {
    // 遍历注册全局组件
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}

// 判断是否是直接引入文件，如果是， 就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install
}
