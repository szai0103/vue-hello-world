<template>
  <div class="home">
    <HelloWorld msg="Hello, world!" />
    <h3>
      This application version number is: v {{ $store.getters.appVersion }}
    </h3>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
