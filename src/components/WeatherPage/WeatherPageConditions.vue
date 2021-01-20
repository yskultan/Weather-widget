<script>
import OpenWeatherSdk from '@/api/open-weather-sdk';
import unitsMixin from '@/mixins/units';

export default {
  name: 'WeatherPageConditions',
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
    temperature() {
      if (this.weatherData) {
        return this.weatherData.main.temp;
      }
      return 0;
    },

    icon() {
      if (this.weatherData) {
        return OpenWeatherSdk.makeIconPath(this.weatherData.weather[0].icon, 2);
      }
      return '';
    },
  },
};
</script>

<template>
  <div>
    <div class="conditions">
      <img class="icon" :src="icon" alt="" />
      <span class="temperature">
        {{ temperature | temperature($unitsType) }}
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.conditions {
  display: inline-flex;
  align-items: center;
  background: $white;
  border-radius: 15px;
}

.temperature {
  font-size: $base-font-size * 3;
  @extend %main-font-medium;
  white-space: nowrap;
  padding-right: 20px;
}

.icon {
  user-select: none;
}
</style>
