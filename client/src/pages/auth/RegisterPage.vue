<script lang="ts" setup>
import { useSnackbar } from '@/components/Lavite/composable';
import { useLaravelForm } from '@/composable';

type RegisterFormType = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

const { snackbarErrorHttp } = useSnackbar()
const { laForm } = useLaravelForm<RegisterFormType>({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

function submit() {
    if (laForm.busy) {
        return false;
    }

    laForm.clear();
    laForm.post('auth/register').then((response) => {
        const { data } = response;
        if (data.url) {
            window.location.replace(data.url);
        } else {
            window.location.reload();
        }
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
                            Register
                        </VCardTitle>
                        <VCardText>
                            <VTextField 
                                v-model="laForm.name"
                                name="name"
                                label="Name"
                                placeholder="Name"
                                required autofocus
                                autocomplete="name"
                                :error-messages="laForm.errors.getAll('name')"
                            />
                            <VTextField 
                                v-model="laForm.email"
                                type="email"
                                name="email"
                                label="Email"
                                placeholder="Email"
                                required
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
                            <RouterLink :to="{name: 'login'}" class="tw-mr-4">
                                Already registered?
                            </RouterLink>

                            <VBtn
                                color="primary"
                                type="submit"
                                :loading="laForm.busy">
                                Register
                            </VBtn>
                        </VCardActions>
                    </VCard>
                </form>
            </div>
        </div>
    </VMain>
</template>