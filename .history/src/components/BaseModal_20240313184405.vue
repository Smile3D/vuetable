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
  <div class="modal" v-show="isOpenModal">
    <div class="modal-overlay" @click="close"></div>
    <div class="popup-container" v-scroll-lock="is_opened">
      <slot></slot>
    </div>
  </div>
</template>
