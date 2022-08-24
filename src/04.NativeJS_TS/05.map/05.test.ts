import {ManType, mapFun, newArr} from './05';

test("people have skills", () => {
    const people: Array<ManType> = [
        {name: 'Igor Rudnev', age: 27},
        {name: 'Artem Makov', age: 26},
        {name: 'Julia Spotova', age: 25},
    ]

    expect(mapFun(people).length).toBe(3)
    expect(mapFun(people)[2].secondName).toBe('Spotova')
    expect(mapFun(people)[2].skills).toBeDefined()
})