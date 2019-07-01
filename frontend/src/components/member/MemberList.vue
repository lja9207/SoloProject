<template>
<div id="bg">
    <div id="all">
    <Nav></Nav>
    
    <p id="title">MEMBER</p>
    
        <table class=" w3-bordered ">
        <tbody>
            <tr>
                <th>ID</th>
                <th>회원이름</th>
                <th>EMAIL</th>
                <th>연락처</th>
                <th>주소</th>
        </tr>
        </tbody>
        <tbody>
        <tr>
            <td>abc12</td>
            <td>한재현</td>
            <td>gkswogus@naver.com</td>
            <td>01011112222</td>
            <td>a시 a구 a동 a빌라 101호</td>
        </tr>
        <tr>
            <td>aaa13</td>
            <td>이혜원</td>
            <td>dlgPdnjs@naver.com</td>
            <td>01022223333</td>
            <td>b시 b구 b동 b아파트 202호</td>
        </tr>
        <tr>
            <td>bbbb24</td>
            <td>나혜진</td>
            <td>skgPwls@naver.com</td>
            <td>01033334444</td>
            <td>c시 c구 c동 c아파트 303호</td>
        </tr>
        <tr>
            <td>ccc335</td>
            <td>한수민</td>
            <td>gkstnals@naver.com</td>
            <td>01044445555</td>
            <td>d시 d구 d동 d아파트 404호</td>
        </tr>
        <tr>
            <td>ddd4465</td>
            <td>최승원</td>
            <td>chltmddnjs@naver.com</td>
            <td>01055556666</td>
            <td>e시 e구 e동 e빌라 505호</td>
        </tr>
        <tr>
            <td>ddd4465</td>
            <td>장현준</td>
            <td>wkdguswns@naver.com</td>
            <td>01066667777</td>
            <td>f시 f구 f동 f빌라 606호</td>
        </tr>
        </tbody>
        </table>
    
    </div>
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
#all{
    font-family:'Do Hyeon', sans-serif;
    width: 100%;
    height: 1000px;
}
#title
{
  position: absolute;
  width: 100%;
  height: auto;
  color: white;
  font-size: 50px;
  font-family: 'Do Hyeon', sans-serif;
  text-align: center;
  margin-top: -150px;
  letter-spacing: 5px;
  /* margin : 50px auto; */
}
#bg{
  position: absolute;
  width: 100%;
  height: max-content;
  background-image: url('../../assets/pic4.jpg');
  background-size: cover;
  z-index: -1; 
}
table{
    position: absolute;
    color: white;
    width: 100%;
}
th{
    background-color:lightgray;
    height: 50px;
    text-align: center;
    font-size: 23px;
    font-weight: lighter;
}
tr{
    height: 50px;
    text-align: center;
    font-size: 20px;
    font-weight: lighter;
    text-shadow: -1px 0 black, 0 -1px black, 1px 0 black, 0 1px black;
  -moz-text-shadow: 1px 0 black, 0 -1px black, 1px 0 black, 0 -1px black;
  -webkit-text-shadow: 1px 0 black, 0 -1px black, 1px 0 black, 0 1px black;
  letter-spacing: 2px;
}
</style>
