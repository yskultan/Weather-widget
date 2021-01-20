<script>
import { mapState } from 'vuex';
import WeatherPage from '@/components/WeatherPage/WeatherPage.vue';

export default {
  name: 'MainView',
  components: { WeatherPage },
  computed: {
    ...mapState('locations', ['locations']),
  },
};
</script>

<template>
  <div class="main-view">
    <div
      v-for="item in locations"
      :key="`${item.city}__${item.countryCode}`"
      class="main-view__display-item"
    >
      <weather-page :location="item" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-view {
  &__display-item {
    padding-bottom: 50px;

    &:first-child {
      padding-top: 0;
    }

    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
  }
}
</style>
