<script lang="ts" setup>
import ProfileUpdateProfile from './partials/ProfileUpdateProfile.vue';
import ProfileUpdatePassword from './partials/ProfileUpdatePassword.vue';
import LaviteAppBar from '@/components/Lavite/LaviteAppBar.vue';
</script>

<template>
    <VMain>
        <LaviteAppBar />
        
        <VContainer class="!tw-pt-6">
            <ProfileUpdateProfile />
            <VDivider class="!tw-my-8" />
            
            <ProfileUpdatePassword />
            <VDivider class="!tw-my-8" />
        </VContainer>
    </VMain>
</template>