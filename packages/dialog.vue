<template>
    <!-- 对话框的遮罩 .self证明只有点击自己才触发 -->
    <transition name="fade">
      <div class="my-dialog_wrapper" v-show="visible" @click.self="handleClose">
        <div class="my-dialog" :style="{width, marginTop:top}">
            <div class="my-dialog_header">
                <slot name="title">
                    <span class="my-dialog_title">{{title}}</span>
                </slot>
                <button class="my-dialog_headerbtn" @click="handleClose">
                    <i class="iconfont icon-close"></i>
                </button>
            </div>
            <div class="my-dialog_body">
                <!-- 默认插槽 让用户选择使用不同的内容 表单等 -->
                <slot></slot>
            </div>
            <div class="my-dialog_footer" v-if="$slots.footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
    </transition>
</template>

<script>
export default {
    name: 'MyDialog',
    props: {
        title: {
            type: String,
            default: '提示'
        },
        width: {
            type: String,
            default: '50%'
        },
        top: {
            type: String,
            default: '15vh'
        },
        visible: {
            type: Boolean,
            default: false
        }
    },
    methods: {
      handleClose () {
        this.$emit('update:visible', false)
      }
    }
}
</script>

<style lang="scss" scoped>
    .my-dialog_wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0,0,0, .5);

  .my-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-sizing: border-box;
    width: 30%;

    &_header {
      padding: 20px 20px 10px;
      .my-dialog_title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .my-dialog_headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .el-icon-close {
          color: #909399;
        }
      }
    }

    &_body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &_footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      .my-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
    .fade-enter-active {
      animation: fade .3s;
    }
    .fade-leave-active {
      animation: fade .2s reverse;
    }
    @keyframes fade {
      0% {
        opacity: 0;
        transform: translateY(-20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
</style>
