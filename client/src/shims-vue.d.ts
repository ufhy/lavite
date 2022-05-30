import { ILaviteSnackbar } from '@/components/Lavite/components';

declare module 'vue/types/vue' {
    interface Vue {
        $snackbars: ILaviteSnackbar;
    }
}
