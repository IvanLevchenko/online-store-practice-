import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homePageProducts: [
      { id: 1, title: 'Smartphones', img: 'https://content.rozetka.com.ua/goods/images/big/30873089.jpg'},
      { id: 2, title: 'TV', img: 'https://content1.rozetka.com.ua/goods/images/big/174797154.jpg'},
      { id: 3, title: 'Computers', img: 'https://content2.rozetka.com.ua/goods/images/big/141686017.jpg'},
    ],
    smartphonesData: [
      { id: 1, model: 'Apple iPhone 12 Pro Max 128GB Gold', 
      price: '39 499', manufacturer: 'Apple', img: 'https://content.rozetka.com.ua/goods/images/big/30873089.jpg',
      info: `Screen (6.7 ", OLED (Super Retina XDR), 2778x1284) / Apple A14 Bionic / triple main camera: 12 MP + 12 MP + 12 MP, 
      front camera: 12 MP / 128 GB of internal memory / 3G / LTE / 5G / GPS / Nano-SIM / iOS 14`},
      { id: 2, model: 'Apple iPhone Xr 128GB White', 
      price: '20 199', manufacturer: 'Apple', img: 'https://content2.rozetka.com.ua/goods/images/big/37427549.jpg',
      info: `Screen (6.1 ", IPS, 1792x828) / Apple A12 Bionic / main camera: 12 MP, front camera: 7 MP / RAM 3 GB / 
      128 GB of internal memory / 3G / LTE / GPS / Nano-SIM, eSIM / iOS 12`},
      { id: 3, model: 'Apple iPhone 12 mini 256GB Purple', 
      price: '25 299', manufacturer: 'Apple', img: 'https://content2.rozetka.com.ua/goods/images/big/173869013.jpg',
      info: `Screen (5.4 ", OLED (Super Retina XDR), 2340x1080) / Apple A14 Bionic / dual main camera: 12 MP + 12 MP, 
      front camera: 12 MP / 256 GB of internal memory / 3G / LTE / 5G / GPS / Nano- SIM, eSIM / iOS 14`},
      { id: 4, model: 'Samsung Galaxy S21 8/128GB Phantom White', 
      price: '26 999', manufacturer: 'Samsung', img: 'https://content2.rozetka.com.ua/goods/images/big/45428477.jpg',
      info: `Screen (6.2 ", Dynamic AMOLED 2X, 2400x1080) / Samsung Exynos 2100 (1 x 2.9 GHz + 3 x 2.8 GHz + 4 x 2.2 GHz) 
      / triple main camera: 64 MP + 12 MP + 12 MP, front 10 MP / RAM 8 GB / 128 GB of internal memory / 3G / LTE / 5G / GPS / 
      support for 2 SIM-cards (Nano-SIM) / Android 11.0 / 4000 mAh`},
      { id: 5, model: 'Samsung Galaxy S21 Ultra 12/256GB Phantom Silver', 
      price: '39 999', manufacturer: 'Samsung', img: 'https://content.rozetka.com.ua/goods/images/big/163104657.jpg',
      info: `Screen (6.8 ", Dynamic AMOLED 2X, 3200x1440) / Samsung Exynos 2100 (1 x 2.9 GHz + 3 x 2.8 GHz + 4 x 2.2 GHz) / 
      main quad-camera: 108 MP + 12 MP + 10 MP + 10 MP, front : 40 MP / RAM 12 GB / 256 GB of internal memory / 3G / LTE / 5G /
       GPS / support for 2 SIM-cards (Nano-SIM) / Android 11.0 / 5000 mAh`},
      { id: 6, model: 'OnePlus 8 8/128GB Interstellar Glow', 
      price: '16 699', manufacturer: 'OnePlus', img: 'https://content2.rozetka.com.ua/goods/images/big/45891838.jpg',
      info: `Screen (6.55 ", Fluid AMOLED, 2400x1080) / Qualcomm Snapdragon 865 (2.84 GHz) / triple main camera: 48 MP + 16 MP + 2 MP, 
      front 16 MP / RAM 8 GB / 128 GB of internal memory / 3G / LTE / 5G / GPS / support for 2x SIM-cards (Nano-SIM) / Android 10/4300 mAh`},
      { id: 7, model: 'Xiaomi Mi 11 Lite 6/64GB Bubblegum Blue', 
      price: '7 999', manufacturer: 'Xiaomi', img: 'https://i.citrus.ua/imgcache/size_500/uploads/shop/6/5/65d21a5cf0d92c79046e36ae0c60b2a1.jpg',
      info: `Screen (6.55 ", AMOLED, 2400x1080) / Qualcomm Snapdragon 732G (2.3 GHz) / triple main camera: 64 MP + 8 MP + 5 MP, front 16 MP / 
      RAM 6 GB / 64 GB of internal memory / 3G / LTE / GPS / support for 2 SIM cards (Nano-SIM) / Android 11/4250 mAh`}, 
    ],
    manufacturers: [],
    filter: ''
  },
  mutations: {
    mutateManufacturers(state, data) {
      state.manufacturers = data
    }
  },
  actions: {
    async fillManufacturersAction(ctx) {
      let data = []
      this.state.smartphonesData.forEach(i => !data.includes(i.manufacturer) ? data.push(i.manufacturer) : null)
      ctx.commit('mutateManufacturers', data)
    }
  },
  modules: {
  },
  getters: { 
    getStateHomePageProducts(state) {
      return state.homePageProducts
    },
    getAllManufacturers(state) {
      return state.manufacturers
    }
  }
})
