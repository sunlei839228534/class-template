<template>
  <div class="dialog" v-if="this.isShow" @click="hideShow">
    <div class="dialog-cover"></div>
    <div class="dialog-content" @click.stop>
      <div class="dialog-title">注册/登录</div>
      <div class="dialog-body">
        <form action="POST">
          账号:<input type="text">
          <br>
          密码: <input type="password">
        </form>
      </div>
      <div class="dialog-footer">
      </div>
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
    position relative
    font-size: 16px
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
