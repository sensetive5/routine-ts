import filterUndefined from "./index";

describe('filterUndefined', () => {
    it.each([
        { value: [1, 'bar', 'foo', undefined, 3, undefined, 4, undefined, 5], expected: [1, 'bar', 'foo', 3, 4, 5] },
        { value: [1, 2, 3, 4, undefined, 5], expected: [1, 2, 3, 4, 5] },
        { value: [undefined], expected: [] },
        { value: [], expected: [] },
        { value: [undefined, 'foo', 'bar', 'baz', undefined], expected: ['foo', 'bar', 'baz'] },
    ])('should return new array without undefined values', ({value, expected}) => {
        const result = value.filter(filterUndefined);

        expect(result).toEqual(expected);
    })
})
