<script setup>
import { ref, defineProps, defineEmits } from 'vue'
import BaseModal from '@/components/BaseModal.vue'
const emit = defineEmits(['clickEditData'])
const props = defineProps({
  id: Number,
  name: String,
  location: String,
  orderDate: String,
  status: String,
  amount: Number
})
let isModalVisible = ref(false)
const isOpenModal = () => {
  console.log('sss')
  isModalVisible.value = !isModalVisible.value
}
const onEditData = () => {
  emit('clickEditData', props.id)
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
      <button type="button" class="btn-edit" @click="isOpenModal">
        <img src="@/assets/images/icon-edit.svg" />
      </button>
    </div>
    <BaseModal :isOpenModal="isModalVisible" @clickCloseModal="isOpenModal" />
  </div>
</template>
