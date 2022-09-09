<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
</script>

<script lang="ts">
import Vue from "vue";
import { getDatabase, ref, child, get, onValue } from "firebase/database";
export default {
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
};
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
