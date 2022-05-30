import { getRuntimeVM } from '@/utils/vm';
import { computed } from '@vue/composition-api';
import { RawLocation } from 'vue-router';

export function useRouter() {
    const vm = getRuntimeVM();

    const route = computed(() => {
        return vm.$route;
    });

    function withHref(to: RawLocation) {
        return vm.$router.resolve(to, vm.$route).href;
    }

    return {
        route,
        router: vm.$router,
        withHref
    };
}