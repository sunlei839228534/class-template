<template>
  <div id="app">
  <div ref="header">
    <div ref="headerImages">
    <div class="banner-wrapper" v-for="(item,index) in headerImg" :key="index">
      <img :src=item.imgUrl alt="">
    </div>
    </div>
    <div class="course-wrapper" ref="course">
      <section class="grade-chooseing-wrapper">
        <div>
          <div class="course-title"></div>
          <ul class="grade-list-wrap">
            <li
            @click="handleClickItem(item,i)"
            :class="{active: currentIndex === i}"
            class="grade-item"  v-for="(item,i) in grade" :key="i">
              {{item.class}}
            </li>
          </ul>
        </div>
      </section>
      <div class="grade-title"></div>
      <section class="time-chooseing-wrapper">
        <ul>
          <li class="active grade-item" v-for="(plan,index) in currentClassPlan" :key="index">
            <div class="li-to-left">
              <span>
                {{plan.classdate}}
              </span>
              <em>{{plan.classtime}}</em>
            </div>
            <div class="li-to-right" @click="handleClickPlan(plan)">
              点击报名>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </div>
    <div class="content">
      <div class="info" v-for="(item,index) in infoImg" :key="index">
        <img :src="item.imgUrl" alt="">
      </div>
    </div>
    <div class="bottom" v-if="bottomShow" ref="bottom">
      <div class="footer-wrapper">
        <div class="fixed-content"> 
          <div class="footer-text">{{bottomText}}</div>
          <div @click="handlelogin" class="footer-btn">立即报名</div>
        </div>
      </div>
    </div>
    <Login ref="confirm"></Login>
  </div>
</template>

<script>
import Login from 'components/Login'

export default {
  name: 'app',
  data() {
    return {
      bottomShow: false, //下方的按钮显示
      bottomText: '50元15节课', 
      currentIndex: 0, //当前的页面
      month: "9",
      headerImg: [
        {imgUrl: 'https://www.anyison.net/files//banner.jpg'}
      ], //header轮播图
      infoImg: [
        {imgUrl: 'https://www.anyison.net/files//three2.jpg'},
        {imgUrl: 'https://www.anyison.net/files//firstAdvantage.jpg'},
        {imgUrl: 'https://www.anyison.net/files//secondAdvantage.jpg'},
        {imgUrl: 'https://www.anyison.net/files//teacher.jpg'},
        {imgUrl: 'https://www.anyison.net/files//apply.jpg'},
        {imgUrl: 'https://www.anyison.net/files//question.jpg'}
      ],  //info图片
      grade: [
        {
          class: '升一年级',
          classPlan: [
            {
              classdate: "7.12-7.13",
              classtime: '18.00-19.00'
            },{
              classdate: "7.42-7.20",
              classtime: '18.00-19.00'
            }
          ]
        },
        {
          class: '升二年级',
          classPlan: [
            {
              classdate: "7.10-7.22",
              classtime: '18.00-19.00'
            },{
              classdate: "7.42-7.20",
              classtime: '18.00-19.00'
            },
            {
              classdate: "7.10-7.22",
              classtime: '18.00-19.00'
            },{
              classdate: "7.42-7.20",
              classtime: '18.00-19.00'
            }
          ]
        },
        {
          class: '升三年级',
          classPlan: [
            {
              classdate: "7.10-7.22",
              classtime: '18.00-19.00'
            },{
              classdate: "7.42-7.20",
              classtime: '18.00-19.00'
            },
            {
              classdate: "7.10-7.22",
              classtime: '18.00-19.00'
            }
          ]
        }
      ]//api获取接口的数据
    }
  },
  methods: {
    handleClickItem(item,i) { //item : {class,classPlan: [classdate,classtime]}
      this.currentIndex = i
    },
    /**
     * params @plan plan是传入的实例
     */
    handleClickPlan() {
      //此处应该传入plan
      // console.log(`你已成功购买${this.grade[this.currentIndex].class} ${plan.classdate} ${plan.classtime}的课程`)
      this.$refs.confirm.show()
    },
    handleScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.bottomShow = scrollTop > this.$refs.header.clientHeight ? true : false 
    },
    handlelogin() {
      window.scrollTo(0, this.$refs.headerImages.clientHeight)
    }
  },
  computed: {
    currentClassPlan() {
      return this.grade[this.currentIndex].classPlan //使用computed属性渲染
    }
  },
  mounted() {

  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll,true)//添加scroll绑定事件
  },
  destroyed() {
    window.removeEventListener('scroll',this.handleScroll) //移除绑定事件
  },
  components: {
    Login
  }
}
</script>
<style lang="stylus" scoped>
  @import "~common/stylus/init"
    .banner-wrapper >>> img 
      width: 100%
      height: 5.82rem
    .content >>> img
      width: 100%
      height: 100%
    .course-wrapper
      padding: 0 .3rem 0
      .grade-chooseing-wrapper
        display: block
        .course-title
          margin: .1rem 0 .3rem
          width: 100%
          height: .84rem
          background: url("https://www.anyison.net/files//course-title.jpg")
          background-size: 100% 100%
        .grade-list-wrap
          padding: 0
          margin-top: .3rem
          font-size: 0
          display: flex
          align-items: center
          flex-direction: row
          flex-wrap: wrap
          width: 100%
          box-sizing: border-box
          .grade-item
            display: inline-block
            margin: 0 2.7% 2.7% 0
            width: 22%
            height: .8rem
            box-sizing: border-box
            background: #fff
            border: 1px solid #bfbfbf
            border-radius: .1rem
            font-size: .2rem
            color: #333
            text-align: center
            line-height: .8rem
            font-weight: 600
          .active
            background: linear-gradient(90deg,#fc267b,#f51b73)
            color: white
      .grade-title 
        width: 100%
        height: .84rem
        margin: .1rem 0 .3rem
        background: url(https://www.anyison.net/files//grade-title.jpg)
        background-size: 100% 100%
      .time-chooseing-wrapper >>> li
        position: relative
        margin: 0 auto .2rem
        padding: .18rem .2rem
        height: .44rem
        line-height: .44rem
        border: .02rem solid #fc267b
        border-radius: .1rem
        .li-to-left
          color: #f82277
          font-size: .28rem
        .li-to-right
          position: absolute
          top: -.06rem
          right: -.56rem
          display: inline-block
          color: #fff
          width: 3rem
          height: .88rem
          line-height: .88rem
          border-radius: .44rem
          font-size: .48rem
          transform: scale(.5)
          text-align: center
          background: linear-gradient(90deg, #fc267b, #f51b73)
    .bottom
      position: fixed
      z-index: 999
      bottom: 0
      width: 100%
      .footer-wrapper
        padding: 0 .5rem 0 .6rem
        width: 100%
        background: pink
        box-sizing: border-box
        font-size: .29rem
        background: #fff
        .fixed-content
          width: 100%
          height: 1rem
          display: flex
          justify-content: space-between
          align-items: center
          .footer-text
            color: #000
            line-height: 1rem
          .footer-btn
            width: 44.44%
            height: .8rem
            background: linear-gradient(90deg,#fc267b,#f51b73)
            color: #fff
            line-height: .8rem
            text-align: center
            border-radius: .4rem
</style>
