<script lang="ts" setup>
defineProps({
    title: String,
    description: String,
})
</script>

<template>
    <div class="md:tw-grid md:tw-grid-cols-3 md:tw-gap-6">
        <div class="md:tw-col-span-1 tw-flex tw-justify-between">
            <div class="">
                <h3 class="tw-text-lg tw-font-medium">
                    {{ title }}
                </h3>

                <div class="tw-mt-1 tw-text-sm text--secondary">
                    {{ description }}
                </div>
            </div>
        </div>

        <div class="tw-mt-5 md:tw-mt-0 md:tw-col-span-2">
            <slot></slot>
        </div>
    </div>
</template>