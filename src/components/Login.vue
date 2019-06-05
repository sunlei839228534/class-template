<template>
  <div class="dialog" v-if="this.isShow" @click="hideShow">
    <div class="dialog-cover"></div>
    <div class="dialog-content" @click.stop>
      <div class="dialog-title">注册/登录</div>
      <div class="dialog-body">
        <form action="" method="Post">
          姓名: <input type="text" style="border: 1px solid black;margin-bottom: .3rem" placeholder="请输入姓名">
          <br>
          电话: <input type="password" style="border: 1px solid black" placeholder="请输入手机号">
        </form>
      </div>
      <div class="dialog-footer">
        <div class="dialog-button">
          立即注册
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      top: null,
      isShow: false
    }
  },
  methods: {
    show() {
      this.top = window.scrollY  
      document.body.style.position = 'fixed'
      document.body.style.top = -this.top + 'px'
      this.isShow = true
    },
    hideShow() {
      document.body.style.position = 'static'
      document.body.top = ''
      this.isShow = false
      window.scrollTo(0, this.top)
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
      margin: 0 auto
      width: 80%
      border-radius: 10%
      background: #ffffff
      transform: translate(-50%,-50%)
      flex-direction: column
      justify-content: center
      align-items: center
      z-index: 300
      .dialog-title
        font-size: .48rem
        position: absolute
        top: 20%
        display: inline-block
        width: 100%
        text-align: center
        line-height: .48rem
      .dialog-footer
        display: flex
        .dialog-button
          align-items: center
          justify-content: center
          text-align: center
          margin-top: .48rem
          font-size: .4rem
          line-height: .4rem
          width: 4.4rem
          height: .4rem
          border-radius: 3rem
          color: #ffffff
          background: linear-gradient(90deg,#fc267b,#f51b73)
</style>
