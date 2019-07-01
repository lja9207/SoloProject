<template>
<div>
    <p id="title">REGISTER</p>
    <Nav></Nav>
    <div id="bg2"></div>
    <div id="bg"></div>
        <form class="form-horizontal" action='' method="POST">
            <fieldset>
                <div class="control-group">
                    <!-- ID -->
                    <label class="control-label"  for="id">ID</label>
                    <div class="controls">
                        <input type="text" id="id" name="id" placeholder="" class="input-xlarge">
                        <p class="help-block">5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만<br> 사용 가능합니다</p>
                    </div>
                </div>

                 <div class="control-group">
                <!-- Password-->
                    <label class="control-label" for="password">Password</label>
                <div class="controls">
                        <input type="password" id="password" name="password" placeholder="" class="input-xlarge">
                        <p class="help-block">비밀번호는 최소 4자리 이상 입력하세요.</p>
                    </div>
                </div>
                
                <div class="control-group">
                    <!-- Password -->
                    <label class="control-label"  for="password_confirm">Password (Confirm)</label>
                    <div class="controls">
                        <input type="password" id="password_confirm" name="password_confirm" placeholder="" class="input-xlarge">
                        <p class="help-block">비밀번호를 확인해주세요.</p>
                    </div>
                </div>
                
                <div class="control-group">
                    <!-- NAME -->
                    <label class="control-label"  for="name">NAME</label>
                    <div class="controls">
                        <input type="text" id="name" name="name" placeholder="" class="input-xlarge">
                        <p class="help-block">이름을 입력하세요.</p>
                    </div>
                </div>

                <div class="control-group">
                    <!-- E-mail -->
                    <label class="control-label" for="email">E-mail</label>
                    <div class="controls">
                        <input type="text" id="email" name="email" placeholder="" class="input-xlarge">
                        <p class="help-block">이메일을 입력하세요.</p>
                    </div>
                </div>

                <div class="control-group">
                    <!-- PHONE -->
                    <label class="control-label" for="phone">PHONE</label>
                    <div class="controls">
                        <input type="text" id="phone" name="phone" placeholder="" class="input-xlarge">
                        <p class="help-block">'-'를 제외하고 연락처를 입력하세요.</p>
                    </div>
                </div>
            
               <div class="control-group">
                    <!-- ADDRESS -->
                    <label class="control-label" for="address">ADDRESS</label>
                    <div class="controls">
                        <input type="text" id="address" name="address" placeholder="" class="input-xlarge">
                        <p class="help-block">주소를 입력하세요.</p>
                    </div>
                </div>
            
                <div class="control-group">
                <!-- Button -->
                    <div class="controls">
                        <button class="btn btn-success">회원가입</button>
                    </div>
                </div>
            </fieldset>
        </form>
    </div>
</template>
<script>
import Nav from '@/components/common/Nav.vue'
import Footer from'@/components/common/Footer.vue'
export default {
    components:{
        Nav,Footer
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
  margin-left : auto;
  margin-right: auto;
  letter-spacing: 5px;
  /* margin : 50px auto; */
}
.form-horizontal{
  position: absolute;
  width: 420px;
  height: 850px;
  margin-left: 36%;
  margin-right: auto;
  margin-top: -80px;
  margin-bottom: 100px;
  padding: 40px 52px;
  font-family:'Do Hyeon', sans-serif;
  background-color: lightskyblue;
  border-radius: 5%;
  font-size: 16px;
}
#bg{
  position: absolute;
  width: 500px;
  height: 500px;
  margin-left: 1%;
  margin-top : 150px;
  background-image: url('../../assets/pic3.png');
  background-size: cover;
  z-index: -1; 
}
#bg2{
    position: absolute;
    width: 400px;
    height: 400px;
    
    margin-left: 70%;
    margin-top: -300px;
    background-image: url('../../assets/pic3.png');
    background-size: cover;
    z-index: -1;
}
.btn{
  margin-top: 40px;
  margin-left : 30%;
  width: 120px;
  height: 50px;
  font-size: 20px;
  letter-spacing: 2px;
  font-weight: lighter;

}

</style>