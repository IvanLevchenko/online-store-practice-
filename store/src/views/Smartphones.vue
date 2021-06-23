<template>
  <div class="smartphones">
    <div class="smartphones__filter">
      <FilterComponent/>
    </div>
    <div class="smartphones__body">
      <SmartphonesComponent v-for="phone of getAllSmatrphones" 
      :man="phone.manufacturer" 
      :price="phone.price" 
      :text="phone.model" 
      :img="phone.img" 
      :key="phone.id"
      :id="phone.id"
      :manufacturer="phone.manufacturer"
      :size="phone.info.split('/')[0]
          .split(',')
          .find(i => i.match(/\d{4}x\d{4}/) || i.match(/\d{4}x\d{3}/))
          .trim()
          .split(')')[0]"
      :memory="phone.info
          .split(',')
          .find(e => e.match(/\d* GB of internal memory/))
          .split(' / ')
          .find(e => e.match(/\d* GB of internal memory/))
          .split(' ') 
          .find(e => e.match(/\d+/)) "
      @show-modal="showModal"
      />
    </div>
    <ComponentModal 
      @close-modal="closeModal"
      :img="this.modalSmartphoneData.img" 
      :price="this.modalSmartphoneData.price" 
      :info="this.modalSmartphoneData.info" 
      :size="this.modalSmartphoneData.size"
      :memory="this.modalSmartphoneData.memory"
      :manufacturer="this.modalSmartphoneData.manufacturer"
      v-if="this.modalSmartphoneData.show"
    />
  </div>
</template>

<script>
import ComponentModal from '../components/ComponentModal.vue'
import SmartphonesComponent from '../components/SmartphonesComponent'
import FilterComponent from '../components/Filter'
import { mapState } from 'vuex'

export default {
  components: {
    SmartphonesComponent,
    FilterComponent,
    ComponentModal
  },
  computed: {
    getAllSmatrphones() {
      return this.$store.state.smartphonesData
    },
    ...mapState(['smartphonesData'])
  },
  data() {
    return {
      modalSmartphoneData: {
        id: null,
        img: null,
        info: null,
        price: null,
        size: null,
        memory: null,
        manufacturer: null,
        show: false
      }
    }
  },
  methods: {
    showModal(data) {
      this.modalSmartphoneData = data
    },
    closeModal() {
      this.modalSmartphoneData = {
        id: null,
        img: null,
        info: null,
        price: null,
        size: null,
        memory: null,
        show: false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.smartphones {
  width: 100%;
  display: flex;
  justify-content: center;

  .smartphones__filter {
    
  }

  .smartphones__body {
    display: flex;
    flex-wrap: wrap;
    max-width: 1350px;
    min-width: 71%;
  }
}
</style>