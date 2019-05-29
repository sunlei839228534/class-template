<template>
  <div id="app">
    <div class="banner-wrapper" v-for="(item,index) in headerImg" :key="index">
      <img :src=item.imgUrl alt="">
    </div>
    <div class="course-wrapper">
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
    <div class="content">
      <div class="info" v-for="(item,index) in infoImg" :key="index">
        <img :src="item.imgUrl" alt="">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      currentIndex: 0,
      month: "9",
      headerImg: [
        {imgUrl: 'https://yy-s.zuoyebang.cc/static/toufang/math-class-b/banner.jpg'}
      ], //header轮播图
      infoImg: [
        {imgUrl: 'https://yy-s.zuoyebang.cc/static/toufang/math-class-b/three2.jpg'},
        {imgUrl: 'https://yy-s.zuoyebang.cc/static/toufang/math-class-b/firstAdvantage.jpg'},
        {imgUrl: 'https://yy-s.zuoyebang.cc/static/toufang/math-class-b/secondAdvantage.jpg'},
        {imgUrl: 'https://yy-s.zuoyebang.cc/static/toufang/math-class-b/teacher.jpg'},
        {imgUrl: 'https://yy-s.zuoyebang.cc/static/toufang/math-class-b/apply.jpg'},
        {imgUrl: 'https://yy-s.zuoyebang.cc/static/toufang/math-class-b/question.jpg'}
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
      ]
    }
  },
  methods: {
    handleClickItem(item,i) { //item : {class,classPlan: [classdate,classtime]}
      this.currentIndex = i
    },
    handleClickPlan(plan) {
      alert(`你已成功购买${this.grade[this.currentIndex].class} ${plan.classdate} ${plan.classtime}的课程`)
    }
  },
  computed: {
    currentClassPlan() {
      return this.grade[this.currentIndex].classPlan //使用computed属性渲染
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~common/stylus/init"
    .banner-wrapper >>> img 
      width: 100%
      height: 100%
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
          background: url("https://yy-s.zuoyebang.cc/static/toufang/math-class-b/course-title.jpg")
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
            font-size: .28rem
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
        background: url(https://yy-s.zuoyebang.cc/static/toufang/math-class-b/grade-title.jpg)
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
</style>
