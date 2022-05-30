<script lang="ts" setup>
import { useRouter } from '@/composable';
import { useLayoutStore, useUserStore } from '@/stores';
import { computed, toRefs } from '@vue/composition-api';

const userStore = useUserStore()

const layoutStore = useLayoutStore()
const { darkMode } = toRefs(layoutStore)

const { route } = useRouter()

const titlePage = computed(() => {
    if (route.value.meta && route.value.meta.title) {
        return route.value.meta.title;
    }

    return null
})
</script>

<template>
    <VAppBar app extended>
        <a href="/dashboard" class="tw-font-bold tw-text-4xl tw-text-blue-700 dark:!tw-text-blue-400">
            LaVite
        </a>

        <VSpacer />

        <VBtn depressed :to="{name: 'dashboard'}" color="primary" text>
            Dashboard
        </VBtn>
        <VBtn depressed :to="{name: 'profile'}"  color="primary" text>
            Profile
        </VBtn>
        <VDivider vertical class="tw-mx-6" />

        <VSwitch 
            v-model="darkMode" 
            hide-details
            class="!tw-mr-4"
            :label="darkMode ? 'Dark mode' : 'Light mode'" 
            @change="layoutStore.darkModeToggle" 
        />

        <VTooltip bottom>
            <template v-slot:activator="{on}">
                <VBtn v-on="on" icon color="error" @click="userStore.logout" class="!tw-mr-0">
                    <VIcon>M14.08 15.59L16.67 13H7v-2h9.67l-2.59-2.59L15.5 7l5 5l-5 5l-1.42-1.41M19 3a2 2 0 0 1 2 2v4.67l-2-2V5H5v14h14v-2.67l2-2V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2h14Z</VIcon>
                </VBtn>
            </template>
            Click to Log out
        </VTooltip>

        <template v-if="titlePage" v-slot:extension>
            <VContainer>
                <div class="tw-font-semibold tw-text-2xl">{{ titlePage }}</div>
            </VContainer>
        </template>
    </VAppBar>
</template>