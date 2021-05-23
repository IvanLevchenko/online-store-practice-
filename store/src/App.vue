<template>
  <div id="app">
    <HeaderComponent />
    <router-view/>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent'

export default {
  components: {
    HeaderComponent
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Goblin+One&display=swap');
@import './assets/variables.scss';

* {
  margin: 0;
  padding: 0;
}

#app {
  
}

</style>
