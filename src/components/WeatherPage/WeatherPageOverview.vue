<script>
import unitsMixin from '@/mixins/units';

export default {
  name: 'WeatherPageOverview',
  mixins: [unitsMixin],

  props: {
    weatherData: {
      validator(prop) {
        return typeof prop === 'object' || prop === null;
      },
      required: true,
    },
  },

  computed: {
    feelTemperature() {
      if (this.weatherData) {
        return this.weatherData.main.feels_like;
      }
      return 0;
    },

    weatherDescription() {
      if (this.weatherData) {
        return this.weatherData.weather[0].description;
      }
      return '';
    },
  },
};
</script>

<template>
  <div>
    <div class="overview">
      <span>
        {{ $t('words.feelsLike') | capitalize }}
        {{ feelTemperature | temperature($unitsType) }}.
      </span>
      <span>{{ weatherDescription | capitalize }}.</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.overview {
  @extend %main-font-medium;
  line-height: 1.5;
}
</style>
