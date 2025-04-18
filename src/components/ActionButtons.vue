<script setup lang="ts">
import { defineEmits } from 'vue'

const emit = defineEmits(['updateText'])

const handlePaste = async (): Promise<void> => {
  try {
    const txt: string = await navigator.clipboard.readText()
    emit('updateText', txt)
  } catch (err: unknown) { // 将 err 的类型明确为 unknown
    console.error('读取剪贴板失败:', err)
  }
}
</script>

<template>
  <div class="main-left-button-container">
    <el-button type="primary" class="action-button" @click="handlePaste">粘贴</el-button>
    <el-button type="primary" class="action-button">记录</el-button>
    <el-button type="primary" class="action-button">模式1</el-button>
    <el-button type="primary" class="action-button">听听看</el-button>
    <el-button type="primary" class="action-button">回头看</el-button>
    <el-button type="primary" class="action-button">提示</el-button>
  </div>
</template>

<style scoped>
.main-left-button-container {
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.action-button {
  background-color: #FFA3A3;
  height: 3.8rem;
  border-radius: 1rem;
  border: none;
  font-size: 1.3rem;
  font-weight: bold;
  flex: 1;
}
</style>