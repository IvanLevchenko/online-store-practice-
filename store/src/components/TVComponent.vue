<template>
  <div class="tv-component"
    @click="showModal"
    v-if="(this.$store.state.filtered.models.includes(manufacturer) 
    || !this.$store.state.filtered.models.length)
    && (isGreaterPrice || this.$store.state.filtered.price == 0)
    && (this.$store.state.filtered.diagonals.includes(screenDiagonal) 
    || !this.$store.state.filtered.diagonals.length)
    && (this.$store.state.filtered.resolution.includes(resolution)
    || !this.$store.state.filtered.resolution.length)"
  >
    <div class="tv__img">
      <img :src="img" alt="">  
    </div>  
    <div class="tv__model">{{ model }}</div>   
    <div class="tv__footer">
      <span class="tv__price">{{ price }}₴</span>
      <span class="tv__basket" @click="addToBasket"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    screenDiagonal: String,
    manufacturer: String,
    price: String,
    model: String,
    img: String,
    resolution: String
  },
  methods: {
    addToBasket() {
      let data = {
        text: this.model,
        price: this.price,
        img: this.img
      }
      !this.$store.state.basket.includes(data)
      ? this.$store.state.basket.push(data)
      : null
      this.$store.state.basket.map((e, i)=> e.index = i)
    },
    showModal(e) {
      if(e.target.className !== 'tv__basket') {
        let data = {
          id: this.id,
          img: this.img,
          model: this.model,
          price: this.price,
          manufacturer: this.manufacturer,
          resolution: this.resolution,
          show: true
        }
        this.$emit('show-modal', data)
      }       
    }
  },
  computed: {
    isGreaterPrice() {
      return +this.$store.state.filtered.price >= +this.price.split(' ').join('')
    }
  }
}
</script>

<style lang="scss" scoped>

.tv-component {
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

  .tv__img {
    position: relative;
    display: flex;
    justify-content: center;

    img {
      width: 90%;
      margin-top: 10px;
    }
  }
  .tv__model {
    width: 90%;
    text-align: center;
    margin-top: 10px;
    font-size: larger;
  }
  .tv__footer {
    display: flex;
    align-self: flex-end;
    width: 100%;
    justify-content: space-between;
    margin-top: 20px;    

    .tv__price {
      padding: 5px;
      background: rgb(114, 228, 114);
      color: white;
      border-radius: 5px;
      position: relative;
      margin-left: 15px;
    }
    .tv__basket {
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