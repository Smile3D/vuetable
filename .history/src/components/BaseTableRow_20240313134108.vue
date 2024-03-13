<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  id: Number,
  name: String,
  location: String,
  orderDate: String,
  status: String,
  amount: Number
})
const emit = defineEmit('test')

// console.log('ssd')
const foo = () => {
  emit('someEvent', props.id)
}
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
      <button type="button" class="btn-edit" @click="$emit('test', 1)">
        <img src="@/assets/images/icon-edit.svg" />
      </button>
    </div>
  </div>
</template>
