<template>
  <div class="dialog" v-if="this.isShow" @click="hideShow">
    <div class="dialog-cover"></div>
    <div class="dialog-content">
      <div class="dialog-title">title</div>
      <div class="dialog-body">denglu/zhuce</div>
      <div class="dialog-footer">dianji</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    show() {
      document.body.style.position = "fixed"
      this.isShow = true
    },
    hideShow() {
      document.body.style.position = "initial"
      this.isShow = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .dialog
    font-size: 32px
    .dialog-cover
      background: rgba(0,0,0,0.8)
      position: fixed 
      z-index: 200
      top: 0
      left: 0
      width: 100%
      height: 100%
    .dialog-content
      position: fixed
      display: flex
      top: 50%
      left: 50%
      height: 50%
      width: 80%
      border-radius: 10%
      background: #ffffff
      transform: translate(-50%,-50%)
      flex-direction: column
      justify-content: center
      align-items: center
      z-index: 300
</style>
