<template>
  <div class="dialog" v-if="this.isShow" @click="hideShow">
    <div class="dialog-cover"></div>
    <div class="dialog-content" @click.stop>
      <div class="dialog-close" @click="hideShow"></div>
      <div class="dialog-wrapper">
        <div class="dialog-title">注册/登录</div>
        <div class="dialog-body">
          <form action="" method="Post">
              <input class="dialog-input" type="text" placeholder="请输入姓名">
              <i class="icon-name"></i>
              <input class="dialog-input" type="password" placeholder="请输入手机号">
              <i class="icon-phone"></i>
          </form>
        </div>
        <div class="dialog-footer">
          <div class="dialog-button">
              <div class="dialog-button-text">立即预约</div>
          </div>
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
      this.top = window.scrollY  //获取当前window.scrollY的值
      document.body.style.position = 'fixed' //设置背景层为fixed 无法滚动
      document.body.style.top = -this.top + 'px' //设置body的top值为当前window.scrollY的负值
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
    position: relative
    font-size: 18px
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
      text-align: center
      .dialog-close
        position: absolute 
        width: .25rem
        height: .25rem
        right: .3rem
        top: .3rem
        background: url(https://www.anyison.net/files/close-text.jpg)
        background-size: 100% 100%
      .dialog-wrapper
        position: absolute
        top: 1rem
        font-size: .48rem
        .dialog-title
          margin-bottom: .2rem
        .dialog-body
          .dialog-input
            background: #f8f8f8
            height: .8rem
            border: none
            font-size: .24rem
            padding: 0 .78rem
            border-radius: .08rem
      .dialog-footer
        display: flex
        align-items: center
        .dialog-button
          width: 4rem
          height: .8rem
          margin: 0 auto
          background: linear-gradient(90deg,#fc267b,#f51b73)
          margin-top: .2rem
          border-radius: .35rem
          .dialog-button-text
            font-size: .3rem
            color: #ffffff
            line-height: .8rem
</style>
