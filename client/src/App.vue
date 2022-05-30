<script lang="ts" setup>
import { useLayoutStore } from './stores';
import LaviteSnackbar from './components/Lavite/LaviteSnackbar.vue';
import { onMounted, ref } from '@vue/composition-api';
import { getRuntimeVM } from './utils/vm';
import { ILaviteSnackbar } from './components/Lavite/components';

const layoutStore = useLayoutStore()
layoutStore.darkModeInit()

const vm = getRuntimeVM();
const snackbars = ref<ILaviteSnackbar | null>(null);

onMounted(() => {
    if (vm) {
        if (snackbars.value) {
            vm.$root.$snackbars = snackbars.value;
        }
    }
})
</script>

<template>
    <VApp id="lavite" dark>
        <RouterView />

        <LaviteSnackbar ref="snackbars" />
    </VApp>
</template>
