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
  <div class="modal" v-show="isOpenModal"></div>
</template>
