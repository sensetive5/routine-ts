type NonNullableValue<T> = T extends undefined ? never : T

type FilterUndefined<T> = NonNullableValue<T>

function filterUndefined<T>(value: T | undefined): value is FilterUndefined<T> {
    return typeof value !== 'undefined' && value !== undefined
}

export default filterUndefined
