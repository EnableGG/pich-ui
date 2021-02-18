<template>
  <div class="my-input" :class="{'my-input--suffix': showSuffix}">
      <input class="my-input__inner" :class="{'is-disabled': disabled}" :placeholder="placeholder"
      :type="showPassword ? (passwordVisible ? 'text':'password'):type"
      :name="name"
      :disabled="disabled"
      :value="value"
      @input="handleInput">
      <span class="my-input__suffix" v-if="showSuffix">
          <i class="iconfont icon-error" v-if="clearable && value" @click="clear"></i>
          <i class="iconfont icon-browse" :class="{'icon-browse-active': passwordVisible}" v-if="showPassword" @click="handlePassword"></i>
      </span>
  </div>
</template>

<script>
export default {
    name: 'MyInput',
    data () {
        return {
            // 用于控制是否显示密码框
            passwordVisible: false
        }
    },
    props: {
        placeholder: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        name: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        value: {
            type: String,
            default: ''
        },
        clearable: {
            type: Boolean,
            default: false
        },
        showPassword: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        showSuffix () {
            return this.clearable || this.showPassword
        }
    },
    methods: {
        handleInput (e) {
            this.$emit('input', e.target.value)
        },
        clear () {
            this.$emit('input', '')
        },
        handlePassword () {
            this.passwordVisible = !this.passwordVisible
        }
    }
}
</script>

<style lang="scss" scoped>
    .my-input {
  width: 180px;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .my-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        cursor: not-allowed;
    }
  }
//   .my-input__suffix {
//       position: absolute;
//       top: 50%;
//       right: 8px;
//       transform: translateY(-50%);
//       color: #ccc;
//   }
}
    .my-input--suffix {
        .my-input__inner {
            padding-right: 30px;
        }
        .my-input__suffix {
            position: absolute;
            height: 100%;
            right: 10px;
            top: 0;
            line-height: 40px;
            text-align: center;
            color: #c0c4cc;
            transition: all .3s;
            z-index: 900;
            i {
                color: #c0c4cc;
                font-size: 14px;
                cursor: pointer;
                transition: color .2s cubic-bezier(.645,.045,.355,1);
            }
            .icon-browse-active {
                    color: blue;
                }
        }
    }
</style>
