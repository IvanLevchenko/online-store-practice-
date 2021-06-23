<template>
  <div class="smartphone" 
    @click="showSmartphoneModal" 
    v-if="(this.$store.state.filtered.models.includes(man) 
    || !(this.$store.state.filtered.models.length))
    && (isGreaterPrice || this.$store.state.filtered.price == 0)
    && (this.$store.state.filtered.size.includes(size) 
    || !this.$store.state.filtered.size.length)
    && (this.$store.state.filtered.memory.includes(memory)
    || !this.$store.state.filtered.memory.length)"
    >
    <div class="smartphone__img"> 
      <img :src="img" alt="">
    </div>
    <div class="smartphone__text">{{ text }}</div>
    <div class="smartphone__footer">
      <span class="smartphone__price">{{ price }}₴</span>
      <span class="smartphone__basket" @click="addToBasket"></span>
    </div>
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
    memory: String,
    manufacturer: String,
    id: Number
  },
  computed: {
    isGreaterPrice() {
      return +this.$store.state.filtered.price >= +this.price.split(' ').join('')
    },
    isNeededSize() {
      return this.$store.state.filtered.size
    },
  },
  methods: {
    addToBasket() {
      let data = {
        text: this.text,
        price: this.price,
        img: this.img
      }
      !this.$store.state.basket.includes(data)
      ? this.$store.state.basket.push(data)
      : null
      this.$store.state.basket.map((e, i)=> e.index = i)
    },
    showSmartphoneModal(e) {
      if(e.target.className !== 'smartphone__basket') {
        let data = {
          id: this.id,
          img: this.img,
          info: this.text,
          price: this.price,
          size: this.size,
          memory: this.memory,
          manufacturer: this.manufacturer,
          show: true
        }
        this.$emit('show-modal', data)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.smartphone {
  width: 250px;
  height: 370px;
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
      width: 75%;
      margin-top: 10px;
    }
  }

  .smartphone__text {
    width: 90%;
    text-align: center;
    margin-top: 5px;
  }
  
  .smartphone__footer {
    display: flex;
    align-self: flex-end;
    width: 100%;
    justify-content: space-between;
    margin-top: 10px;

    .smartphone__price {
      padding: 5px;
      background: rgb(114, 228, 114);
      color: white;
      border-radius: 5px;
      position: relative;
      margin-left: 15px;
    }

    .smartphone__basket {
      width: 25px;
      height: 25px;
      background-image: url(../assets/basket.svg);
      background-repeat: no-repeat;
      position: relative;
      margin-right: 15px;

      &:hover {
        background-position: 0 -1px;
      }
    }
  }
}
</style>