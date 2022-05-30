/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_KEY: string
  readonly VITE_HOME_ROUTE: string
  readonly VITE_AUTH_LOGIN_ROUTE: string
  readonly VITE_AUTH_REGISTER_ROUTE: string
  readonly VITE_AUTH_FORGOT_PASSWORD_ROUTE: string
  readonly VITE_AUTH_RESET_PASSWORD_ROUTE: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare const LAVITE: { 
  readonly version: string
  readonly hasLogin: boolean
  readonly hasRegister: boolean
  readonly hasResetPassword: boolean
  readonly user?: string 
};

declare const __VUETIFY_VERSION__: string;
declare const __TAILWINDCSS_VERSION__: string;
declare const __VITE_VERSION__: string;