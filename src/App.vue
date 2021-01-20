<script>
/* eslint-disable vue/require-prop-types */
import { mapState, mapActions } from 'vuex';
import localeMixin from '@/mixins/locale';
import SettingsPage from '@/components/SettingsPage/SettingsPage.vue';

export default {
  name: 'App',
  components: { SettingsPage },
  mixins: [localeMixin],

  props: ['lang', 'theme', 'instanceId', 'units'],

  data: () => ({
    isError: false,
    isLocationsLoading: false,
  }),

  computed: {
    ...mapState('general', ['isGlobalScrollLocked']),

    scrollClass() {
      if (this.isGlobalScrollLocked) return 'unscrollable';
      return 'scrollable';
    },
  },

  async created() {
    this.setLocale(this.lang);
    this.$setInstanceId(this.instanceId);
    await this.initLocations();
  },

  methods: {
    ...mapActions('locations', {
      initLocationsAction: 'initLocations',
    }),

    async initLocations() {
      try {
        this.isLocationsLoading = true;
        await this.initLocationsAction({ instanceId: this.$instanceId });
      } catch (RequestError) {
        this.isError = true;
      } finally {
        this.isLocationsLoading = false;
      }
    },
  },
};
</script>

<template>
  <div class="widget-wrap" :class="scrollClass">
    <div v-if="isLocationsLoading" class="locations-loader">
      {{ $t('loadersText.locations') | capitalize }}...
    </div>

    <div v-if="isError">
      {{ $t('errors.locationsNotInitiated') | capitalize }}.
    </div>
    <router-view v-else />

    <settings-page v-if="!isError && !isLocationsLoading" />
  </div>
</template>

<style scoped lang="scss">
.widget-wrap {
  position: relative;
  padding: $app-padding;
  max-width: $app-width;
  max-height: $app-height;
  border: 1px solid gray;
  overflow-y: auto;
  box-sizing: border-box;
  @extend %main-font;
  font-size: $base-font-size;
  background: $white;
  color: $black;
}

.scrollable {
  overflow-y: auto;
}

.unscrollable {
  overflow-y: hidden;
}

.locations-loader {
  text-align: center;
}
</style>
