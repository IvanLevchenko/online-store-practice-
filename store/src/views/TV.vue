<template>
  <div class="tv">
    <div class="tv__filter">
      <FilterComponent/>
    </div>
    <div class="tv__body">
      <TVComponent 
        @show-modal="showModal"
        v-for="tv of getAllTVs" 
        :key="tv.id"
        :img="tv.img"
        :model="tv.model"
        :price="tv.price"
        :manufacturer="tv.manufacturer"
        :screenDiagonal="tv.screenDiagonal"
        :resolution="tv.resolution"
      />
    </div>
    <ComponentModal
      @close-modal="closeModal"
      :img="this.modalTVData.img"
      :info="this.modalTVData.model"
      :price="this.modalTVData.price"
      :manufacturer="this.modalTVData.manufacturer"
      :resolution="this.modalTVData.resolution"
      v-if="this.modalTVData.show"
    />
  </div>
</template>

<script>
import FilterComponent from '../components/Filter.vue'
import TVComponent from '../components/TVComponent.vue'
import ComponentModal from '../components/ComponentModal.vue'

export default {
  components: {
    FilterComponent,
    TVComponent,
    ComponentModal
  },
  computed: {
    getAllTVs() {
      return this.$store.state.TVData
    }
  },
  data() {
    return {
      modalTVData: {
        id: null,                               
        img: null,
        model: null,
        price: null,
        manufacturer: null,
        resolution: null,
        show: false
      }
    }
  },
  methods: {
    showModal(data) {
      this.modalTVData = data
    },
    closeModal() {
      this.modalTVData = {
        id: null,
        img: null,
        model: null,
        price: null,
        manufacturer: null,
        resolution: null,
        show: false
      }
    }
  },
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