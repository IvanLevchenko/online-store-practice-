<template>
  <header class="home__header">
      <router-link to="/" tag="h2" >store</router-link>
      <div class="cart">
        <img src="../assets/basket.svg" alt="">
      </div>
  </header>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Goblin+One&display=swap');
@import '../assets/variables.scss';

* {
  margin: 0;
  padding: 0;
}

.home__header {
  width: 100%;
  background: blue;
  height: 40px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: $font;

  h2 {
    margin-left: 20px;
    cursor: pointer;
  }

  .cart {
    width: 20px;
    height: 20px;
    margin-right: 20px;
  }
}
</style>