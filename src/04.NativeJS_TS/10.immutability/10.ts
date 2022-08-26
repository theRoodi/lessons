type LaptopType = {
    laptop: { title: string, os: string }
}
type BookType = {
    books: Array<string>
}

export type UserType = {
    name: string
    hair: number
    address: { title: string, house: number }
    company: Array<{ id: number, title: string }>
}

type CompanyType = {
    id: number
    title: string
}

export type UserWithLaptopType = UserType & LaptopType
export type UserWithBooksType = UserWithLaptopType & BookType

export const makeHairStyle = (u: UserType, power: number) => {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    return copy

}

export const moveUser = (u: UserType, place: string) => {
    const copy = {
        ...u,
        address: {
            ...u.address,
            title: place
        }
    }
    return copy
}

export const newLaptop = (u: UserWithLaptopType, brand: string, os: string) => {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: brand,
            os: os
        }
    }
}

export const updateBooks = (u: UserWithBooksType, from: string, to: string) => {
    return {
        ...u,
        books: u.books.map(b => {
            return b === from ? to : b
        })
    }

}
export const removeBook = (u: UserWithBooksType, from: string) => {
    return {
        ...u,
        books: u.books.filter(b => b !== from)
    }

}

export const updateCompany = (u: UserWithBooksType, id: number, title: string) => {
    return {
        ...u,
        company: u.company.map(c => c.id === id
            ? {...c, title: title}
            : c)

    }

}


export const updateCompany2 = (companies: { [key: string]: Array<CompanyType> }, name: string, id: number, title: string) => {
    let copy = {...companies}
    copy[name] = copy[name].map(c => c.id === id ? {...c, title: title} : c)

    return copy
}