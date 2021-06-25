<template>
  <div class="computers">
    <div class="computers__filter">
      <FilterComponent/>
    </div>
    <div class="computers__body">
      <ComputerComponent
        v-for="computer of getAllComputers"
        :key="computer.id"
        :model="computer.model"
        :price="computer.price"
        :ram="computer.RAM"
        :videoCard="computer.videoCard"
        :type="computer.type"
        :country="computer.country"
        :img="computer.img"
        :cpu="computer.CPU"
        @show-modal="showModal"
      />
    </div>
    <ComponentModal 
      @close-modal="closeModal"
      :img="this.modalComputersData.img" 
      :price="this.modalComputersData.price" 
      :model="this.modalComputersData.model" 
      :ram="this.modalComputersData.ram"
      :cpu="this.modalComputersData.cpu"
      :country="this.modalComputersData.country"
      :type="this.modalComputersData.type"
      :videoCard="this.modalComputersData.videoCard"
      v-if="this.modalComputersData.show"
    />
  </div>
</template>

<script>
import FilterComponent from '../components/Filter.vue'
import ComputerComponent from '../components/ComputerComponent.vue'
import ComponentModal from '../components/ComponentModal.vue'

export default {
  components: {
    FilterComponent,
    ComputerComponent,
    ComponentModal
  },
  computed: {
    getAllComputers() {
      return this.$store.state.computerData
    }
  },
  methods: {
    showModal(data) {
      this.modalComputersData = data
    },
    closeModal() {
      this.modalComputersData = {
        id: null,
        img: null,
        model: null,
        price: null,
        videoCard: null,
        cpu: null,
        type: null,
        ram: null,
        country: null,
        show: false
      }
    }
  },
  data() {
    return {
      modalComputersData: {
        id: null,
        img: null,
        model: null,
        price: null,
        videoCard: null,
        cpu: null,
        type: null,
        ram: null,
        country: null,
        show: false
      }
    }
  },
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.computers {
  width: 100%;
  display: flex;
  justify-content: center;  

  .computers__body {
    display: flex;
    flex-wrap: wrap;
    max-width: 1350px;
    min-width: 71%;
  }
}
</style>