<template>
  <div class="modal__wrapper" @click="closeModal">
    <div class="modal">
      <div class="modal__img">
        <img :src="img" alt="">
      </div>
      <div class="modal__info">
        <h2>{{ info }}</h2>
        <ul>
          <li>Manufacturer {{ manufacturer }}</li>
          <li>Memory: {{ memory }}gb</li>
          <li>Display size: {{ size }}</li>
        </ul>
      </div>
      <div class="modal__spans">
          <span class="price">{{ price }} ₴</span>
          <span class="basket" @click="addToBasket"></span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: String,
    price: String,
    img: String,
    size: String,
    memory: String,
    manufacturer: String
  },
  methods: {
    closeModal(e) {
      e.target.className == 'modal__wrapper'
      ? this.$emit('close-modal')
      : null
    },
    addToBasket() {
      let data = {
        text: this.info,
        price: this.price,
        img: this.img
      }
      !this.$store.state.basket.includes(data)
      ? this.$store.state.basket.push(data)
      : null
      this.$store.state.basket.map((e, i)=> e.index = i)
    }
  },
}
</script>

<style lang="scss" scoped>
.modal__wrapper {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  position: absolute;
  z-index: 101;
  justify-content: center;
  align-items: center ;

  .modal {
    min-width: 1000px;
    height: 550px;
    background: white;
    display: flex;
    position: absolute;
    z-index: 105;

    .modal__img {
      margin: 15px;
      position: relative;

      img {
        width: 340px;
      }
    }

    .modal__info {
      margin: 15px;
      font-size: 20px;
      position: relative;

      li {
        list-style-type: none;
        margin: 15px;
      }
    }

    .modal__spans {
      position: relative;
      padding: 15px;
      align-items: center;

      .basket {
        background: none;
        background-image: url(../assets/basket.svg);
        background-repeat: no-repeat;
        width: 20px;
        height: 20px;
        cursor: pointer;
      }

      span {
        padding: 10px;
        margin: 15px;
        background: rgb(93, 226, 93);
        color: white;
        border-radius: 5px;
        position: relative;
      }
     }
  }
}
</style>