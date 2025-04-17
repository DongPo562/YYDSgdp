<template>
  <div class="image-container">
    <img src="/logos/holdPlace.png" alt="占位图">
  </div>
</template>

<style scoped>
.image-container {
  width: 96%;
  aspect-ratio: 1 / 1;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 5px 0 5px 0;
}

.image-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 10px;
}
</style> 