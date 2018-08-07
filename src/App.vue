<template>
  <div id="app">
    <div class="menu">
      <a href="/">
        <i class="iconfont pull-right">&#xe60a;</i>
      </a>
    </div>
    <div class="container col-md-8 my-container">
        <nav-bar></nav-bar>
        <router-view></router-view>
    </div>
    <bg></bg>
  </div>
</template>

<script>
import Bg from "./components/Bg";
import NavBar from "./components/NavBar";
export default {
  name: 'App',
  components: {
    Bg,
    NavBar
  }
}
</script>

<style  lang="scss" scoped>
@import url("./assets/css/bootstrap.min.css");
@import url("./assets/css/common.css");
@import url("http://cdn.webfont.youziku.com/webfonts/nomal/91608/46931/58148752f629d8107cfe8864.css");

.menu {
    overflow: hidden;
    padding: 15px 0;
    i {
        color: #fff;
        font-size: 30px;
        margin-right: 5%;
    }
}


.my-container {
  float: none;
  margin-bottom: 50px;
  border-radius: 10px;
  background-color:  rgba(0, 0, 0, 0.6);

}


</style>
