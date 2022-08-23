type CityType = {
    title: string
    countryTitle: string
}
type AddressType = {
    streetTitle: string
    city: CityType
}
type TechType = {
    id: number
    title: string
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}

export const student:StudentType = {
    id: 1,
    name: 'Igor',
    age: 27,
    isActive: true,
    address: {
        streetTitle: 'Vokzalnaya',
        city: {
            title: "Novokuznetsk",
            countryTitle: 'Russia'
        }
    },
    technologies: [
        {id: 1, title: 'HTML'},
        {id: 2, title: 'CSS'},
        {id: 3, title: 'JS'}
    ]

}