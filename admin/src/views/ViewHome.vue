<template>
  <div>
    <Home msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Home from '@/components/Home.vue'; // @ is an alias to /src

@Component({
  components: {
    Home
  }
})
export default class ViewHome extends Vue {}
</script>
