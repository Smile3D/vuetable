<script setup>
import { defineEmits } from 'vue'
const emit = defineEmits(['clickCloseModal'])

const onCloseModal = () => {
  emit('clickCloseModal')
}
defineProps({
  openModal: {
    type: Boolean,
    default: false
  },
  id: Number
})
</script>
<template>
  <div v-show="openModal">
    <div class="modal-overlay" @click="onCloseModal"></div>
    <div class="modal">
      <button @click="onCloseModal" class="close-modal" type="button">
        <img src="@/assets/images/icon-close.svg" />
      </button>
      <slot></slot>
    </div>
  </div>
</template>