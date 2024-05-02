<template>
  <h1>Data viewer</h1>

  <VisualizationPage />
</template>

<script lang="ts" setup>
import VisualizationPage from "@/views/VisualizationPage.vue";
</script>

<style>
* {
  box-sizing: border-box;
}

html,
body,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #0f0f10;
}

#app {
  padding: 10px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e0e0e3;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
