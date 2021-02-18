<template>
  <div class="my-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'MyForm',
    props: {
      model: {
        type: Object,
        required: true
      },
      labelWidth: {
        type: String,
        default: '80px'
      }
    },
    provide () {
      return {
        Form: this
      }
    }
}
</script>

<style>

</style>
