import Vue from 'vue';

interface Runtime {
    vm?: Vue;
}

const runtime: Runtime = {};

export function getRuntimeVM(): Vue {
    if (runtime.vm) {
        return runtime.vm;
    }

    throw ReferenceError('Vue instance is not defined');
}

export function setRuntimeVM(this: Vue, vue?: Vue): void {
    const vm = this || vue;
    if (typeof vm?.$options.setup === 'function') {
        runtime.vm = vm;
    }
}
