<script>
export default {
  name: 'SettingsPageTrigger',
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <div class="settings-trigger">
    <ui-icon v-if="isActive" clickable>
      <img class="fluent-icon" src="../../images/Settings.png">
    </ui-icon>
    <ui-icon v-else clickable>
      <img class="fluent-icon" src="../../images/Cancel.png">
    </ui-icon>
  </div>
</template>

<style lang="scss" scoped>
.settings-trigger {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 5;
}
</style>
