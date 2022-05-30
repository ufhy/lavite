<script lang="ts" setup>
import { useSnackbar } from '@/components/Lavite/composable';
import { useLaravelForm } from '@/composable';
import ProfileSection from '../components/ProfileSection.vue';

type UpdatePasswordFormType = {
    current_password: string;
    password: string;
    password_confirmation: string;
}

const { laForm } = useLaravelForm<UpdatePasswordFormType>({
    current_password: '',
    password: '',
    password_confirmation: '',
});

const { snackbarErrorHttp, snackbarSuccess } = useSnackbar()

function submit() {
    if (laForm.busy) {
        return false;
    }

    laForm.clear();
    laForm.put('auth/user/password').then((response) => {
        const { data } = response;
        snackbarSuccess(data.message);

        laForm.reset();
    }).catch((error) => {
        snackbarErrorHttp(error)
    });
}
</script>

<template>
    <ProfileSection 
        title="Update Password"
        description="Ensure your account is using a long, random password to stay secure.">
        <form @submit.prevent="submit">
            <VCard :loading="laForm.busy" :disabled="laForm.busy">
                <VCardText>
                    <div class="tw-grid tw-grid-cols-6 tw-gap-6">
                        <div class="tw-col-span-6 sm:tw-col-span-4">
                            <VTextField 
                                v-model="laForm.current_password"
                                label="Current Password"
                                name="current_password"
                                type="password"
                                autocomplete="current-password"
                                :error-count="laForm.errors.getAll('current_password').length"
                                :error-messages="laForm.errors.getAll('current_password')"
                            />
                            <VTextField 
                                v-model="laForm.password"
                                label="New Password"
                                name="password"
                                type="password"
                                autocomplete="new-password"
                                :error-count="laForm.errors.getAll('password').length"
                                :error-messages="laForm.errors.getAll('password')"
                            />
                            <VTextField 
                                v-model="laForm.password_confirmation"
                                label="Confirm Password"
                                name="password_confirmation"
                                type="password"
                                autocomplete="new-password"
                                :error-count="laForm.errors.getAll('password_confirmation').length"
                                :error-messages="laForm.errors.getAll('password_confirmation')"
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