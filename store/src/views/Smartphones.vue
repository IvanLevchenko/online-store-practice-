<template>
  <div class="smartphones">
    <div class="smartphones__filter">
      <FilterComponent/>
    </div>
    <div class="smartphones__body">
      <SmartphonesComponent v-for="phone of getAllSmatrphones" :text="phone.model" :img="phone.img" :key="phone.id"/>
    </div>
  </div>
</template>

<script>
import SmartphonesComponent from '../components/SmartphonesComponent'
import FilterComponent from '../components/Filter'

export default {
  components: {
    SmartphonesComponent,
    FilterComponent
  },
  computed: {
    getAllSmatrphones() {
      return this.$store.state.smartphonesData
    }
  },
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
  }
}
</style>