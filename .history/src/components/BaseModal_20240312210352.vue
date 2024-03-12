<script setup>
import { ref } from 'vue'
let isOpenModal = ref(false)
defineProps({
  openModal: {
    type: Boolean,
    default: false
  }
})
</script>
<template>
  <div class="modal" v-show="false">sdsd</div>
</template>
