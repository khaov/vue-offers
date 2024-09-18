<script setup lang="ts">
import offersData from '@/assets/offersListData.json'

import OffersItem from '@/components/VueOffers/OffersItem.vue'

const offers = offersData.offers
</script>

<template>
  <h1><span>Гарантированные</span> займы</h1>

  <ul class="offers-list">
    <li v-for="offer in offers" :key="offer.id">
      <OffersItem :offer="offer" />
    </li>
  </ul>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #1c1c28;
}

.offers-list {
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 20px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0;
  list-style-type: none;
}
</style>
