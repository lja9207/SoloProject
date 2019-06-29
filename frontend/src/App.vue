<template>
  <div id="app">
    <img src="./assets/pic1.jpg" title="title" width=100% height=100%>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  margin-left: auto;
  margin-right: auto;
  display: block;
  text-align: center;
  width: 80%;
  height: auto;
  margin-bottom: 100px;

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  position: relative;
  text-align: center;
  color: white;
  font-size: 80px;
  letter-spacing: 10px;
   text-shadow: -2px 0 black, 0 -1px black, 2px 0 black, 0 1px black;
  -moz-text-shadow: 1px 0 black, 0 -2px black, 1px 0 black, 0 -2px black;
  -webkit-text-shadow: 1px 0 black, 0 -1px black, 2px 0 black, 0 1px black; 
}
</style>
