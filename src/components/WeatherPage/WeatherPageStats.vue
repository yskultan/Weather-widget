<script>
import unitsMixin from '@/mixins/units';

export default {
  name: 'WeatherPageStats',
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
    windSpeed() {
      if (this.weatherData) {
        return this.weatherData.wind.speed;
      }
      return 0;
    },

    windDeg() {
      if (this.weatherData) {
        return this.weatherData.wind.deg;
      }
      return 0;
    },

    pressure() {
      if (this.weatherData) {
        return this.weatherData.main.pressure;
      }
      return 0;
    },

    humidity() {
      if (this.weatherData) {
        return this.weatherData.main.humidity;
      }
      return 0;
    },

    visibility() {
      if (this.weatherData) {
        return this.weatherData.visibility;
      }
      return 0;
    },

    dew() {
      if (this.weatherData) {
        return this.weatherData.main.temp_min;
      }
      return 0;
    },
  },
};
</script>

<template>
  <div class="stats-grid">
    <div class="stat">
      <ui-icon class="stat__label-icon" :deg="windDeg">
        <img class="fluent-icon__custom" src="../../images/WindDirection.png">
      </ui-icon>
      <span class="nowrap">{{ windSpeed | windSpeed($unitsType) }}</span>
    </div>
    <div class="stat">
      <ui-icon class="stat__label-icon">
        <img class="fluent-icon__custom" src="../../images/AutoRacing.png">
      </ui-icon>
      <span>{{ pressure | pressure }}</span>
    </div>
    <div class="stat">
      <span class="stat__label-text">
        {{ $t('stats.humidity') | capitalize }}:
      </span>
      <span>{{ humidity | humidity }}</span>
    </div>
    <div class="stat">
      <span class="stat__label-text">
        {{ $t('stats.dew') | capitalize }}:
      </span>
      <span>{{ dew | dew($unitsType) }}</span>
    </div>
    <div class="stat">
      <span class="stat__label-text">
        {{ $t('stats.visibility') | capitalize }}:
      </span>
      <span class="nowrap">{{ visibility | visibility($unitsType) }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nowrap {
  white-space: nowrap;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px 15px;
}

.stat {
  display: flex;
  align-items: center;

  &__label-text {
    margin-right: 6px;
    @extend %main-font-medium;
    white-space: nowrap;
  }

  &__label-icon {
    margin: 0px 6px 0px -6px;
  }
}
</style>
