export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: 'Igor Rudnev', age: 27},
    {name: 'Artem Rudnev', age: 26},
    {name: 'Julia Rudneva', age: 25},
]

export const newArr = people.map( man => ({
    skills: ['JS', 'TS', 'HTML'],
    firstName: man.name.split(' ')[0],
    secondName: man.name.split(' ')[1]
}))

export const mapFun = (people: Array<ManType>) => {
    return people.map(p => ({
        skills: ['JS', 'TS', 'HTML'],
        firstName: p.name.split(' ')[0],
        secondName: p.name.split(' ')[1]
    }))
}
