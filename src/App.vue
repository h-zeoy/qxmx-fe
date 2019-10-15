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
