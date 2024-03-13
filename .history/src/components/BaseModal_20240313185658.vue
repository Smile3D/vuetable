<script setup>
import { ref, defineEmits } from 'vue'
const emit = defineEmits(['clickEditData'])

const onCloseModal = () => {
  emit('clickCloseModal', props.id)
}
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
