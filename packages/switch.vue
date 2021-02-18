<template>
  <label class="my-switch" :class="{'is-checked': value}" @click="handleClick" for="checkbox">
      <span class="my-switch__core" ref="core">
          <span class="my-switch__button"></span>
      </span>
      <input type="checkbox" class="my-switch__input" :name="name" ref="input">
  </label>
</template>

<script>
export default {
    name: 'MySwitch',
    props: {
        value: {
            type: Boolean,
            default: false
        },
        activeColor: {
            type: String,
            default: ''
        },
        inactiveColor: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        }
    },
    mounted () {
        // 修改开关的颜色
        this.setColor()
        // 控制checkbox的checked值
        this.$refs.input.checked = this.value
    },
    methods: {
        async handleClick () {
            this.$emit('input', !this.value)
            // 点击的时候 还需要修改背景色
            // 等待value发生了改变 再setColor
            // 数据修改后，等待我们的dom更新 再修改按钮颜色
            await this.$nextTick()
            this.setColor()
            this.$refs.input.checked = this.value
        },
        setColor () {
            if (this.activeColor || this.inactiveColor) {
                const color = this.value ? this.activeColor : this.inactiveColor
                console.log(color)
                this.$refs.core.style.borderColor = color
                this.$refs.core.style.backgroundColor = color
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .my-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .my-switch__input {
    // 隐藏
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .my-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    .my-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}

.my-switch.is-checked {
  .my-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .my-switch__button {
        transform: translateX(20px);
    }
  }
}
</style>
