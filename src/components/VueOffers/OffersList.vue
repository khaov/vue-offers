<script setup lang="ts">
import offersData from '@/assets/offersListData.json'

const offers = offersData.offers
</script>

<template>
  <h1><span>Гарантированные</span> займы</h1>

  <ul>
    <li v-for="offer in offers" :key="offer.id">{{ offer.title }}</li>
  </ul>
</template>
