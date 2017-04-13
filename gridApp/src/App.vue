<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

if (windowmanager.runtime.isMain) {
  let childWindow = new windowmanager.Window({
    url: "/dashboardA",
    width: 500,
    height: 500,
    frame: false
  });

  childWindow.onReady(() => {
      childWindow.focus(); // Set focus to childWindow.
  });


} else {
  document.body.style.border = "3px solid red";
}


export default {
  name: 'app',
  components: { Navigation }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
