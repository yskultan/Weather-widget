<script>
import { mapActions } from 'vuex';
import AddLocationForm from './AddLocationForm.vue';
import SettingsPageLocations from './SettingsPageLocations.vue';

export default {
  name: 'SettingsPageContent',
  components: { SettingsPageLocations, AddLocationForm },

  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    addCityServerErrors: {},
  }),

  watch: {
    isActive: {
      handler(value) {
        if (value) {
          window.addEventListener('keydown', this.onKeyDown);
          this.lockWidgetScroll();
        } else {
          window.removeEventListener('keydown', this.onKeyDown);
          this.unlockWidgetScroll();
          this.clearAddCityServerErrors();
        }
      },
      immediate: true,
    },
  },

  methods: {
    ...mapActions('general', ['lockWidgetScroll', 'unlockWidgetScroll']),
    ...mapActions('locations', ['addCity']),

    async addNewCity(addCityFormData) {
      try {
        await this.addCity(addCityFormData);
        this.clearAddCityServerErrors();
      } catch (error) {
        if (error.isDuplicate) {
          const duplicationError = this.$t('errors.duplicateCityRequested');
          this.$set(this.addCityServerErrors, 'city', duplicationError);
          return;
        }

        const cityNotIdentifiedError = this.$t('errors.cityNotIdentified');
        this.$set(this.addCityServerErrors, 'city', cityNotIdentifiedError);
      }
    },

    clearAddCityServerErrors() {
      this.addCityServerErrors = {};
    },

    onKeyDown(event) {
      if (event.key === 'Escape') this.closeSettings();
    },

    closeSettings() {
      this.$emit('close');
    },
  },
};
</script>

<template>
  <transition name="fade">
    <div v-show="isActive" class="settings">
      <div class="settings__header">
        {{ $t('settingsForm.title') | capitalize }}
      </div>
      <div class="settings__locations">
        <settings-page-locations />
      </div>
      <div>
        <add-location-form
          :server-errors="addCityServerErrors"
          @submit="addNewCity"
        />
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.settings {
  position: absolute;
  top: 0;
  left: 0;
  background: $white;
  width: 100%;
  min-height: 100%;
  padding: $app-padding;
  box-sizing: border-box;

  &__header {
    margin-bottom: 20px;
    @extend %main-font-bold;
  }

  &__locations {
    margin-bottom: 20px;
    max-height: $app-height * 0.7;
    overflow-y: auto;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
