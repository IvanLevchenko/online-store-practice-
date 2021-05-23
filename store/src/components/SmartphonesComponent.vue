<template>
  <div class="smartphone">
    <div class="smartphone__img">
      <img :src="img" alt="">
    </div>
    <div class="smartphone__text"> {{ text }} </div>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    text: String
  }
}
</script>

<style lang="scss" scoped>
.smartphone {
  width: 250px;
  height: 350px;
  border: 1px solid rgb(209, 208, 208);
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  // justify-content: space-between;
  cursor: pointer;

  .smartphone__img {
    position: relative;
    display: flex;
    justify-content: center;

    img {
      width: 80%;
    }
  }

  .smartphone__text {
    width: 90%;
  }
}
</style>