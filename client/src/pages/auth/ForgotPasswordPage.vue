<script lang="ts" setup>
import { useSnackbar } from '@/components/Lavite/composable';
import { useLaravelForm } from '@/composable';

type RegisterFormType = {
    email: string;
}

const { snackbarErrorHttp, snackbarSuccess } = useSnackbar()
const { laForm } = useLaravelForm<RegisterFormType>({
    email: '',
});

function submit() {
    if (laForm.busy) {
        return false;
    }

    laForm.post('auth/forgot-password').then((response) => {
        const { data } = response;
        snackbarSuccess(data.message);
        laForm.email = '';
    }).catch((error) => {
        snackbarErrorHttp(error)
    });
}
</script>

<template>
    <VMain>
        <div class="tw-relative tw-flex tw-items-top tw-justify-center tw-min-h-screen sm:tw-items-center tw-py-4 sm:tw-pt-0">
            <div class="tw-w-full sm:tw-max-w-md">
                <form @submit.prevent="submit">
                    <VCard :loading="laForm.busy" :disabled="laForm.busy">
                        <VCardTitle>
                            Forgot Password
                        </VCardTitle>
                        <VCardText>
                            <p>
                                Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.
                            </p>
                            <VTextField 
                                v-model="laForm.email"
                                type="email"
                                name="email"
                                label="Email"
                                placeholder="Email"
                                required autofocus
                                autocomplete="email"
                                :error-messages="laForm.errors.getAll('email')"
                            />
                        </VCardText>
                        <VCardActions>
                            <VSpacer />
                            <RouterLink :to="{name: 'auth.login'}" class="tw-mr-4">
                                Back to login
                            </RouterLink>

                            <VBtn
                                color="primary"
                                type="submit"
                                :loading="laForm.busy">
                                Email Password Reset Link
                            </VBtn>
                        </VCardActions>
                    </VCard>
                </form>
            </div>
        </div>
    </VMain>
</template>