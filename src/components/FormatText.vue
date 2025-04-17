<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <div class="main-left-text-container">
    <el-text class="format-text">{{ text }}</el-text>
  </div>
</template>

<style scoped>
.main-left-text-container {
  padding: 0;
  width: 100%;
  height: calc(100% - 45px);
  box-sizing: border-box;
}

.format-text {
  padding: 12px;
  margin: 0 10px 10px 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #ECFFE8;
  font-size: 16px;
  display: block;
  width: calc(100% - 20px);
  height: calc(100% - 5px);
  min-height: 100px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  overflow-y: auto;
}
</style> 