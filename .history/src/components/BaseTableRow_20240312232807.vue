<script setup>
import { defineEmits } from 'vue'
defineProps({
  id: Number,
  name: String,
  location: String,
  orderDate: String,
  status: String,
  amount: String
})
// defineEmits(['onClickEditData'])
// function onClickEditData() {
//   emit('onOpenModel')
// }
</script>

<template>
  <div class="tr">
    <div class="td">{{ id }}</div>
    <div class="td">{{ name }}</div>
    <div class="td">{{ location }}</div>
    <div class="td">{{ orderDate }}</div>
    <div class="td status" :class="[status.toLowerCase()]">
      {{ status }}
    </div>
    <div class="td">
      <strong>${{ amount }}</strong>
    </div>
    <div class="td">
      <button type="button" class="btn-edit" @click="$emit(onClickEditData, id)">
        <img src="@/assets/images/icon-edit.svg" />
      </button>
    </div>
  </div>
</template>
