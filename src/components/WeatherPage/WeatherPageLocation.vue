<script>
export default {
  name: 'WeatherPageLocation',

  props: {
    location: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="location">
    {{ location.city | capitalize }},
    {{ location.countryCode | uppercase }}
  </div>
</template>

<style lang="scss" scoped>
.location {
  @extend %main-font-bold;
}
</style>
