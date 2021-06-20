<template>
  <div class="smartphone" v-if="(this.$store.state.filtered.models.includes(man) 
                                || !(this.$store.state.filtered.models.length))
                                && (isGreaterPrice || this.$store.state.filtered.price == 0)
                                && (this.$store.state.filtered.size.includes(size) 
                                || !this.$store.state.filtered.size.length)
                                && (this.$store.state.filtered.memory.includes(memory)
                                || !this.$store.state.filtered.memory.length)">
    <div class="smartphone__img"> 
      <img :src="img" alt="">
    </div>
    <div class="smartphone__text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    text: String,
    man: String,
    price: String,
    size: String,
    memory: String
  },
  computed: {
    isGreaterPrice() {
      return +this.$store.state.filtered.price >= +this.price.split(' ').join('')
    },
    isNeededSize() {
      return this.$store.state.filtered.size
    }
  }
}
</script>

<style lang="scss" scoped>
.smartphone {
  width: 250px;
  height: 350px;
  border: 1px solid rgb(209, 208, 208);
  margin-left: 15px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;

  .smartphone__img {
    position: relative;
    display: flex;
    justify-content: center;

    img {
      width: 80%;
      margin-top: 10px;
    }
  }

  .smartphone__text {
    width: 90%;
    text-align: center;
    margin-top: 5px;
  }
}
</style>