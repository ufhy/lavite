module.exports = {
    root: true,
    env: {
        'node': true,
        'vue/setup-compiler-macros': true,
    },
    parserOptions: {
        ecmaVersion: 2020,
        parser: '@typescript-eslint/parser'
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/essential',
        'plugin:@typescript-eslint/eslint-recommended',
    ],
    rules: {
        'no-console': 'warn',
        'no-debugger': 'warn',
        'no-unused-vars': 'off',
        'quotes': ['error', 'single'],
    },
    globals: {
        LAVITE: true,
        __VUETIFY_VERSION__: true,
        __TAILWINDCSS_VERSION__: true,
        __VITE_VERSION__: true,
    }
}
