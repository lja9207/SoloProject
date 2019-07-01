<template>

<div>
  <p id="title">LOGIN</p>
  <Nav> </Nav>
  <div id="bg">
    <form class="all">
      <div class="form-group">
        <label for="id">ID</label>
        <br>
        <input type="text" class="" id="id" placeholder="">
        <p class="help-block">아이디를 입력하세요</p>
      </div>
      <div class="form-group">
        <label for="pwd">Password</label>
        <input type="password" class="" id="pwd" placeholder="">
        <p class="help-block">비밀번호를 입력하세요</p>
      </div>
      <div class="checkbox">
        <label><input type="checkbox">아이디 기억하기</label>
      </div>
      <button @click="get" class="btn btn-default">로그인</button>
    </form>
  </div>
</div>
</template>

<script>
import Nav from '@/components/common/Nav.vue'
import Footer from'@/components/common/Footer.vue'

export default 
{
  data()
  {
    return 
    {
      context: 'http://localhost:8081'
    }
  },
  components: 
  {
    Nav,
    Footer
  },
  methods:
  {
      get()
      {
         axios.get(`${this.context}/customers/count`)
         .then(res=>
         {
             alert(`SUCCESS : ${res.data}`)
         })
         .catch(e=>
         {
             alert('ERROR')
         })
      },
      post()
      {
        axios.post('/customers')
        .then(d=>
        {
          alert(`POST 연동성공: ${d.data.result}`)
        })
      },
      put()
      {
        axios.put('/customers/id')
        .then(d=>
        {
          alert(`PUT 연동성공: ${d.data.result}`)
        })
      },
      deleteById()
      {
        axios.delete('/customers/id')
        .then(d=>
        {
          alert(`DEL 연동성공: ${d.data.result}`)
        })
      }
  }
}
</script>

<style scoped>
#title{
  position: absolute;
  width: 100%;
  height: 100px;
  font-size: 50px;
  font-family: 'Do Hyeon', sans-serif;
  text-align: center;
  margin-top: 70px;
  letter-spacing: 5px;
  /* margin : 50px auto; */
}
#bg{
  position: absolute;
  width: 100%;
  height: 700px;
  margin-top: -180px;
  background-image: url('../../assets/pic2.jpg');
  z-index: -1;
}
.all{
  width: 300px;
  height: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  padding: 40px 52px;
  font-family:'Do Hyeon', sans-serif;
  background-color: lightpink;
  border-radius: 5%;
  font-size: 18px;
}
.form-group{
  margin-left: auto;
  margin-right: auto;
  
}
.checkbox{
  margin-top: 30px;

}
.btn{
  margin-top: 30px;
  margin-left : 33%;
  width: 80px;
  height: 40px;
  font-size: 17px;
  
}
</style>