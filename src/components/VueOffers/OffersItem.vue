<script setup lang="ts">
import type { OfferItem } from '@/types'
import UiButton from '@/components/ui/UiButton.vue'

const props = defineProps<{
  offer: OfferItem
}>()

function formatSum(sum: number) {
  return sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

function formatPeriod(period: OfferItem['percent']['type']) {
  const periods = {
    day: 'в день',
    week: 'в неделю',
    month: 'в месяц',
    year: 'в год'
  }

  return periods[period]
}
</script>

<template>
  <a class="offer">
    <div class="offer-wrapper">
      <div class="offer-header">
        <img class="offer-image" :src="offer.logo_white_src" :alt="offer.title" />
      </div>
      <div class="offer-content">
        <ul class="offer-properties">
          <li>от {{ offer.percent.rate }} {{ formatPeriod(offer.percent.type) }}</li>
          <li>
            от <span> {{ formatSum(offer.min_amount) }} {{ offer.currency }} </span> до
            <span>{{ formatSum(offer.max_amount) }} {{ offer.currency }}</span>
          </li>
          <li>за {{ offer.time_to_get }}</li>
        </ul>
      </div>
      <div class="offer-footer">
        <UiButton :color="'primary'" :size="'lg'" type="button">Получить деньги</UiButton>
      </div>
    </div>
  </a>
</template>

<style>
.offer {
  display: block;
  background-color: #28293d;
  border-radius: 20px;
}

.offer-wrapper {
  display: grid;
  gap: 20px;
  justify-items: center;
  padding: 44px 20px 24px;
}

.offer-image {
  display: block;
  max-height: 55px;
}

.offer-properties {
  margin: 0;
  padding: 0;
  list-style-type: none;

  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;

  color: rgba(255, 255, 255, 0.4);
}

.offer-properties span {
  color: #9056d9;
}
</style>
