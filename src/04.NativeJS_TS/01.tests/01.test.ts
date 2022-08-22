import {mult, splitIntoWords, sums} from './01_unitTest';

let a: number
let b: number
let c: number

beforeEach(() => {
    a = 1
    b = 2
    c = 3
})

test('sum should be correct', () => {

    const result = sums(a, b)

    expect(result).toBe(3)
})

test('mult should be correct', () => {
    const result = mult(b,c)

    expect(result).toBe(6)
})

test('split should be correct', () => {

    const words = 'Hello my friends!'

    const result = splitIntoWords(words)

    expect(result.length).toBe(3)
    expect(result[1]).toBe('my')
    expect(result[2]).toBe('friends!')
})