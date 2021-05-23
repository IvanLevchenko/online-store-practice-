<template>
  <header class="home__header">
      <h2>store</h2>
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
  padding: 0 20px 0 20px;
  font-family: $font;

  .cart {
    width: 20px;
    height: 20px;
  }
}
</style>