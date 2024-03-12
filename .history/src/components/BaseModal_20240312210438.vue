<script setup>
import { ref } from 'vue'
let isOpenModal = ref(false)
defineProps({
  isOpenModal: {
    type: Boolean,
    default: false
  }
})
</script>
<template>
  <div class="modal" v-show="isOpenModal">sdsd</div>
</template>
