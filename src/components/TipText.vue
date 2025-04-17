<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <div class="tip-container">
    <el-text class="tip-text">{{ text }}</el-text>
  </div>
</template>

<style scoped>
.tip-container {
  flex: 1;
  width: 98%;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: antiquewhite;
  margin-top: 5px;
  overflow-y: auto;
}
</style> 