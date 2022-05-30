import { arrayWrap } from './util';

// type ErrorType = {
//     [key: string]: string|string[];
// }

// export interface FFormError {
//     errors: ErrorType;
//     set(field: {}|string, messages?: string[]|string): void;
//     all(): ErrorType;
// }

export class LaravelFormErrors {
    errors: {[key: string]: any};

    /**
     * Create a new error bag instance.
     */
    constructor() {
        this.errors = {};
    }

    /**
     * Set the errors object or field error messages.
     */
    set(field: Record<string, unknown>|string, messages?: string[]|string): void {
        if (typeof field === 'object') {
            this.errors = field;
        } else {
            this.set(this.errors, arrayWrap(messages));
        }
    }

    /**
     * Get all the errors.
     */
    all() {
        return this.errors;
    }

    /**
     * Determine if there is an error for the given field.
     */
    has(field: string) {
        // eslint-disable-next-line
        return this.errors.hasOwnProperty(field)
    }

    /**
     * Determine if there are any errors for the given fields.
     */
    hasAny(...fields: string[]) {
        return fields.some(field => this.has(field));
    }

    /**
     * Determine if there are any errors.
     */
    any() {
        return Object.keys(this.errors).length > 0;
    }

    /**
     * Get the first error message for the given field.
     */
    get(field: string) {
        if (this.has(field)) {
            return this.getAll(field)[0];
        }
    }

    /**
     * Get all the error messages for the given field.
     */
    getAll(field: string) {
        // eslint-disable-next-line
        return arrayWrap((<any>this.errors)[field] || [])
    }

    /**
     * Get the error message for the given fields.
     *
     */
    only(...fields: []) {
        const messages: string[] = [];

        fields.forEach(field => {
            const message = this.get(field);

            if (message) {
                messages.push(message);
            }
        });

        return messages;
    }

    /**
     * Get all the errors in a flat array.
     */
    flatten() {
        return Object.values(this.errors).reduce((a, b) => a.concat(b), []);
    }

    /**
     * Clear one or all error fields.
     *
     */
    clear(field?: string) {
        const errors: {[key: string]: any} = {};

        if (field) {
            Object.keys(this.errors).forEach(key => {
                if (key !== field) {
                    errors[key] = this.errors[key];
                }
            });
        }

        this.set(errors);
    }
}
