<template>
  <span v-bold="'bold'">Ignore the screen content. Look at the web console to verify the global plugin is working</span>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  created() {
    // Call global method sayHello
    this.$sayHello();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
