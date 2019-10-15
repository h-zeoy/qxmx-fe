<template>
  <div id="app">
      Name: <input v-model="name" type="text">
      <add-com :name="name" :initialEnthusiasm="5" />
    <!-- <router-view/> -->
  </div>
</template>

<script lang="ts">
import AddCom from '@/components/AddCom.vue';
import { Component, Prop, Vue } from 'vue-property-decorator';
 
@Component({
  components:{
    AddCom,
  },
})
export default class App extends Vue {
  name = 'world'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
