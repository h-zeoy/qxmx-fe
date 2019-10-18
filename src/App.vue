<template>
  <div id="app">
    <router-view/>
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
