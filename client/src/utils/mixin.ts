import Vue from 'vue';
import { setRuntimeVM } from './vm';

Vue.mixin({
    beforeCreate: setRuntimeVM,
});