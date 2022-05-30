<script lang="ts" setup>
import LaviteAppBar from '@/components/Lavite/LaviteAppBar.vue';
</script>

<template>
    <VMain>
        <LaviteAppBar />
        
        <VContainer class="!tw-pt-6">
            <VCard>
                <VCardText>
                    You're logged in!
                </VCardText>
            </VCard>
        </VContainer>
    </VMain>
</template>