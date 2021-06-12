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
    }
  },
  methods: {
    filterByModel(e) {
      this.$store.dispatch('filterByModels', e.target.id.split('_')[1])
      console.log(e.target.id.split('_')[1])
      console.log(this.$store.state.filtered.models)
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
  }
}
</style>