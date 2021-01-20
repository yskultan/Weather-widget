<script>
import OpenWeatherSdk from '@/api/open-weather-sdk';
import WeatherPageLocation from './WeatherPageLocation.vue';
import WeatherPageConditions from './WeatherPageConditions.vue';
import WeatherPageOverview from './WeatherPageOverview.vue';
import WeatherPageStats from './WeatherPageStats.vue';

export default {
  name: 'WeatherPage',
  components: {
    WeatherPageLocation,
    WeatherPageConditions,
    WeatherPageOverview,
    WeatherPageStats,
  },

  props: {
    location: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    isLoading: false,
    weatherData: null,
    isError: false,
  }),

  async mounted() {
    await this.loadWeatherData();
  },

  methods: {
    async loadWeatherData() {
      try {
        this.isLoading = true;
        this.weatherData = await OpenWeatherSdk.weather.byCityName({
          city: this.location.city,
          countryCode: this.location.countryCode,
          units: this.$unitsType,
          lang: this.$i18n.locale,
        });
      } catch (RequestError) {
        this.isError = true;
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<template>
  <div class="weather-display">
    <template v-if="!isError">
      <div class="weather-display__heading">
        <weather-page-location :location="location" />
      </div>
      <div class="weather-display__conditions">
        <weather-page-conditions
          :weather-data="weatherData"
          :is-loading="isLoading"
        />
      </div>
      <div class="weather-display__overview">
        <weather-page-overview
          :weather-data="weatherData"
          :is-loading="isLoading"
        />
      </div>
      <div>
        <weather-page-stats
          :weather-data="weatherData"
          :is-loading="isLoading"
        />
      </div>
    </template>
    <div v-show="isError">
      <span>
        {{ $t('errors.dataNotLoadedForCity') | capitalize }}
        {{ location.city | capitalize }}.
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.weather-display {
  display: flex;
  flex-direction: column;

  &__heading {
    margin-bottom: 12px;
  }

  &__conditions {
    margin-bottom: 12px;
    align-self: center;
  }

  &__overview {
    margin-bottom: 14px;
    width: 100%;
  }
}
</style>
