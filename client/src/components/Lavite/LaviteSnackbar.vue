<script setup lang="ts">
import { useVuetify } from '@/plugins/vuetify';
import { ref } from '@vue/composition-api';
import { LaviteSnackbarOptionType } from './components';

const model = ref(false);
const timeout = ref(6000);
const text = ref('');
const y = ref('top');
const x = ref(null as string|null);
const typeSnackbar = ref('info');
const vertical = ref(false);
const mode = ref('single-line');

const vuetify = useVuetify();

function open (message: string, type: string, options?: LaviteSnackbarOptionType) {
    if (message) {
        text.value = message;
    }

    if (type) {
        typeSnackbar.value = type;
    }

    if (typeof options !== 'undefined') {
        timeout.value = options.timeout || 6000;
        y.value = options.y || 'bottom';
        x.value = options.x || null;
        mode.value = options.mode || 'single-line';
        vertical.value = options.vertical || false;
    }

    if (vuetify.breakpoint.smAndDown) {
        y.value = 'bottom';
        mode.value = 'multi-line';
    }
    model.value = true;
}
function success (message: string, options?: LaviteSnackbarOptionType) {
    open(message, 'success', options);
}
function error (message: string, options?: LaviteSnackbarOptionType) {
    open(message, 'error', options);
}
function warning (message: string, options?: LaviteSnackbarOptionType) {
    open(message, 'warning', options);
}
function info (message: string, options?: LaviteSnackbarOptionType) {
    open(message, 'info', options);
}
function show(message: string, options?: LaviteSnackbarOptionType) {
    if (options?.type === 'success') {
        success(message, options);
    } else if (options?.type === 'error') {
        error(message, options);
    } else if (options?.type === 'warning') {
        warning(message, options);
    } else if (options?.type === 'info') {
        info(message, options);
    }
}
function hide() {
    model.value = false;
}
function onClose(payload: boolean) {
    if (!payload) {
        text.value = '';
    }
}

defineExpose({ open, success, error, warning, info, show, hide, onClose });
</script>

<template>
    <VSnackbar
        app
        v-model="model"
        :timeout="timeout"
        :top="y === 'top'"
        :bottom="y === 'bottom'"
        :left="x === 'left'"
        :right="x === 'right'"
        :multi-line="mode === 'multi-line'"
        :vertical="vertical"
        :color="typeSnackbar"
        @input="onClose">
        {{ text }}
        <template v-slot:action="{ attrs }">
            <v-btn
                text
                v-bind="attrs"
                @click="model = false">
                <span class="text-uppercase text-over">Close</span>
            </v-btn>
        </template>
    </VSnackbar>
</template>
