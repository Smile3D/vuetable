<script setup>
// import BaseContainer from '@/components/BaseContainer.vue';
import { ref } from 'vue'
let deliveries = ref([
  {
    id: 1,
    customer: {
      name: 'John Smith',
      avatar: 'https://example.com/john_smith_avatar.jpg'
    },
    location: '123 Main Street, City',
    order_date: '2024-03-08',
    status: 'Shipped',
    amount: 500
  },
  {
    id: 2,
    customer: {
      name: 'Maria Johnson',
      avatar: 'https://example.com/maria_johnson_avatar.jpg'
    },
    location: '456 Oak Avenue, Town',
    order_date: '2024-03-09',
    status: 'Delivered',
    amount: 800
  },
  {
    id: 3,
    customer: {
      name: 'Alex Brown',
      avatar: 'https://example.com/alex_brown_avatar.jpg'
    },
    location: '789 Pine Road, Village',
    order_date: '2024-03-10',
    status: 'Pending',
    amount: 700
  },
  {
    id: 4,
    customer: {
      name: 'Eva Davis',
      avatar: 'https://example.com/eva_davis_avatar.jpg'
    },
    location: '101 Elm Lane, Suburb',
    order_date: '2024-03-11',
    status: 'Shipped',
    amount: 1200
  },
  {
    id: 5,
    customer: {
      name: 'Peter Wilson',
      avatar: 'https://example.com/peter_wilson_avatar.jpg'
    },
    location: '202 Maple Court, City',
    order_date: '2024-03-12',
    status: 'Delivered',
    amount: 300
  },
  {
    id: 6,
    customer: {
      name: 'Sophia Miller',
      avatar: 'https://example.com/sophia_miller_avatar.jpg'
    },
    location: '303 Birch Street, Town',
    order_date: '2024-03-13',
    status: 'Cancelled',
    amount: 1000
  },
  {
    id: 7,
    customer: {
      name: 'William Jones',
      avatar: 'https://example.com/william_jones_avatar.jpg'
    },
    location: '404 Cedar Avenue, Village',
    order_date: '2024-03-14',
    status: 'Delivered',
    amount: 600
  },
  {
    id: 8,
    customer: {
      name: 'Olivia Taylor',
      avatar: 'https://example.com/olivia_taylor_avatar.jpg'
    },
    location: '505 Spruce Road, Suburb',
    order_date: '2024-03-15',
    status: 'Pending',
    amount: 900
  },
  {
    id: 9,
    customer: {
      name: 'Daniel Moore',
      avatar: 'https://example.com/daniel_moore_avatar.jpg'
    },
    location: '606 Fir Lane, City',
    order_date: '2024-03-16',
    status: 'Shipped',
    amount: 400
  },
  {
    id: 10,
    customer: {
      name: 'Emma Brown',
      avatar: 'https://example.com/emma_brown_avatar.jpg'
    },
    location: '707 Pine Court, Town',
    order_date: '2024-03-17',
    status: 'Delivered',
    amount: 1100
  }
])
const getStatus = computed(() => {
  return deliveries.value.map((item) => item.status)
})

const setStatus = computed(() => {
    return {
        switch (setStatus) {
            case 'Delivered':
                setStatus = 'delivered';
                break;
            case 'Shipped':
                setStatus = 'shipped';
                break;
            case 'Pending':
                setStatus = 'pending';
                break;
            case 'Delivered':
                setStatus = 'delivered';
                break;
            default:
                alert( "Нет таких значений" );
        }
    }
})
Cancelled
console.log(getStatus, 'getStatus')
</script>

<template>
  <div class="table-wrapper">
    {{ getStatus }}
    <div class="table">
      <div class="thead">
        <div class="tr">
          <div class="th">Id</div>
          <div class="th">Customer</div>
          <div class="th">Location</div>
          <div class="th">Order Date</div>
          <div class="th">Status</div>
          <div class="th">Amount</div>
        </div>
      </div>
      <div class="tbody">
        <div class="tr" v-for="delivery in deliveries" :key="delivery.customer.id">
          <div class="td">{{ delivery.id }}</div>
          <div class="td">{{ delivery.customer.name }}</div>
          <div class="td">{{ delivery.location }}</div>
          <div class="td">{{ delivery.order_date }}</div>
          <div class="td status cancelled">{{ delivery.status }}</div>
          <div class="td">
            <strong>${{ delivery.amount }}</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
