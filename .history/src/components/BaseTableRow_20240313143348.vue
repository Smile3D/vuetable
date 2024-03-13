<script setup>
import { defineProps, defineEmits } from 'vue'
const emit = defineEmits({
  someEvent(userId) {
    if (userId && typeof userId === 'number') {
      return true
    } else {
      return false
    }
  }
})
const props = defineProps({
  id: Number,
  name: String,
  location: String,
  orderDate: String,
  status: String,
  amount: Number
})

const foo = () => {
  console.log(props.id, 'props.id')
  emit('someEvent', 'ss')
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
      <button type="button" class="btn-edit" @click="foo">
        <img src="@/assets/images/icon-edit.svg" />
      </button>
    </div>
  </div>
</template>
