<template>
  <div id="app">
      <!-- <div id="img"><img src="/assets/pic1.jpg" title="title" width=100% height=100%></div>
      <div id="msg">
        <h1> {{ msg }} </h1>
      </div> -->
      <!-- <router-view/> -->
      <!-- <Nav></Nav> -->
      <JumboTron></JumboTron>

  </div>
</template>

<script>
import Nav from '@/components/common/Nav.vue'
import Footer from '@/components/common/Footer.vue'
import JumboTron from '@/components/common/JumboTron.vue'
export default {
  name: 'Home',
  components:{
    Nav, Footer,JumboTron
  },
  data () {
    return {
      msg: 'Welcome'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
