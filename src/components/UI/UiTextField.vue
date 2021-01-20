<script>
import trimSpaces from '@/utils/trimSpaces';

export default {
  name: 'UiTextField',

  props: {
    value: {
      type: [String, Number],
      default: '',
    },

    trimSpaces: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    inputValue: '',
  }),

  watch: {
    inputValue(newValue) {
      if (newValue !== this.value) {
        this.$emit('input', newValue);
      }
    },

    value: {
      handler(newValue) {
        if (newValue !== this.inputValue) {
          this.inputValue = newValue;
        }
      },
      immediate: true,
    },
  },

  methods: {
    updateValue(event) {
      let result = event.target.value;
      if (this.trimSpaces) result = trimSpaces(result);
      this.inputValue = result;
    },
  },
};
</script>

<template>
  <div class="ui-text-field">
    <input
      v-model="inputValue"
      v-bind="$attrs"
      class="field"
      @input="updateValue"
    />
  </div>
</template>

<style lang="scss" scoped>
.field {
  width: 100%;
  box-sizing: border-box;
  outline: none;
  border-radius: 0px;
  border: 1.5px solid $blue;
  padding: 8px;
  height: 45px;
  background: $white;
  color: $black;
  font-size: $base-font-size;

  &::placeholder {
    color: black;
    opacity: 0.3;
  }

  &:disabled {
    opacity: 0.6;
  }
}
</style>
