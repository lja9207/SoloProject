<template>
  <div class="jumbotron">
    <div id="img">
      
    </div>
    <p class="welcome">
      <a class="btn btn-success btn-lg" href="/loginform" role="button">WELCOME</a>
    </p>
  </div>  
</template>
<script>
export default {
    
}
</script>
<style scoped>
.jumbotron{
  background-color: white;
}
#img{
  width: 900px;
  height: 600px;
  margin: -20px auto;
  background-image: url(../../assets/pic1.jpg);
  background-size: cover;
}
.btn{
  
  text-align: center;
  width: 400px;
  height: 100px;
  display: table;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  font-size: 40px;
  
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  position: relative;
  text-align: center;
  color: white;
  
  padding: 20px;
  font-weight: bold;
  letter-spacing: 10px;
   /* text-shadow: -2px 0 black, 0 -1px black, 2px 0 black, 0 1px black;
  -moz-text-shadow: 1px 0 black, 0 -2px black, 1px 0 black, 0 -2px black;
  -webkit-text-shadow: 1px 0 black, 0 -1px black, 2px 0 black, 0 1px black;  */
}
</style>