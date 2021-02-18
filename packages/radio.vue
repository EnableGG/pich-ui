<template>
  <label class="my-radio" :class="{'is-checked': label === model}">
    <!-- 小圆 -->
    <span class="my-radio__input">
      <span class="my-radio__inner"></span>
      <input
        class="my-radio__original"
        type="radio"
        :value="label"
        :name="name"
        v-model="model"
      >
    </span>
    <span class="my-radio__label">
      <slot>{{label}}</slot>
    </span>
  </label>
</template>

<script>
export default {
    name: 'MyRadio',
    inject: {
        RadioGroup: {
            default: ''
        }
    },
    // 需要提供一个计算属性 model
    computed: {
        model: {
            get () {
                return this.isGroup ? this.RadioGroup.value : this.value
            },
            set (value) {
                // 触发父组件给当前组件注册的的input事件
                this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
            }
        },
        isGroup () {
            // 用于判断radio是否被radioGroup包裹
            return !!this.RadioGroup
        }
    },
    props: {
        label: {
            type: [String, Number, Boolean],
            default: ''
        },
        value: null,
        name: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss">
    .my-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .my-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .my-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
    }
    .my-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .my-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}

  .my-radio.is-checked {
      .my-radio__input {
          .my-radio__inner {
              border-color: #409eff;
              background: #409eff;
              &:after {
                  transform: translate(-50%, -50%) scale(1);
              }
          }
      }
      .hm-radio__label {
          color: #409eff;
      }
  }
</style>
