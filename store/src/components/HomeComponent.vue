<template>
  <div class="component" :class="title">
    <router-link :to="'/' + title" tag="span" class="component__link"></router-link>
    <div class="component__picture">
      <img :src="img" alt="">
    </div>
    <div class="component__title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    img: String
  }
}
</script>

<style lang="scss" scoped>
.component {
  width: 250px;
  height: 350px;
  border: 1px solid rgb(209, 208, 208);
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: space-between;
  cursor: pointer;

  .component__link {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .component__picture {
    display: flex;
    justify-content: center;

    img {
      margin-top: 15px;
      width: 70%;
    }
  }

  .component__title {
    font-size: 20px;
    margin-bottom: 30px;
  }
}
</style>