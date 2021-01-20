/* eslint-disable no-param-reassign */
import {
  DEFAULT_UNITS_TYPE,
  SUPPORTED_UNITS,
  DEFAULT_INSTANCE_KEY,
} from '@/config/general';

const GeneralPlugin = {
  install(Vue, { units = DEFAULT_UNITS_TYPE } = {}) {
    Vue.prototype.$unitsType = units;

    Vue.prototype.$setInstanceId = (instanceId) => {
      Vue.prototype.$instanceId = instanceId || DEFAULT_INSTANCE_KEY;
    };

    Vue.prototype.$setUnitsType = (type) => {
      if (SUPPORTED_UNITS.includes(type)) {
        Vue.prototype.$unitsType = type;
      }
    };
  },
};

export default GeneralPlugin;
