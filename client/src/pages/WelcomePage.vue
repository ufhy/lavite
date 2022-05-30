<script lang="ts" setup>
import { useLayoutStore, useUserStore } from '@/stores';
import { toRefs } from '@vue/composition-api';

const version = LAVITE.version
const canLogin = LAVITE.hasLogin
const canRegister = LAVITE.hasRegister

const layoutStore = useLayoutStore();
const { darkMode } = toRefs(layoutStore);

const userStore = useUserStore();

const vuetifyVersion = __VUETIFY_VERSION__
const tailwindcssVersion = __TAILWINDCSS_VERSION__
const viteVersion = __VITE_VERSION__
</script>

<template>
    <VMain>
        <div class="tw-relative tw-flex tw-items-top tw-justify-center tw-min-h-screen sm:tw-items-center tw-py-4 sm:tw-pt-0">
            <VAppBar app fixed flat class="transparent">
                <VSwitch 
                    v-model="darkMode" 
                    hide-details
                    :label="darkMode ? 'Dark mode' : 'Light mode'" 
                    @change="layoutStore.darkModeToggle" 
                />
                <VSpacer />
                <template v-if="canLogin">
                    <template v-if="userStore.isLogin">
                        <RouterLink :to="{name: 'dashboard'}" class="tw-ml-4 tw-underline">Dashboard</RouterLink>
                    </template>
                    <template v-else>
                        <RouterLink :to="{name: 'auth.login'}" class="tw-ml-4 tw-underline">Log in</RouterLink>
                    </template>

                    <template v-if="canRegister">
                        <RouterLink :to="{name: 'auth.register'}" class="tw-ml-4 tw-underline">Register</RouterLink>
                    </template>
                </template>
            </VAppBar>

            <div class="tw-max-w-6xl tw-mx-auto sm:tw-px-6 lg:tw-px-8">
                <div>
                    <div class="tw-flex tw-justify-center tw-pt-8 sm:tw-pt-0">
                        <a href="https://laravel.com/" target="_blank" class="!tw-text-[#FF2D20]">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 444 453" xml:space="preserve" class="tw-fill-current tw-h-36">
                                <path class="st0" d="M357.38,149.42c-0.03-0.13-0.11-0.24-0.15-0.37c-0.09-0.23-0.16-0.47-0.28-0.68c-0.08-0.14-0.2-0.26-0.3-0.39
                                    c-0.13-0.17-0.24-0.36-0.39-0.51c-0.13-0.13-0.29-0.22-0.43-0.33c-0.16-0.13-0.3-0.27-0.48-0.37c0,0,0,0,0,0c0,0,0,0,0,0
                                    l-52.45-30.2c-1.35-0.78-3.01-0.78-4.36,0l-52.45,30.2c0,0,0,0,0,0c0,0,0,0,0,0c-0.18,0.1-0.32,0.25-0.48,0.37
                                    c-0.14,0.11-0.3,0.2-0.43,0.33c-0.15,0.15-0.26,0.34-0.39,0.51c-0.1,0.13-0.22,0.25-0.3,0.39c-0.12,0.21-0.2,0.45-0.28,0.68
                                    c-0.05,0.12-0.12,0.24-0.15,0.37c-0.1,0.37-0.15,0.75-0.15,1.14v57.36l-43.71,25.17V120.87c0-0.39-0.05-0.77-0.15-1.14
                                    c-0.03-0.13-0.11-0.24-0.15-0.37c-0.09-0.23-0.16-0.47-0.28-0.68c-0.08-0.14-0.2-0.26-0.3-0.39c-0.13-0.17-0.24-0.36-0.39-0.51
                                    c-0.13-0.13-0.29-0.22-0.43-0.33c-0.16-0.13-0.3-0.27-0.48-0.37c0,0,0,0,0,0c0,0,0,0,0,0l-52.45-30.2c-1.35-0.78-3.01-0.78-4.36,0
                                    l-52.45,30.2c0,0,0,0,0,0c0,0,0,0,0,0c-0.18,0.1-0.32,0.25-0.48,0.37c-0.14,0.11-0.3,0.2-0.43,0.33c-0.15,0.15-0.26,0.34-0.39,0.51
                                    c-0.1,0.13-0.22,0.25-0.3,0.39c-0.12,0.21-0.2,0.45-0.28,0.68c-0.05,0.12-0.12,0.24-0.15,0.37c-0.1,0.37-0.15,0.75-0.15,1.14v179.66
                                    c0,1.56,0.84,3.01,2.19,3.79l104.91,60.4c0.23,0.13,0.48,0.21,0.72,0.3c0.11,0.04,0.22,0.11,0.34,0.14c0.37,0.1,0.74,0.15,1.12,0.15
                                    s0.75-0.05,1.12-0.15c0.1-0.03,0.19-0.09,0.29-0.12c0.26-0.09,0.52-0.18,0.76-0.31l104.91-60.4c1.36-0.78,2.19-2.22,2.19-3.79
                                    v-57.36l50.26-28.94c1.36-0.78,2.19-2.22,2.19-3.79v-59.89C357.53,150.17,357.47,149.79,357.38,149.42z M195.78,295.5l-43.63-24.69
                                    l45.82-26.38c0,0,0,0,0,0l50.27-28.94l43.67,25.14l-32.04,18.29L195.78,295.5z M296.33,183.29v49.8l-18.36-10.57l-25.36-14.6v-49.8
                                    l18.36,10.57L296.33,183.29z M300.7,125.4l43.69,25.16l-43.69,25.16l-43.69-25.16L300.7,125.4z M166.07,252.72l-18.36,10.57V153.6
                                    l25.36-14.6l18.36-10.57v109.68L166.07,252.72z M143.34,95.72l43.69,25.16l-43.69,25.16l-43.69-25.16L143.34,95.72z M95.25,128.43
                                    L113.61,139l25.36,14.6v117.24c0,0,0,0.01,0,0.01s0,0.01,0,0.01c0,0.17,0.05,0.33,0.07,0.49c0.03,0.21,0.03,0.43,0.09,0.64
                                    c0,0,0,0.01,0,0.01c0.05,0.17,0.14,0.33,0.21,0.49c0.08,0.18,0.13,0.38,0.23,0.55c0,0,0,0.01,0.01,0.01
                                    c0.09,0.15,0.22,0.28,0.33,0.42c0.12,0.16,0.22,0.32,0.36,0.46c0,0,0.01,0.01,0.01,0.01c0.12,0.12,0.28,0.21,0.42,0.32
                                    c0.16,0.12,0.3,0.26,0.47,0.36c0.01,0,0.01,0,0.02,0.01c0.01,0,0.01,0.01,0.02,0.01l50.24,28.43v50.29L95.25,298V128.43z
                                    M296.33,298l-96.17,55.37v-50.3l71.22-40.66l24.95-14.24V298z M348.78,207.92l-43.71,25.17v-49.8l25.36-14.6l18.36-10.57V207.92z"
                                />
                            </svg>
                        </a>
                    </div>

                    <VCard class="tw-mt-8">
                        <div class="tw-p-6">
                            <div class="tw-text-3xl tw-font-bold tw-text-center tw-mb-4">
                                The PHP Framework <br/>
                                <span class="!tw-text-[#FF2D20]">for Web Artisans</span>
                            </div>
                            <p class="tw-text-center tw-text-lg !tw-mb-10">
                                Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.
                            </p>
                            <div class="tw-flex tw-flex-col md:tw-flex-row tw-justify-center">
                                <VBtn large depressed class="!tw-bg-[#FF2D20] !tw-text-white !tw-rounded-none tw-mb-2 md:tw-mb-0 md:tw-mr-2">Get Started</VBtn>
                                <VBtn large depressed outlined class="!tw-border-[#FF2D20] hover:!tw-bg-[#FF2D20] !tw-text-[#FF2D20] dark:!tw-text-white hover:!tw-text-white !tw-rounded-none tw-mt-2 md:tw-mt-0 tw-mb-2 md:tw-mb-0 md:tw-ml-2 md:tw-mr-2">Learn More</VBtn>
                            </div>
                        </div>

                        <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-border-t tw-border-gray-200 dark:tw-border-gray-700">
                            <div class="tw-p-6">
                                <div class="tw-flex tw-items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="tw-w-8 tw-h-8 tw-text-gray-500"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                                    <div class="tw-ml-4 tw-text-lg tw-leading-7 tw-font-semibold hover:tw-underline">
                                        <a href="https://laravel.com/docs">Documentation</a>
                                    </div>
                                </div>

                                <div class="tw-ml-12">
                                    <div class="tw-mt-2 tw-text-gray-600 dark:tw-text-gray-400 tw-text-sm tw-font-sans">
                                        Laravel has wonderful, thorough documentation covering every aspect of the framework. Whether you are new to the framework or have previous experience with Laravel, we recommend reading all of the documentation from beginning to end.
                                    </div>
                                </div>
                            </div>

                            <div class="tw-p-6 tw-border-t tw-border-gray-200 dark:tw-border-gray-700 md:tw-border-t-0 md:tw-border-l">
                                <div class="tw-flex tw-items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="tw-w-8 tw-h-8 tw-text-gray-500"><path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    <div class="tw-ml-4 tw-text-lg tw-leading-7 tw-font-semibold hover:tw-underline">
                                        <a href="https://laracasts.com">Laracasts</a>
                                    </div>
                                </div>

                                <div class="tw-ml-12">
                                    <div class="tw-mt-2 tw-text-gray-600 dark:tw-text-gray-400 tw-text-sm">
                                        Laracasts offers thousands of video tutorials on Laravel, PHP, and JavaScript development. Check them out, see for yourself, and massively level up your development skills in the process.
                                    </div>
                                </div>
                            </div>

                            <div class="tw-p-6 tw-border-t tw-border-gray-200 dark:tw-border-gray-700">
                                <div class="tw-flex tw-items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="tw-w-8 tw-h-8 tw-text-gray-500"><path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
                                    <div class="tw-ml-4 tw-text-lg tw-leading-7 tw-font-semibold hover:tw-underline">
                                        <a href="https://laravel-news.com/">Laravel News</a>
                                    </div>
                                </div>

                                <div class="tw-ml-12">
                                    <div class="tw-mt-2 tw-text-gray-600 dark:tw-text-gray-400 tw-text-sm">
                                        Laravel News is a community driven portal and newsletter aggregating all of the latest and most important news in the Laravel ecosystem, including new package releases and tutorials.
                                    </div>
                                </div>
                            </div>

                            <div class="tw-p-6 tw-border-t tw-border-gray-200 dark:tw-border-gray-700 md:tw-border-l">
                                <div class="tw-flex tw-items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="tw-w-8 tw-h-8 tw-text-gray-500"><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <div class="tw-ml-4 tw-text-lg tw-leading-7 tw-font-semibold tw-text-gray-900 dark:tw-text-white">Vibrant Ecosystem</div>
                                </div>

                                <div class="tw-ml-12">
                                    <div class="tw-mt-2 tw-text-gray-600 dark:tw-text-gray-400 tw-text-sm">
                                        Laravel's robust library of first-party tools and libraries, such as <a href="https://forge.laravel.com" class="underline">Forge</a>, <a href="https://vapor.laravel.com" class="underline">Vapor</a>, <a href="https://nova.laravel.com" class="underline">Nova</a>, and <a href="https://envoyer.io" class="underline">Envoyer</a> help you take your projects to the next level. Pair them with powerful open source libraries like <a href="https://laravel.com/docs/billing" class="underline">Cashier</a>, <a href="https://laravel.com/docs/dusk" class="underline">Dusk</a>, <a href="https://laravel.com/docs/broadcasting" class="underline">Echo</a>, <a href="https://laravel.com/docs/horizon" class="underline">Horizon</a>, <a href="https://laravel.com/docs/sanctum" class="underline">Sanctum</a>, <a href="https://laravel.com/docs/telescope" class="underline">Telescope</a>, and more.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </VCard>

                    <div class="tw-flex tw-justify-center tw-mt-4 sm:tw-items-center sm:tw-justify-between">
                        <VSpacer />
                        <div class="tw-ml-4 tw-text-center tw-text-sm tw-text-gray-500 sm:tw-text-right sm:tw-ml-0">
                            Laravel:{{ version }}
                        </div>
                    </div>
                </div>
                <VDivider class="!tw-my-10" />

                <div>
                    <div class="tw-flex tw-justify-center tw-pt-8 sm:tw-pt-0">
                        <a href="https://vuetifyjs.com/en/" target="_blank">
                            <svg width="671" height="670" viewBox="0 0 671 670" fill="none" xmlns="http://www.w3.org/2000/svg" class="tw-w-auto tw-h-36">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M335.712 653.926C511.874 653.926 654.68 511.12 654.68 334.959C654.68 158.798 511.874 15.9911 335.712 15.9911C159.551 15.9911 16.7446 158.798 16.7446 334.959C16.7446 511.12 159.551 653.926 335.712 653.926ZM335.712 660.28C515.381 660.28 661.034 514.628 661.034 334.959C661.034 155.289 515.381 9.63721 335.712 9.63721C156.042 9.63721 10.3906 155.289 10.3906 334.959C10.3906 514.628 156.042 660.28 335.712 660.28Z" fill="#AEDDFF"/>
                                <path d="M487.497 69.8977C497.814 69.8977 506.178 61.534 506.178 51.2169C506.178 40.8998 497.814 32.5361 487.497 32.5361C477.18 32.5361 468.816 40.8998 468.816 51.2169C468.816 61.534 477.18 69.8977 487.497 69.8977Z" fill="#1697F6"/>
                                <path d="M183.927 637.394C194.244 637.394 202.608 629.031 202.608 618.714C202.608 608.397 194.244 600.033 183.927 600.033C173.61 600.033 165.246 608.397 165.246 618.714C165.246 629.031 173.61 637.394 183.927 637.394Z" fill="#1697F6"/>
                                <path d="M340.924 289.261L243.566 457.927L335.753 617.695L457.854 406.209L579.899 194.724H395.469L340.924 289.261Z" fill="#1697F6"/>
                                <path d="M213.71 406.209L220.104 417.331L311.179 259.51L348.598 194.724H335.755H91.6094L213.71 406.209Z" fill="#AEDDFF"/>
                                <path d="M395.469 194.724C441.618 346.595 335.753 617.695 335.753 617.695L243.566 457.927L395.469 194.724Z" fill="#1867C0"/>
                                <path d="M348.598 194.724C154.16 194.724 220.103 417.331 220.103 417.331L348.598 194.724Z" fill="#7BC6FF"/>
                            </svg>
                        </a>
                    </div>

                    <VCard class="tw-mt-8">
                        <div class="tw-p-6">
                            <div class="tw-text-3xl tw-font-medium tw-text-center tw-mb-4">Material Design Framework</div>
                            <p class="tw-text-center tw-text-lg tw-font-light !tw-mb-10">
                                Vuetify is a Vue UI Library with beautifully handcrafted Material Components. No design skills required — everything you need to create amazing applications is at your fingertips.
                            </p>
                            <div class="tw-flex tw-flex-col md:tw-flex-row tw-justify-center">
                                <VBtn large depressed color="primary" class="tw-mb-2 md:tw-mb-0 md:tw-mr-2">Get Started</VBtn>
                                <VBtn large depressed color="primary" outlined class="tw-mt-2 md:tw-mt-0 tw-mb-2 md:tw-mb-0 md:tw-ml-2 md:tw-mr-2">Why Vuetify</VBtn>
                                <VBtn large depressed color="secondary" class="tw-mt-2 md:tw-mt-0 md:tw-ml-2">Github</VBtn>
                            </div>
                        </div>
                    </VCard>
                    <div class="tw-flex tw-justify-center tw-mt-4 sm:tw-items-center sm:tw-justify-between">
                        <VSpacer />
                        <div class="tw-ml-4 tw-text-center tw-text-sm tw-text-gray-500 sm:tw-text-right sm:tw-ml-0">
                            Vuetify:{{ vuetifyVersion }}
                        </div>
                    </div>
                </div>
                <VDivider class="!tw-my-10" />
                
                <div>
                    <div class="tw-flex tw-justify-center tw-pt-8 sm:tw-pt-0">
                        <a href="https://vuetifyjs.com/en/" target="_blank">
                            <svg viewBox="0 0 248 31" class="tw-text-slate-900 dark:tw-text-white tw-w-auto tw-h-10"><path fill-rule="evenodd" clip-rule="evenodd" d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z" fill="#38bdf8"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z" fill="currentColor"></path></svg>
                        </a>
                    </div>

                    <VCard class="tw-mt-8">
                        <div class="tw-p-6">
                            <div class="tw-text-3xl tw-font-bold tw-text-center tw-mb-4">
                                Rapidly build modern websites without ever leaving your HTML.
                            </div>
                            <p class="tw-text-center tw-text-lg !tw-mb-10">
                                A utility-first CSS framework packed with classes like <code class="primary--text">flex</code>, <code class="primary--text">pt-4</code>, <code class="primary--text">text-center</code> and <code class="primary--text">rotate-90</code> that can be composed to build any design, directly in your markup.
                            </p>
                            <div class="tw-flex tw-justify-center">
                                <a class="tw-bg-slate-900 hover:tw-bg-slate-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-slate-400 focus:tw-ring-offset-2 focus:tw-ring-offset-slate-50 !tw-text-white tw-font-semibold tw-h-12 tw-px-6 tw-rounded-lg tw-w-full tw-flex tw-items-center tw-justify-center sm:tw-w-auto dark:tw-bg-sky-500 dark:tw-highlight-white/20 dark:hover:tw-bg-sky-400" href="https://tailwindcss.com/docs/installation" target="_blank">
                                    Get started
                                </a>
                            </div>
                        </div>
                    </VCard>
                    <div class="tw-flex tw-justify-center tw-mt-4 sm:tw-items-center sm:tw-justify-between">
                        <VSpacer />
                        <div class="tw-ml-4 tw-text-center tw-text-sm tw-text-gray-500 sm:tw-text-right sm:tw-ml-0">
                            Tailwindcss:{{ tailwindcssVersion }}
                        </div>
                    </div>
                </div>
                <VDivider class="!tw-my-10" />

                <div>
                    <div class="tw-flex tw-justify-center tw-pt-8 sm:tw-pt-0">
                        <a href="https://vitejs.dev/" target="_blank">
                            <svg width="410" height="404" viewBox="0 0 410 404" fill="none" xmlns="http://www.w3.org/2000/svg" class="tw-w-auto tw-h-36">
                                <path d="M399.641 59.5246L215.643 388.545C211.844 395.338 202.084 395.378 198.228 388.618L10.5817 59.5563C6.38087 52.1896 12.6802 43.2665 21.0281 44.7586L205.223 77.6824C206.398 77.8924 207.601 77.8904 208.776 77.6763L389.119 44.8058C397.439 43.2894 403.768 52.1434 399.641 59.5246Z" fill="url(#paint0_linear)"/>
                                <path d="M292.965 1.5744L156.801 28.2552C154.563 28.6937 152.906 30.5903 152.771 32.8664L144.395 174.33C144.198 177.662 147.258 180.248 150.51 179.498L188.42 170.749C191.967 169.931 195.172 173.055 194.443 176.622L183.18 231.775C182.422 235.487 185.907 238.661 189.532 237.56L212.947 230.446C216.577 229.344 220.065 232.527 219.297 236.242L201.398 322.875C200.278 328.294 207.486 331.249 210.492 326.603L212.5 323.5L323.454 102.072C325.312 98.3645 322.108 94.137 318.036 94.9228L279.014 102.454C275.347 103.161 272.227 99.746 273.262 96.1583L298.731 7.86689C299.767 4.27314 296.636 0.855181 292.965 1.5744Z" fill="url(#paint1_linear)"/>
                                <defs>
                                <linearGradient id="paint0_linear" x1="6.00017" y1="32.9999" x2="235" y2="344" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#41D1FF"/>
                                <stop offset="1" stop-color="#BD34FE"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear" x1="194.651" y1="8.81818" x2="236.076" y2="292.989" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FFEA83"/>
                                <stop offset="0.0833333" stop-color="#FFDD35"/>
                                <stop offset="1" stop-color="#FFA800"/>
                                </linearGradient>
                                </defs>
                            </svg>
                        </a>
                    </div>

                    <VCard class="tw-mt-8">
                        <div class="tw-p-6">
                            <div class="tw-text-3xl tw-font-bold tw-text-center tw-mb-4">
                                Vite
                            </div>
                            <p class="tw-text-center tw-text-lg !tw-mb-10">
                                Next Generation Frontend Tooling
                            </p>
                            <div class="tw-flex tw-flex-col md:tw-flex-row tw-justify-center">
                                <VBtn large depressed class="!tw-bg-[#646cff] !tw-text-white tw-mb-2 md:tw-mb-0 md:tw-mr-2">Get Started</VBtn>
                                <VBtn large depressed outlined class="!tw-border-[#646cff] hover:!tw-bg-[#646cff] !tw-text-[#646cff] hover:!tw-text-white tw-mt-2 md:tw-mt-0 tw-mb-2 md:tw-mb-0 md:tw-ml-2 md:tw-mr-2">Learn More</VBtn>
                            </div>
                        </div>
                        <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-border-t tw-border-gray-200 dark:tw-border-gray-700">
                            <div class="tw-p-6">
                                <div class="tw-flex tw-items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="tw-w-8 tw-h-8 tw-text-gray-500"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                                    <div class="tw-ml-4 tw-text-lg tw-leading-7 tw-font-semibold tw-text-gray-900 dark:tw-text-white">Instant Server Start</div>
                                </div>

                                <div class="tw-ml-12">
                                    <div class="tw-mt-2 tw-text-gray-600 dark:tw-text-gray-400 tw-text-sm tw-font-sans">
                                        On demand file serving over native ESM, no bundling required!
                                    </div>
                                </div>
                            </div>

                            <div class="tw-p-6 tw-border-t tw-border-gray-200 dark:tw-border-gray-700 md:tw-border-t-0 md:tw-border-l">
                                <div class="tw-flex tw-items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="tw-w-8 tw-h-8 tw-text-gray-500"><path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    <div class="tw-ml-4 tw-text-lg tw-leading-7 tw-font-semibold tw-text-gray-900 dark:tw-text-white">Lightning Fast HMR</div>
                                </div>

                                <div class="tw-ml-12">
                                    <div class="tw-mt-2 tw-text-gray-600 dark:tw-text-gray-400 tw-text-sm">
                                        Hot Module Replacement (HMR) that stays fast regardless of app size.
                                    </div>
                                </div>
                            </div>

                            <div class="tw-p-6 tw-border-t tw-border-gray-200 dark:tw-border-gray-700 md:tw-border-t-0 md:tw-border-l">
                                <div class="tw-flex tw-items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="tw-w-8 tw-h-8 tw-text-gray-500"><path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
                                    <div class="tw-ml-4 tw-text-lg tw-leading-7 tw-font-semibold tw-text-gray-900 dark:tw-text-white">Rich Features</div>
                                </div>

                                <div class="tw-ml-12">
                                    <div class="tw-mt-2 tw-text-gray-600 dark:tw-text-gray-400 tw-text-sm">
                                        Out-of-the-box support for TypeScript, JSX, CSS and more.
                                    </div>
                                </div>
                            </div>

                            <div class="tw-p-6 tw-border-t tw-border-gray-200 dark:tw-border-gray-700 md:tw-border-l">
                                <div class="tw-flex tw-items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="tw-w-8 tw-h-8 tw-text-gray-500"><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <div class="tw-ml-4 tw-text-lg tw-leading-7 tw-font-semibold tw-text-gray-900 dark:tw-text-white">Optimized Build</div>
                                </div>

                                <div class="tw-ml-12">
                                    <div class="tw-mt-2 tw-text-gray-600 dark:tw-text-gray-400 tw-text-sm">
                                        Pre-configured Rollup build with multi-page and library mode support.
                                    </div>
                                </div>
                            </div>

                            <div class="tw-p-6 tw-border-t tw-border-gray-200 dark:tw-border-gray-700 md:tw-border-l">
                                <div class="tw-flex tw-items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="tw-w-8 tw-h-8 tw-text-gray-500"><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <div class="tw-ml-4 tw-text-lg tw-leading-7 tw-font-semibold tw-text-gray-900 dark:tw-text-white">Universal Plugins</div>
                                </div>

                                <div class="tw-ml-12">
                                    <div class="tw-mt-2 tw-text-gray-600 dark:tw-text-gray-400 tw-text-sm">
                                        Rollup-superset plugin interface shared between dev and build.
                                    </div>
                                </div>
                            </div>

                            <div class="tw-p-6 tw-border-t tw-border-gray-200 dark:tw-border-gray-700 md:tw-border-l">
                                <div class="tw-flex tw-items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="tw-w-8 tw-h-8 tw-text-gray-500"><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <div class="tw-ml-4 tw-text-lg tw-leading-7 tw-font-semibold tw-text-gray-900 dark:tw-text-white">Fully Typed APIs</div>
                                </div>

                                <div class="tw-ml-12">
                                    <div class="tw-mt-2 tw-text-gray-600 dark:tw-text-gray-400 tw-text-sm">
                                        Flexible programmatic APIs with full TypeScript typing.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </VCard>
                    <div class="tw-flex tw-justify-center tw-mt-4 sm:tw-items-center sm:tw-justify-between">
                        <VSpacer />
                        <div class="tw-ml-4 tw-text-center tw-text-sm tw-text-gray-500 sm:tw-text-right sm:tw-ml-0">
                            Vite:{{ viteVersion }}
                        </div>
                    </div>
                </div>
                <VDivider class="!tw-my-10" />
                
                <div class="tw-flex tw-items-center tw-justify-center tw-mb-20">
                    <svg width="188" height="28" viewBox="0 0 188 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="tw-h-10">
                        <path d="M93.295 3.65206L86.356 9.30495H90.8876V27.68L93.295 25.7411V3.65206Z" fill="#5A29E4"/>
                        <path d="M95.295 24.0997L102.356 18.305H97.6975V0.350052L95.295 2.02275V24.0997Z" fill="#5A29E4"/>
                        <path d="M182.695 6.95295C183.495 7.36895 184.071 7.72095 184.423 8.00895L186.919 3.25695C185.671 2.48895 184.167 1.80095 182.407 1.19295C180.679 0.584955 178.807 0.280952 176.791 0.280952C174.871 0.280952 173.095 0.600952 171.463 1.24095C169.863 1.88095 168.583 2.82495 167.623 4.07295C166.695 5.32095 166.231 6.87295 166.231 8.72895C166.231 10.809 166.887 12.409 168.199 13.529C169.543 14.617 171.591 15.513 174.343 16.217C176.551 16.793 178.327 17.321 179.671 17.801C181.047 18.249 181.735 19.001 181.735 20.057C181.735 21.625 180.263 22.409 177.319 22.409C175.847 22.409 174.455 22.233 173.143 21.881C171.831 21.529 170.679 21.097 169.687 20.585C168.727 20.073 168.039 19.609 167.623 19.193L165.031 24.233C166.695 25.289 168.599 26.121 170.743 26.729C172.887 27.337 175.047 27.641 177.223 27.641C179.111 27.641 180.871 27.385 182.503 26.873C184.135 26.329 185.447 25.465 186.439 24.281C187.463 23.065 187.975 21.4649 187.975 19.4809C187.975 17.8489 187.591 16.537 186.823 15.545C186.087 14.521 185.015 13.705 183.607 13.097C182.231 12.489 180.599 11.945 178.711 11.465C176.567 10.953 174.935 10.489 173.815 10.073C172.727 9.65695 172.183 8.95295 172.183 7.96095C172.183 6.26495 173.687 5.41695 176.695 5.41695C177.815 5.41695 178.903 5.57695 179.959 5.89695C181.015 6.18495 181.927 6.53695 182.695 6.95295Z" fill="#5A29E4"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M132.182 27.497C130.07 27.497 128.15 27.129 126.422 26.393C124.694 25.625 123.205 24.601 121.957 23.321C120.709 22.009 119.749 20.537 119.077 18.905C118.406 17.273 118.069 15.593 118.069 13.865C118.069 12.105 118.421 10.409 119.125 8.77695C119.829 7.14495 120.822 5.70496 122.102 4.45695C123.382 3.17695 124.885 2.16895 126.613 1.43295C128.341 0.696953 130.229 0.328949 132.277 0.328949C134.389 0.328949 136.31 0.728952 138.038 1.52895C139.766 2.29695 141.238 3.33695 142.454 4.64895C143.702 5.92895 144.661 7.38495 145.333 9.01695C146.005 10.649 146.342 12.3129 146.342 14.0089C146.342 15.7689 145.99 17.465 145.286 19.097C144.582 20.697 143.589 22.137 142.309 23.417C141.061 24.665 139.574 25.657 137.846 26.393C136.118 27.129 134.23 27.497 132.182 27.497ZM123.925 13.913C123.925 15.353 124.262 16.729 124.934 18.041C125.605 19.321 126.549 20.361 127.765 21.161C129.013 21.961 130.501 22.361 132.229 22.361C133.989 22.361 135.477 21.945 136.693 21.113C137.91 20.249 138.837 19.177 139.477 17.8969C140.117 16.5849 140.438 15.241 140.438 13.865C140.438 12.425 140.102 11.0649 139.43 9.78495C138.758 8.50495 137.798 7.48095 136.549 6.71295C135.333 5.91295 133.878 5.51295 132.182 5.51295C130.422 5.51295 128.917 5.92895 127.669 6.76095C126.453 7.59295 125.525 8.64896 124.885 9.92896C124.245 11.209 123.925 12.537 123.925 13.913Z" fill="#5A29E4"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 27.305L11.712 0.472954H16.464L28.128 27.305H21.984L19.296 21.017H8.88L6.192 27.305H0ZM14.112 7.52895L10.176 15.977H17.904L14.112 7.52895Z" fill="#5A29E4"/>
                        <path d="M50.8211 0.472954L58.2131 9.97695L65.6051 0.472954H71.8931L61.2851 14.057L71.5571 27.305H65.2691L58.2131 18.185L51.2051 27.305H44.8211L55.1411 14.057L44.4851 0.472954H50.8211Z" fill="#5A29E4"/>
                    </svg>
                    <VDivider vertical class="tw-mx-10" />
                    <svg height="477" viewBox="0 0 319 477" width="319" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="tw-h-10 tw-w-auto">
                        <linearGradient id="a"><stop offset="0" stop-color="#52ce63"/><stop offset="1" stop-color="#51a256"/></linearGradient><linearGradient id="b" x1="55.342075%" x2="42.816933%" xlink:href="#a" y1="0%" y2="42.862855%"/><linearGradient id="c" x1="55.348642%" x2="42.808103%" xlink:href="#a" y1="0%" y2="42.862855%"/><linearGradient id="d" x1="50%" x2="50%" y1="0%" y2="58.811243%"><stop offset="0" stop-color="#8ae99c"/><stop offset="1" stop-color="#52ce63"/></linearGradient><linearGradient id="e" x1="51.37763%" x2="44.584719%" y1="17.472551%" y2="100%"><stop offset="0" stop-color="#ffe56c"/><stop offset="1" stop-color="#ffc63a"/></linearGradient><g fill="none" fill-rule="evenodd" transform="translate(-34 -24)"><g transform="matrix(.99254615 .12186934 -.12186934 .99254615 33.922073 .976691)"><path d="m103.950535 258.274149c44.361599-4.360825 60.014503-40.391282 65.353094-94.699444s-30.93219-103.451001-46.020347-101.9678079c-15.088156 1.4831932-63.0385313 58.9051239-68.3771222 113.2132869-5.3385908 54.308162 4.6827754 87.814791 49.0443752 83.453965z" fill="url(#b)" transform="matrix(.70710678 -.70710678 .70710678 .70710678 -80.496332 125.892944)"/><path d="m275.876752 258.273992c44.3616 4.360826 53.167133-29.265322 47.828542-83.573485-5.338591-54.308162-52.073133-111.6105744-67.16129-113.0937675-15.088156-1.4831931-52.57477 47.5401275-47.236179 101.8482895s22.207328 90.458137 66.568927 94.818963z" fill="url(#c)" transform="matrix(.70710678 .70710678 -.70710678 .70710678 191.403399 -141.861963)"/><path d="m188.370027 216.876305c39.941834 0 50.95265-38.251987 50.95265-97.89874 0-59.6467532-37.367733-118.10125956-50.95265-118.10125956s-52.04735 58.45450636-52.04735 118.10125956c0 59.646753 12.105516 97.89874 52.04735 97.89874z" fill="url(#d)"/></g><path d="m184.473473 501c83.118854 0 150.526527-24.145148 150.526527-133.645148s-67.407673-199.354852-150.526527-199.354852c-83.118855 0-150.473473 89.854852-150.473473 199.354852s67.354618 133.645148 150.473473 133.645148z" fill="url(#e)"/><ellipse cx="260.5" cy="335" fill="#eaadcc" rx="21.5" ry="10"/><ellipse cx="102.5" cy="329" fill="#eaadcc" rx="21.5" ry="10" transform="matrix(.99254615 .12186934 -.12186934 .99254615 40.859033 -10.039292)"/><g transform="matrix(-.99939083 .0348995 .0348995 .99939083 269.284825 271.027667)"><path d="m73.1046985 58.2728794c6.7372416 4.9130333 14.3132632 6.6640587 22.7280649 5.2530761 8.4148016-1.4109825 14.5054466-5.2535769 18.2719346-11.527783" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" transform="matrix(.9998477 .01745241 -.01745241 .9998477 1.026464 -1.624794)"/><path d="m154.501124 3c-5.937545 0-11.312782 2.40629805-15.203644 6.29680621-3.89094 3.89058529-6.29748 9.26545449-6.29748 15.20263179 0 5.9376888 2.406488 11.3127422 6.297291 15.2034272 3.890886 3.8907673 9.266197 6.2971348 15.203833 6.2971348 5.937109 0 11.311896-2.4063889 15.202387-6.2972348 3.890299-3.8906535 6.296489-9.2656636 6.296489-15.2033272 0-5.9371521-2.406242-11.3119781-6.296677-15.20253181-3.890469-3.89058674-9.265181-6.29690619-15.202199-6.29690619z" fill="#000" /><path d="m154 21c0-3.865549 3.135362-7 6.999413-7 3.866399 0 7.000587 3.134451 7.000587 7s-3.134188 7-7.000587 7c-3.864051-.0011735-6.999413-3.134451-6.999413-7z" fill="#fff"/><path d="m24.5 13c-5.9375292 0-11.312426 2.406268-15.20299427 6.2967181-3.89069464 3.8905765-6.29700573 9.2654765-6.29700573 15.2027199 0 5.9377549 2.40625962 11.3128391 6.29681766 15.2035153 3.89059104 3.8907092 9.26556184 6.2970467 15.20318234 6.2970467 5.9371249 0 11.3122514-2.406419 15.2030371-6.2973229 3.8905441-3.8906623 6.2969629-9.2656416 6.2969629-15.2032391 0-5.937086-2.4064703-11.3118811-6.297151-15.2024437-3.890763-3.8906448-9.2658154-6.2969943-15.202849-6.2969943z" fill="#000" /><g fill="#fff"><path d="m136 24.499438c0 10.2185232 8.282911 18.500562 18.501124 18.500562 10.217089 0 18.498876-8.2820388 18.498876-18.500562 0-10.2173992-8.281787-18.499438-18.498876-18.499438-10.218213 0-18.501124 8.2820388-18.501124 18.499438zm-6 0c0-13.5311954 10.96929-24.499438 24.501124-24.499438 13.530838 0 24.498876 10.9683711 24.498876 24.499438 0 13.5319607-10.967808 24.500562-24.498876 24.500562-13.532064 0-24.501124-10.9684728-24.501124-24.500562z" fill-rule="nonzero" stroke="#fff" stroke-width="3"/><path d="m6 34.499438c0 10.2185232 8.2817873 18.500562 18.5 18.500562 10.2170889 0 18.5-8.2820388 18.5-18.500562 0-10.2173992-8.2829111-18.499438-18.5-18.499438-10.2182127 0-18.5 8.2820388-18.5 18.499438zm-6 0c0-13.531297 10.9682681-24.499438 24.5-24.499438 13.5309398 0 24.5 10.9684728 24.5 24.499438 0 13.5318591-10.96883 24.500562-24.5 24.500562-13.531962 0-24.5-10.9683711-24.5-24.500562z" fill-rule="nonzero" stroke="#fff" stroke-width="3"/><path d="m24 31c0-3.865549 3.134451-7 7-7s7 3.134451 7 7-3.134451 7-7 7-7-3.134451-7-7z"/></g></g><g stroke-linecap="round" stroke-width="11"><g stroke="#ecb732"><path d="m70.5 377.5 74 77"/><path d="m134.5 386.5-47 50"/></g><g stroke="#ecb732" transform="matrix(-1 0 0 1 298 377)"><path d="m.5.5 74 77"/><path d="m64.5 9.5-47 50"/></g><g stroke="#ffc73b" transform="matrix(0 1 -1 0 215 207)"><path d="m.5.5 49 49"/><path d="m.5 10.5 49 49" transform="matrix(-1 0 0 1 50 0)"/></g></g></g>
                    </svg>
                </div>
            </div>
        </div>
    </VMain>
</template>