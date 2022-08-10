<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <fang-demo></fang-demo>
    <m-card
      imgSrc="1.png"
      summary="新版Flutter3 跨平台混合开发 新版Flutter3 跨平台混合开发"
    ></m-card>
    <br>
    <m-card
      imgSrc="2.png"
      summary="全新升级 Vue3打造后台综合解决方案 全新升级 Vue3打造后台综合解决方案"
    >
      <template v-slot:footer>
        <div class="footer">
            <div class="level">中级 888人报名</div>
            <div class="price">￥299.00</div>
        </div>
      </template>  
    </m-card>
    <br>
    <m-card
      imgSrc="3.png"
      :width="370"
      :imgHeight="90"
    >
    产品经理 电商实战系统 产品经理 电商实战系统 产品经理 电商实战系统
      <template v-slot:footer>
        <div class="footer-spring">
          <div class="level">4步骤·6门课</div>
          <div class="level">6666收藏</div>
        </div>
      </template>
    </m-card>
  </div>
</template>

<script>
// import demo from '../components/lib/demo/src/main.vue'

export default {
  name: 'App',
  components: {
    // demo,W
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.footer{
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}

.level{
  color: #9199A1;
  margin-bottom: 8px;
}

.price{
  color: #F01414;
}

.footer-spring{
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 12px;
}
</style>
