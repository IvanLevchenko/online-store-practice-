<template>
  <div class="filter">
    <div class="filter__wrapper" v-if="defineFilteredItems == 'Smartphones'">
      <div class="filter__by-model">
        <h4>Model:</h4>
        <p class="filter__by-model_model"
        v-for="model of getAllManufacturers"
        :key="model.id"
        > {{ model }} <input type="checkbox" @click="filterByModel" :id="'filter-by-model-chckbx_' + model"></p>
      </div>
      <div class="filter__by-price">
        <br>
        <h4>Price <i>(₴)</i></h4>
        <input type="range" @input="updatePrice" class="filter__range" :step="getPrices[1] / 15" :min="getPrices[0]" :max="getPrices[1]">
        <input type="text" class="price-window" @keyup.enter="inputPrice" :value="price()">

      </div>
      <div class="filter__by-display-size">
        <br>
        <h4>Display size:</h4>
        <div class="filter__sizes">
          <ul>
            <li class="filter__sizes-size" v-for="size of getDisplaySizes" :key="size">
              {{ size }}
              <input type="checkbox" @click="filterByDisplaySize" :id="'filter-by-size-chckbx_' + size">
            </li>
          </ul>
        </div>
      </div>
      <div class="filter__by-memory">
        <br>
        <h4>Memory:</h4>
        <div class="filter__memory">
          <ul>
            <li class="filter__memory-memory"
            v-for="memory of getMemory" 
            :key="memory">
              {{ memory }} 
              <input type="checkbox" @click="filterByMemory" :id="'filter-by-memory-chckbx_' + memory">
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="filter__wrapper" v-if="defineFilteredItems == 'TV'">
      <div class="filter__by-model">
        <div class="filter__by-model_model"></div>
      </div>
    </div> 
    <div class="filter__wrapper" v-if="defineFilteredItems == 'Computers'">
      <div class="filter__by-model">
        <div class="filter__by-model_model"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    defineFilteredItems() {
      return this.$store.state.filter
    },
    getAllManufacturers() {
      return this.$store.getters.getAllManufacturers
    },
    getPrices() {
      return this.$store.getters.getMinAndMaxPrice
    },
    getDisplaySizes() {
      return this.$store.getters.getDisplaySizes
    },
    getMemory() {
      return this.$store.getters.getMemory
    }
  },
  methods: {
    filterByModel(e) {
      this.$store.dispatch('filterByModels', e.target.id.split('_')[1])
    },
    filterByDisplaySize(e) {
      this.$store.dispatch('filterByDisplaySize', e.target.id.split('_')[1])
    },
    filterByMemory(e) {
      this.$store.dispatch('filterByMemory', e.target.id.split('_')[1])
    },
    price() {
      return setTimeout(() => {
        document.querySelector('.filter__range').value
      }, 0)
    },
    updatePrice() {
      document.querySelector('.price-window').value = (+(document.querySelector('.filter__range').value)).toFixed()
      this.$store.state.filtered.price = +(document.querySelector('.price-window').value)
    },
    inputPrice() {
      this.$store.state.filtered.price = document.querySelector('.price-window').value
    },

  },
  async mounted() {
    await this.$store.dispatch('fillManufacturersAction')
  }
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.filter {
  margin-top: 15px;
  width: 300px;
  min-height: 600px;
  background: rgb(243, 243, 243);
  position: relative;
  border: 1px solid rgb(219, 219, 219);
  display: flex;
  justify-content: center;

  .filter__wrapper {
    width: 90%;
    height: 90%;
    margin-top: 10px;
    margin-bottom: 10px;

    .filter__by-model {

      .filter__by-model_model {
        margin-top: 5px;
        padding-left: 5px;
      }
    }
    
    .filter__by-price {
      position: relative;
      width: 70%;

      .price-window {
        background: white;
        width: 60px;
        height: 20px;
        position: absolute;
        right: -20px;
        top: 35px;
        border: 1px solid rgb(216, 215, 215);
        text-indent: 5px;
        outline: none;

      }
    }

    .filter__by-display-size {
      position: relative;
      width: 70%;

      .filter__sizes {

        .filter__sizes-size {
          width: 100%;
          font-size: 15px;
          margin: 5px;
          list-style-type: none;
        }
      }
    }

    .filter__by-memory {

      .filter__memory {

        .filter__memory-memory {
          margin: 5px;
          list-style-type: none;
        }
      }
    }
  }
}
</style>