<script lang="ts" setup>
import { useSnackbar } from '@/components/Lavite/composable';
import { useLaravelForm } from '@/composable';
import { useUserStore } from '@/stores';
import { toRefs } from '@vue/composition-api';
import ProfileSection from '../components/ProfileSection.vue';

type ProfileInformationFormType = {
    name: string;
    email: string;
}

const userStore = useUserStore()
const { user } = toRefs(userStore)

const { laForm } = useLaravelForm<ProfileInformationFormType>({
    name: user.value ? user.value.name : '',
    email: user.value ? user.value.email : '',
});

const { snackbarErrorHttp, snackbarSuccess } = useSnackbar()

function submit() {
    if (laForm.busy) {
        return false;
    }

    laForm.clear();
    laForm.put('auth/user/profile-information').then(() => {
        window.location.reload();
    }).catch((error) => {
        snackbarErrorHttp(error)
    });
}
</script>

<template>
    <ProfileSection 
        title="Profile Information"
        description="Update your account's profile information and email address.">
        <form @submit.prevent="submit">
            <VCard :loading="laForm.busy" :disabled="laForm.busy">
                <VCardText>
                    <div class="tw-grid tw-grid-cols-6 tw-gap-6">
                        <div class="tw-col-span-6 sm:tw-col-span-4">
                            <VTextField 
                                v-model="laForm.name"
                                label="Name"
                                :error-messages="laForm.errors.getAll('name')"
                            />
                            <VTextField 
                                v-model="laForm.email"
                                label="Email"
                                :error-messages="laForm.errors.getAll('email')"
                            />
                        </div>
                    </div>
                </VCardText>

                <VDivider />
                <VCardActions>
                    <div class="tw-mr-3">
                        <transition leave-active-class="transition ease-in duration-1000" leave-from-class="opacity-100" leave-to-class="opacity-0">
                            <div v-show="laForm.successful" class="text-sm success--text">
                                Saved.
                            </div>
                        </transition>
                    </div>
                    <VSpacer />
                    <VBtn
                        color="primary"
                        type="submit"
                        :loading="laForm.busy">
                        Save
                    </VBtn>
                </VCardActions>
            </VCard>
        </form>
    </ProfileSection>
</template>