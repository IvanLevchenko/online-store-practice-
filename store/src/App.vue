<template>
  <div id="app">
    <HeaderComponent @open-basket="openBasket"/>
    <div class="basket-wrapper" @click="closeBasket">
      <div class="basket">
        <h2 v-if="!this.$store.state.basket.length">Nothing here</h2>
        <div class="basket__products" v-if="this.$store.state.basket.length">
          <h2>Your products</h2>
          <div class="basket__item" v-for="product of getBasketProducts" :key="product.index">
            <img :src="product.img" alt="">
            <div class="basket__item-text">
              {{ product.text }} <br>
              <br>
              <span class="basket__item-price">
                {{ product.price }}
              </span>
            </div>
            <span class="delete-item" :id="product.index" @click="deleteBasketItem">✖</span>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent'
// import store from './store/index'
import router from './router/index'

export default {
  components: {
    HeaderComponent
  },
  methods: {
    openBasket() {
      let basket = document.querySelector('.basket')
      let wrapper = document.querySelector('.basket-wrapper')

      wrapper.style.visibility !== 'visible'
      ? (wrapper.style.visibility = 'visible', wrapper.style.backgroundColor = 'rgba(0, 0, 0, 0.5)')
      : (wrapper.style.visibility = 'hidden', wrapper.style.backgroundColor = 'rgba(0, 0, 0, 0)')

      basket.style.right == '' || basket.style.right == '-402px'
      ? basket.style.right = '0px'
      : basket.style.right = '-402px'

    },
    closeBasket(e) {
      let basket = document.querySelector('.basket')
      let wrapper = document.querySelector('.basket-wrapper')

      e.target.className == 'basket-wrapper' 
      ? (wrapper.style.visibility = 'hidden', 
      wrapper.style.backgroundColor = 'rgba(0, 0, 0, 0)',
      basket.style.right = '-402px')
      : null

    },
    deleteBasketItem(e) {
      this.$store.state.basket = this.$store.state.basket.slice(0, e.target.id)
    }
  },
  computed: {
    getBasketProducts() {
      return this.$store.state.basket
    }
  },
  watch: {
    '$route': () => {
      // for(let [key, value] of Object.entries(store.state.filtered)) {
      //   value
      //   if(typeof key == 'number') {
      //     value = 0
      //   } else {
      //     value = [] 
      //   }
      // }
      console.log(router)
      router.go(0)
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Goblin+One&display=swap');
@import './assets/variables.scss';

* {
  margin: 0;
  padding: 0;
}

html {
  overflow: hidden;
}

#app {
  .basket-wrapper {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    visibility: hidden;
    position: absolute;
    z-index: 50;
    transition: 0.7s; 

    .basket {
      width: 400px;
      height: 100vh;
      background: rgb(248, 248, 248);
      position: absolute;
      z-index: 100;
      right: -402px;
      transition: all .7s cubic-bezier(.55,.08,.06,.97);

      h2 {
        text-align: center;
        margin: 10px;
      }

      .basket__products {
        margin: 5px;

        .basket__item {
          height: 100px;
          width: 100%;
          display: flex;
          margin-bottom: 5px;
          background: rgb(255, 255, 255);
          align-items: center;
          justify-content: left;
          position: relative;

          .basket__item-text {
            align-items: flex-start;
            width: 60%;
            height: 80%;
            margin-left: 5px;

            .basket__item-price {
              padding: 5px;
              background: rgb(114, 228, 114);
              color: white;
              border-radius: 5px;
            }
          }

          img {
            margin: 5px;
            height: 90%;
          }

          .delete-item {
            cursor: pointer;
            position: absolute;
            right: 0;
            top: 0;
            margin: 10px;
          }
        }
      }
    } 
  }
}

</style>
