<template>
  <div class="smartphones">
    <div class="smartphones__body">
      <SmartphonesComponent v-for="phone of getAllSmatrphones" :text="phone.model" :img="phone.img" :key="phone.id"/>
    </div>
  </div>
</template>

<script>
import SmartphonesComponent from '../components/SmartphonesComponent'

export default {
  components: {
    SmartphonesComponent,
  },
  computed: {
    getAllSmatrphones() {
      return this.$store.state.smartphonesData
    }
  }
}
</script>

<style lang="scss" scoped>
.smartphones {
  width: 100%;
  
  .smartphones__body {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>