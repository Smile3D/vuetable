<script setup>
import { ref, defineEmits } from 'vue'
const emit = defineEmits(['clickCloseModal'])

const onCloseModal = () => {
  emit('clickCloseModal')
}
defineProps({
  isOpenModal: {
    type: Boolean,
    default: false
  },
  id: Number
})
</script>
<template>
  <div v-show="isOpenModal">
    <div class="modal-overlay" @click="onCloseModal"></div>
    <div class="modal">
      <button @click="onCloseModal" class="close-modal" type="button">
        <img src="@/assets/images/icon-close.svg" />
      </button>
    </div>
  </div>
</template>
