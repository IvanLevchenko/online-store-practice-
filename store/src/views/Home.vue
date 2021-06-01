<template>
  <div class="home">
    <div class="home__content">
      <HomeComponent @click.native="clickedPage" v-for="product of getHomeProducts" :img="product.img" :title="product.title" :key="product.id"/>
    </div>
  </div>
</template>

<script>
import HomeComponent from '../components/HomeComponent'

export default {
  name: 'Home',
  components: {
    HomeComponent,
  },
  computed: {
    getHomeProducts() {
      return this.$store.getters.getStateHomePageProducts
    }
  },
  methods: {
    clickedPage(e) {
      this.$store.state.filter = e.target.parentNode.className.split(' ')[1]
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Goblin+One&display=swap');
@import '../assets/variables.scss';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.home__content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

</style>
