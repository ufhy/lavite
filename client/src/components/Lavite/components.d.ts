export type LaviteSnackbarOptionType = {
    timeout?: number;
    y?: string;
    x?: string|null;
    type?: string;
    mode?: string;
    vertical?: boolean;
}
export interface ILaviteSnackbar extends VueConstructor {
    open (message: string, type: string, options?: LaviteSnackbarOptionType): void;
    success (message: string, options?: LaviteSnackbarOptionType): void;
    error (message: string, options?: LaviteSnackbarOptionType): void;
    warning (message: string, options?: LaviteSnackbarOptionType): void;
    info (message: string, options?: LaviteSnackbarOptionType): void;
    hide(): void;
}