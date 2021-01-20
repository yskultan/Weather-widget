<script>
export default {
  name: 'UiIcon',

  props: {
    clickable: {
      type: Boolean,
      default: false,
    },

    deg: {
      type: Number,
      default: 0,
    }
  },

  computed: {
    clickableClass() {
      return this.clickable ? 'clickable' : '';
    },

    rotatedIcon() {
      return { transform: `rotate(${ this.deg }deg)` }
    }
  },
};
</script>

<template>
  <span
    class="ui-icon"
    :class="clickableClass"
    :style="rotatedIcon"
  >
    <slot />
  </span>
</template>

<style lang="scss" scoped>
$default-opacity: 0.7;

.ui-icon {
  user-select: none;
  outline: none;
}

.fluent-icon {
  width: 32px;
  height: 32px;
  margin-top: 1px;
  margin-left: -3px;

  &__custom {
    width: 30px;
    height: 30px;
    margin-top: 5px;
  }
}

.clickable {
  transition: 0.2s all;
  &:hover {
    opacity: $default-opacity;
    cursor: pointer;
  }
}
</style>
