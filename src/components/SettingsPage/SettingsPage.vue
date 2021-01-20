<script>
import SettingsPageTrigger from './SettingsPageTrigger.vue';
import SettingsPageContent from './SettingsPageContent.vue';

export default {
  name: 'SettingsPage',
  components: { SettingsPageTrigger, SettingsPageContent },

  data: () => ({
    isSettingsVisible: false,
  }),

  methods: {
    switchSettingsVisibility() {
      this.isSettingsVisible = !this.isSettingsVisible;
    },
  },
};
</script>

<template>
  <div class="display-settings">
    <settings-page-trigger
      :is-active="!isSettingsVisible"
      @click.native="switchSettingsVisibility"
    />
    <settings-page-content
      :is-active="isSettingsVisible"
      @close="isSettingsVisible = false"
    />
  </div>
</template>

<style lang="scss" scoped></style>
