<template>
  <div id="navigation">
      <router-link :to="{ name: 'dashboardA', params: { date: selectedDate }}">Dashboard A</router-link>
      <router-link to="/dashboardB">Dashboard B</router-link>   
      <select v-model="selectedDate">
        <option v-for="option in options" v-bind:value="option.value">{{ option. text }}</option>
      </select> 
  </div>
</template>

<script>
export default {
  name: 'navigation',
  data () {
    return {
      msg: 'Welcome to the Navigation',
      selectedDate: '1',
      options: [
        { text: 'April 10, 2017', value: '1'},
        { text: 'April 11, 2017', value: '2'}, 
        { text: 'April 12, 2017', value: '3'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#navigation {
  padding-bottom: 30px;
  border-bottom: 1px solid black;
}

a {
  color: #42b983;
  padding: 5px;
  border: 1px solid transparent;
  border-radius: 5px;
  text-decoration: none;
}

.router-link-active {
  border-color: #42b983;
}
</style>

