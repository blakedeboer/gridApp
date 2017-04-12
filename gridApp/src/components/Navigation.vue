<template>
  <div class="navigation">
    <h1>{{ msg }}</h1>
    <router-link :to="{ name: 'dashboardA', params: { date: 235 }}">Dashboard A</router-link>
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
      selectedDate: '',
      options: [
        { text: 'April 10, 2017', value: '04102017'},
        { text: 'April 11, 2017', value: '04112017'}, 
        { text: 'April 12, 2017', value: '04122017'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

n #7-Tue 7-10pm, 5/16 to 6/13