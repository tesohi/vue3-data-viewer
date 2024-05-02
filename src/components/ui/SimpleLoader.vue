<template>
  <div class="loader" role="status" aria-busy="true">Loading...</div>
</template>

<script lang="ts" setup></script>

<style scoped>
.loader {
  font-size: 25px;
  font-style: italic;
  font-weight: 500;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}
</style>
