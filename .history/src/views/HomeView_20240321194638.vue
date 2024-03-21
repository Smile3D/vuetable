<script setup>
import { computed, ref } from 'vue'
import BaseTableRow from '@/components/BaseTableRow.vue'
import BaseModal from '@/components/BaseModal.vue'

let deliveries = ref([
  {
    id: 1,
    name: 'John Smith',
    location: 'Tokio',
    order_date: '2024-03-08',
    status: 'Shipped',
    amount: 500
  },
  {
    id: 2,
    name: 'Maria Johnson',
    location: 'New York',
    order_date: '2024-03-09',
    status: 'Delivered',
    amount: 800
  },
  {
    id: 3,
    name: 'Alex Brown',
    location: 'Tokio',
    order_date: '2024-03-10',
    status: 'Pending',
    amount: 700
  },
  {
    id: 4,
    name: 'Eva Davis',
    location: 'New York',
    order_date: '2024-03-11',
    status: 'Shipped',
    amount: 1200
  },
  {
    id: 5,
    name: 'Peter Wilson',
    location: 'Tokio',
    order_date: '2024-07-12',
    status: 'Delivered',
    amount: 300
  },
  {
    id: 6,
    name: 'Sophia Miller',
    location: 'Denver',
    order_date: '2024-05-13',
    status: 'Cancelled',
    amount: 1000
  },
  {
    id: 7,
    name: 'William Jones',
    location: 'Las Vegas',
    order_date: '2024-03-14',
    status: 'Delivered',
    amount: 600
  },
  {
    id: 8,
    name: 'Olivia Taylor',
    location: 'Las Vegas',
    order_date: '2024-05-15',
    status: 'Pending',
    amount: 900
  },
  {
    id: 9,
    name: 'Daniel Moore',
    location: 'Denver',
    order_date: '2024-04-16',
    status: 'Shipped',
    amount: 400
  },
  {
    id: 10,
    name: 'Emma Brown',
    location: 'Tokio',
    order_date: '2024-06-16',
    status: 'Delivered',
    amount: 1100
  }
])

let sortByValue = ref(false)
let isModalVisible = ref(false)
const selectedStatus = ref('Please select a new status')

function onSort(columnKey) {
  sortByValue.value = !sortByValue.value
  if (columnKey === 'location') {
    if (sortByValue.value) {
      deliveries.value.sort((a, b) => a[columnKey].localeCompare(b[columnKey]))
    } else {
      deliveries.value.sort((a, b) => b[columnKey].localeCompare(a[columnKey]))
    }
  } else {
    if (sortByValue.value) {
      deliveries.value.sort((a, b) => a[columnKey] - b[columnKey])
    } else {
      deliveries.value.sort((a, b) => b[columnKey] - a[columnKey])
    }
  }
}
let modaId = ref({})
const isOpenModal = (editData) => {
  isModalVisible.value = !isModalVisible.value
  return (modaId.value = editData)
}

const updateTest = (val) => {
  console.log(val, 'val')
}

const getStatuses = computed(() => {
  return (deliveries.value = Array.from(deliveries.value, ({ status }) => status))
  //   deliveries.value.map((item) => item.status)
})

console.log(getStatuses, 'getStatuses')

const getUniqueStatuses = computed(() => {
  return [...new Set(getStatuses.value)]
})

console.log(getStatuses, 'getStatuses')
</script>
<template>
  <div class="table-wrapper">
    <div class="table">
      <div class="thead">
        <div class="tr">
          <div class="th">Id</div>
          <div class="th">Customer</div>
          <div class="th" @click="onSort('location')">
            Location <img src="@/assets/images/sort.svg" />
          </div>
          <div class="th">Order Date</div>
          <div class="th">Status</div>
          <div class="th" @click="onSort('amount')">
            Amount <img src="@/assets/images/sort.svg" />
          </div>
          <div class="th"></div>
        </div>
      </div>
      <div class="tbody">
        <BaseTableRow
          v-for="deliveryItem in deliveries"
          :key="deliveryItem.id"
          :id="deliveryItem.id"
          :name="deliveryItem.name"
          :location="deliveryItem.location"
          :orderDate="deliveryItem.order_date"
          :status="deliveryItem.status"
          :amount="deliveryItem.amount"
          @click-edit-data="isOpenModal"
        />
      </div>
    </div>
  </div>
  <BaseModal :openModal="isModalVisible" @clickCloseModal="isOpenModal">
    <div>Вибрано: {{ selectedStatus }}</div>
    <select v-model="selectedStatus" name="status" id="status" @change="updateStatus($event)">
      <option disabled value="Please select a new status">Please select a new status</option>
      <option v-for="(uniqueStatus, index) in getUniqueStatuses" :key="index" :value="uniqueStatus">
        {{ uniqueStatus }}
      </option>
    </select>
    {{ modaId.status }}{{ modaId.location }}</BaseModal
  >
</template>
