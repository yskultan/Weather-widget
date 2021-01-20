<script>
export default {
  name: 'LocationDisplay',

  props: {
    location: {
      type: Object,
      required: true,
    },

    removable: {
      type: Boolean,
      default: true,
    },

    withHandle: {
      type: Boolean,
      default: false,
    },

    handleClass: {
      type: String,
      default: 'js-handle',
    },
  },

  methods: {
    removeLocation() {
      if (this.removable) {
        this.$emit('remove', this.location);
      }
    },
  },
};
</script>

<template>
  <div class="location">
    <div class="location__left">
      <ui-icon
        v-if="withHandle"
        class="handle location__burger"
        :class="handleClass"
      >
        <img class="fluent-icon__custom" src="../../images/GlobalNavButton.png">
      </ui-icon>
      <div>
        {{ location.city + ',' | capitalize }} {{ location.countryCode | uppercase }}
      </div>
    </div>
    <div>
      <ui-icon
        v-if="removable"
        class="i-delete"
        clickable
        @click.native="removeLocation"
      >
        <img class="fluent-icon__custom" src="../../images/Delete.png">
      </ui-icon>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.location {
  background: $light-gray;
  padding: 8px 12px;
  height: 30px;
  border-radius: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__burger {
    margin-right: 6px;
  }

  &__left {
    display: flex;
    align-items: center;
  }
}

.handle {
  cursor: move;
}
</style>
