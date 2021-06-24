<template>
  <div class="computer-component" 
    @click="showComputerModal" 
    v-if="(this.$store.state.filtered.models.includes(model.split(' ')[0])
    || !this.$store.state.filtered.models.length)
    && (isGreaterPrice || this.$store.state.filtered.price == 0)
    && (this.$store.state.filtered.ram.includes(`${ram}`)
    || !this.$store.state.filtered.ram.length)
    && (this.$store.state.filtered.videoCards.includes(videoCard)
    || !this.$store.state.filtered.videoCards.length)
    && (this.$store.state.filtered.cpu.includes(cpu.split(' ')[0])
    || !this.$store.state.filtered.cpu.length
    && (this.$store.state.filtered.country.includes(country)
    || !this.$store.state.filtered.country.length)
    && (this.$store.state.filtered.type.includes(type)
    || !this.$store.state.filtered.type.length))
    "
  >
    <div class="computer__img">
      <img :src="img" alt="">  
    </div>  
    <div class="computer__model">{{ model }}</div>   
    <div class="computer__footer">
      <span class="computer__price">{{ price }}₴</span>
      <span class="computer__basket" @click="addToBasket"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    price: String,
    img: String,
    ram: Number,
    model: String,
    videoCard: String,
    type: String,
    country: String,
    cpu: String
  },
  computed :{
    isGreaterPrice() {
      return +this.$store.state.filtered.price >= +this.price.split(' ').join('')
    }
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
    showComputerModal(e) {
      if(e.target.className !== 'computer__basket') {
        let data = {
          id: this.id,
          img: this.img,
          info: this.model,
          price: this.price,
          videoCard: this.videoCard,
          cpu: this.cpu,
          type: this.type,
          ram: this.ram,
          country: this.country,
          show: true
        }
        this.$emit('show-modal', data)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.computer-component {
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

  .computer__img {
    position: relative;
    display: flex;
    justify-content: center;

    img {
      height: 195px;
      margin-top: 10px;
    }
  }

  .computer__model {
    width: 90%;
    text-align: center;
    margin-top: 5px;
    position: absolute;
    bottom: 100px;
  }
  
  .computer__footer {
    display: flex;
    align-self: flex-end;
    width: 100%;
    justify-content: space-between;
    margin-top: 10px;
    position: absolute;
    bottom: 20px;

    .computer__price {
      padding: 5px;
      background: rgb(114, 228, 114);
      color: white;
      border-radius: 5px;
      position: relative;
      margin-left: 15px;
    }

    .computer__basket {
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