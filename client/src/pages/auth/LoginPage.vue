<script lang="ts" setup>
import { useSnackbar } from '@/components/Lavite/composable';
import { useLaravelForm } from '@/composable';

type LoginFormType = {
    email: string;
    password: string;
    remember: boolean;
}

const canResetPassword = LAVITE.hasResetPassword

const { snackbarErrorHttp } = useSnackbar()
const { laForm } = useLaravelForm<LoginFormType>({
    email: '',
    password: '',
    remember: false,
});

function submit() {
    if (laForm.busy) {
        return false;
    }

    laForm.clear();
    laForm.post('auth/login').then((response) => {
        const { data } = response;
        if (data.url) {
            window.location.replace(data.url);
        } else {
            window.location.reload();
        }
    }).catch((error) => {
        laForm.email = '';
        laForm.password = '';
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
                            Log in
                        </VCardTitle>
                        <VCardText>
                            <VTextField 
                                v-model="laForm.email"
                                label="Email"
                                placeholder="Email"
                                name="email"
                                type="email"
                                autocomplete="username"
                                autofocus
                                :error-messages="laForm.errors.getAll('email')"
                            />
                            <VTextField 
                                v-model="laForm.password"
                                label="Password"
                                placeholder="Password"
                                name="password"
                                type="password"
                                autocomplete="current-password"
                                :error-messages="laForm.errors.getAll('password')"
                            />
                            <VCheckbox 
                                v-model="laForm.remember"
                                name="remember"
                                label="Remember Me"
                                :error-messages="laForm.errors.getAll('remember')"
                            />
                        </VCardText>
                        <VCardActions>
                            <VSpacer />
                            <RouterLink v-if="canResetPassword" :to="{name: 'auth.password.request'}" class="tw-mr-4">
                                Forgot your password?
                            </RouterLink>

                            <VBtn
                                color="primary"
                                type="submit"
                                :loading="laForm.busy">
                                Log in
                            </VBtn>
                        </VCardActions>
                    </VCard>
                </form>
            </div>
        </div>
    </VMain>
</template>