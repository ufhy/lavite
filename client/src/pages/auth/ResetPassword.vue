<script lang="ts" setup>
import { useSnackbar } from '@/components/Lavite/composable';
import { useLaravelForm, useRouter } from '@/composable';

type RegisterFormType = {
    token: string;
    email: string;
    password: string;
    password_confirmation: string;
}

const { snackbarErrorHttp, snackbarSuccess } = useSnackbar()
const { laForm } = useLaravelForm<RegisterFormType>({
    token: '',
    email: '',
    password: '',
    password_confirmation: '',
});

const { route, router } = useRouter();
laForm.token = route.value.params['token'] ? route.value.params['token'] : ''
laForm.email = route.value.query['email'] ? route.value.query['email'] as string : ''

function submit() {
    if (laForm.busy) {
        return false;
    }

    laForm.post('auth/reset-password').then((response) => {
        const { data } = response;
        snackbarSuccess(data.message);
        router.push({ name: 'auth.login' })
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
                            Reset Password
                        </VCardTitle>
                        <VCardText>
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
                            <VTextField 
                                v-model="laForm.password"
                                type="password"
                                name="password"
                                label="Password"
                                placeholder="Password"
                                required
                                autocomplete="new-password"
                                :error-messages="laForm.errors.getAll('password')"
                            />
                            <VTextField 
                                v-model="laForm.password_confirmation"
                                type="password"
                                name="password_confirmation"
                                label="Confirm Password"
                                placeholder="Confirm Password"
                                required
                                autocomplete="new-password"
                                :error-messages="laForm.errors.getAll('password_confirmation')"
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
                                Reset Password
                            </VBtn>
                        </VCardActions>
                    </VCard>
                </form>
            </div>
        </div>
    </VMain>
</template>