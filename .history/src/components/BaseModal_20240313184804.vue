<script setup>
import { ref } from 'vue'

defineProps({
  isOpenModal: {
    type: Boolean,
    default: false
  }
})
</script>
<template>
  <div v-show="isOpenModal">
    <div class="modal-overlay" @click="isOpenModal = false"></div>
    <div class="modal">
      <slot></slot>
    </div>
  </div>
</template>
