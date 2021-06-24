<template>
  <div class="tv">
    <div class="tv__filter">
      <FilterComponent/>
    </div>
    <div class="tv__body">
      <TVComponent v-for="tv of getAllTVs" 
        :key="tv.id"
        :img="tv.img"
        :model="tv.model"
        :price="tv.price"
        :manufacturer="tv.manufacturer"
        :screenDiagonal="tv.screenDiagonal"
        :resolution="tv.resolution"
      />
    </div>
  </div>
</template>

<script>
import FilterComponent from '../components/Filter.vue'
import TVComponent from '../components/TVComponent.vue'

export default {
  components: {
    FilterComponent,
    TVComponent
  },
  computed: {
    getAllTVs() {
      return this.$store.state.TVData
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

html {
  overflow-x: hidden;
}

.tv {
  width: 100%;
  display: flex;
  justify-content: center;  

  .tv__body {
    display: flex;
    flex-wrap: wrap;
    max-width: 1350px;
    min-width: 71%;
  }
}
</style>