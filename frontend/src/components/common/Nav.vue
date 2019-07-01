<template>
  <div id="navbarall">
   <nav class="navbar">
    <div id="nav">
      <div class="navbar-header">
      </div>
        <ul class="nav" style="margin-right: 0px">
          <li class="active"><router-link to="/">Home</router-link></li>
          <li><router-link to="/loginform">로그인</router-link></li>
          <li><router-link to="/joinform">회원가입</router-link></li>
          <li><router-link to="/memberlist">회원목록</router-link></li>
        </ul>
    </div>
  </nav>
</div> 
</template>
<script>
export default {
     /* eslint-disable */
}
</script>
<style scoped>
#navbarall{
  margin-top: 20px;
  margin-right: 25px;
  margin-left: auto;
  text-align: right;
  position: relative;
  
}
#nav{
  display:inline-block;
  margin-left: auto;
  text-align: right;
  width: 140px;
  height: auto;
  font-size: 17px;
  border-radius: 10%;
}

#nav li{
  margin-top: 4px;
  background-color: lightgreen;
  border-radius: 30px;
  box-shadow: 1px 2px #888888;
}
#nav li a{
  color: white;
  text-align: center;
  border-radius: 30px;
  font-size: 20px;
  font-family: 'Do Hyeon', sans-serif;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
}
</style>