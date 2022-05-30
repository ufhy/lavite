/**
 * Deep copy the given object.
 */
export function deepCopy(obj: { [key: string]: Record<string, unknown> }) : { [key: string]: any } {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    const copy: { [key: string]: any } = Array.isArray(obj) ? [] : {};

    Object.keys(obj).forEach(key => {
        copy[key] = deepCopy(obj[key] as { [key: string]: Record<string, unknown> });
    });

    return copy;
}

/**
 * If the given value is not an array, wrap it in one.
 */
export function arrayWrap(value: any) {
    return Array.isArray(value) ? value as [] : [value];
}
