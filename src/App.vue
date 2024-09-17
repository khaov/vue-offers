<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppContent from '@/components/layout/AppContent.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

import OffersList from '@/components/VueOffers/OffersList.vue'
</script>

<template>
  <AppHeader />
  <AppContent>
    <OffersList />
  </AppContent>
  <AppFooter />
</template>
