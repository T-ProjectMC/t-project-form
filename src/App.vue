<template>
  <v-app>
    <v-main class="main">
      <HelloWorld />
    </v-main>
  </v-app>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/Home.vue";

export default defineComponent({
  name: "App",

  components: {
    HelloWorld,
  },

  data() {
    return {
      //
    };
  },
  mounted() {
    window.addEventListener("beforeunload", this.confirmSave);
    window.addEventListener("popstate", this.confirmSave);
  },
  destroyed() {
    window.removeEventListener("beforeunload", this.confirmSave);
    window.removeEventListener("popstate", this.confirmSave);
  },
  methods: {
    confirmSave(event) {
      event.returnValue = "編集中のものは保存されませんが、よろしいですか？";
    },
  },
});
</script>
<style lang="scss">
.main {
  background-color: #fafafa;
}
</style>
