<script setup lang="ts">
import { ref } from 'vue'
import ActionButtons from './components/ActionButtons.vue'
import FormatText from './components/FormatText.vue'
import TipText from './components/TipText.vue'
import ImageDisplay from './components/ImageDisplay.vue'

const formatText = ref('')
const tipText = ref('')

const handleUpdateText = (txt: string) => {
  formatText.value = txt
}
</script>

<template>
  <div class="main-container">
    <div class="main-left-container">
      <ActionButtons @updateText="handleUpdateText" />
      <FormatText :clipboardText="formatText" />
    </div>
    <div class="main-right-container">
      <TipText :text="tipText" />
      <ImageDisplay />
    </div>
  </div>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.main-container {
  display: flex;
  width: 100%;
  height: 100vh;
}

.main-left-container {
  flex: 6.2;
  height: 100vh;
  box-sizing: border-box;
  border-right: 1px solid gray;
  display: flex;
  flex-direction: column;
}

.main-right-container {
  flex: 3.8;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 0;
  align-items: center;
}
</style>
