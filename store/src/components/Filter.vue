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
        <input type="range" @input="updateSmartphonePrice" class="filter__range" :step="getSmartphonePrices[1] / 15" :min="getSmartphonePrices[0]" :max="getSmartphonePrices[1]">
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
        <h4>Model:</h4>
        <p class="filter__by-model_model"
          v-for="model of getTVModels"
          :key="model"
        >
        {{ model }} 
        <input type="checkbox" name="" 
          :id="'filter-by-model-chckbx_' + model"
          @click="filterTVByModel"
        >
        </p>
      </div>
      <div class="filter__by-price">
        <br>
        <h4>Price <i>(₴)</i></h4>
        <input type="range" @input="updateTVPrice" class="filter__range" :step="getTVPrices[1] / 10" :min="getTVPrices[0]" :max="getTVPrices[1]">
        <input type="text" class="price-window" @keyup.enter="inputPrice" :value="price()">
      </div>
      <div class="filter__by-screen-diagonal">
        <h4>Screen diagonal:</h4>
        <p class="filter__by-screen-diagonal_diagonal"
          v-for="diagonal of getTVDiagonals"
          :key="diagonal"
        >
        {{ diagonal }} 
        <input type="checkbox" name="" 
          :id="'filter-by-model-chckbx_' + diagonal"
          @click="filterTVByDiagonal"
        >
        </p>
      </div>
      <div class="filter__by-resolution">
        <h4>Resolution:</h4>
        <p class="filter__by-resolution_resolution"
          v-for="resolution of getTVResolutions"
          :key="resolution"
        >
        {{ resolution }}
        <input type="checkbox" name="" 
          :id="'filter-by-model-chckbx_' + resolution"
          @click="filterTVByResolution"
        >
        </p>
      </div>
    </div> 
    <div class="filter__wrapper" v-if="defineFilteredItems == 'Computers'">
      <div class="filter__by-model">
        <h4>Model:</h4>
        <p class="filter__by-model_model"
          v-for="model of getComputerModels"
          :key="model"
        >
        {{ model }}
        <input type="checkbox" name="" 
        :id="'filter-by-model-chckbx_' + model"
        @click="filterComputersByModel"
        >
        </p>
      </div>
      <div class="filter__by-price">
        <br>
        <h4>Price <i>(₴)</i></h4>
        <input type="range" 
        @input="updateComputersPrice" 
        class="filter__range" 
        :step="getComputerPrices[1] / 10" 
        :min="getComputerPrices[0]" 
        :max="getComputerPrices[1]">
        <input type="text" class="price-window" @keyup.enter="inputPrice" :value="price()">
      </div>
      <div class="filter__by-ram">
        <h4>RAM:</h4>
        <p class="filter__by-ram_ram"
          v-for="ram of getComputersRam"
          :key="ram"
        >
        {{ ram }}
        <input type="checkbox" name="" 
        :id="'filter-by-ram-chckbx_' + ram" 
        @click="filterComputersByRam">
        </p>
      </div>
      <div class="filter__by-videocard">
        <h4>Graphics chipsets:</h4>
        <p class="filter__by-videocard_videocard"
          v-for="videocard of getVideocards"
          :key="videocard"
        >
        {{ videocard }}
        <input type="checkbox" name="" 
        :id="'filter-by-videocard-chckbx_' + videocard"
        @click="filterComputersByVideocard"
        >
        </p>
      </div>
      <div class="filter__by-cpu">
        <h4>CPU developer:</h4>
        <p class="filter__by-cpu_cpu"
          v-for="CPU of getCPUs"
          :key="CPU"
        >
        {{ CPU }}
        <input type="checkbox" name="" 
        :id="'filter-by-cpu-chckbx_' + CPU"
        @click="filterComputersByCPU"
        >
        </p>
      </div>
      <div class="filter__by-country">
        <h4>Country:</h4>
        <p class="filter__by-country_country"
          v-for="country of getCountries"
          :key="country"
        >
        {{ country }}
        <input type="checkbox" name="" 
        :id="'filter-by-cpu-chckbx_' + country"
        @click="filterComputersByCountries"
        >
        </p>
      </div>
      <div class="filter__by-type">
        <h4>Type:</h4>
        <p class="filter__by-type_type"
          v-for="type of getTypes"
          :key="type"
        >
        {{ type }}
        <input type="checkbox" name="" 
        :id="'filter-by-type-chckbx_' + type"
        @click="filterComputersByTypes"
        >
        </p>
      </div>
    </div>
    <p class="clear-filter" @click="clearFilters">Clear filters</p>
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
    getSmartphonePrices() {
      return this.$store.getters.getSmartphonePrices
    },
    getDisplaySizes() {
      return this.$store.getters.getDisplaySizes
    },
    getComputerPrices() {
      return this.$store.getters.getComputerPrices
    },
    getComputersRam() {
      return this.$store.getters.getComputersRam
    },
    getMemory() {
      return this.$store.getters.getMemory
    },
    getTVModels() {
      return this.$store.getters.getTVModels
    },
    getTVPrices() {
      return this.$store.getters.getTVPrices
    },
    getTVDiagonals() {
      return this.$store.getters.getTVDiagonals
    },
    getTVResolutions() {
      return this.$store.getters.getTVResolutions
    },
    getComputerModels() {
      return this.$store.getters.getPCModels
    },
    getVideocards() {
      return this.$store.getters.getVideocards
    },
    getCPUs() {
      return this.$store.getters.getCPUs
    },
    getCountries() {
      return this.$store.getters.getCountries
    },
    getTypes() {
      return this.$store.getters.getTypes
    }
  },
  methods: {
    filterByModel(e) {
      this.$store.dispatch('filterByModels', e.target.id.split('_')[1])
    },
    filterTVByModel(e) {
      this.$store.dispatch('filterTVByModel', e.target.id.split('_')[1])
      console.log(e.target.id.split('_')[1])
      console.log(this.$store.state.filtered.models)
    },
    filterByDisplaySize(e) {
      this.$store.dispatch('filterByDisplaySize', e.target.id.split('_')[1])
    },
    filterByMemory(e) {
      this.$store.dispatch('filterByMemory', e.target.id.split('_')[1])
    },
    filterTVByDiagonal(e) {
      this.$store.dispatch('filterTVByDiagonal', e.target.id.split('_')[1])
    },
    filterTVByResolution(e) {
      this.$store.dispatch('filterTVByResolution', e.target.id.split('_')[1])
    },
    filterComputersByModel(e) {
      this.$store.dispatch('filterComputersByModel', e.target.id.split('_')[1])
    },
    filterComputersByRam(e) {
      this.$store.dispatch('filterComputersByRam', e.target.id.split('_')[1])
    },
    filterComputersByVideocard(e) {
      this.$store.dispatch('filterComputersByVideocard', e.target.id.split('_')[1])
    },
    filterComputersByCPU(e) {
      this.$store.dispatch('filterComputersByCPU', e.target.id.split('_')[1])
    }, 
    filterComputersByCountries(e) {
      this.$store.dispatch('filterComputersByCountries', e.target.id.split('_')[1])
    },
    filterComputersByTypes(e) {
      this.$store.dispatch('filterComputersByTypes', e.target.id.split('_')[1])
    },
    price() {
      return setTimeout(() => {
        document.querySelector('.filter__range').value
      }, 0)
    },
    updateSmartphonePrice() {
      document.querySelector('.price-window').value = (+(document.querySelector('.filter__range').value)).toFixed()
      this.$store.state.filtered.price = +(document.querySelector('.price-window').value)
    },
    updateComputersPrice() {
      document.querySelector('.price-window').value = (+(document.querySelector('.filter__range').value)).toFixed()
      this.$store.state.filtered.price = +(document.querySelector('.price-window').value)
    },
    updateTVPrice() {
      document.querySelector('.price-window').value = (+(document.querySelector('.filter__range').value)).toFixed()
      this.$store.state.filtered.price = +(document.querySelector('.price-window').value)
    },
    inputPrice() {
      this.$store.state.filtered.price = document.querySelector('.price-window').value
    },
    clearFilters() {
      for(let [key, value] of Object.entries(this.$store.state.filtered)) {
        console.log(`${key}: ${value}`)
        if(typeof key == 'number') {
          value = 0
        } else {
          value = [] 
        }
        console.log(`${key}: ${value}`)
      }
      console.log(
        this.$store.state.filtered
      )
      this.$router.go(0)
    }
  },
  watch: {
    '$route' (to, from) {
      alert('called it', to, from);
    }
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
  flex-direction: column;
  align-items: center;

  .clear-filter {
    color: red;
    cursor: pointer;
    text-align: right;
    position: relative;
    bottom: 0;
    margin: 5px;  

    &:hover {
      text-decoration: underline;
    }
  }

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

    .filter__by-type {
      .filter__by-type_type {
        margin: 5px;
      }
    }

    .filter__by-ram {

      .filter__by-ram_ram {
        margin: 5px;
      }
    }

    .filter__by-videocard {
      .filter__by-videocard_videocard {
        margin: 5px;
      }
    }

    .filter__by-cpu {
      .filter__by-cpu_cpu {
        margin: 5px;
      }
    }

    .filter__by-country {
      .filter__by-country_country {
        margin: 5px;
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

  .filter__by-screen-diagonal {

    .filter__by-screen-diagonal_diagonal {
      margin: 5px;
    }
  }

  .filter__by-resolution {

    .filter__by-resolution_resolution {
      margin: 5px;
    }
  }
}
</style>