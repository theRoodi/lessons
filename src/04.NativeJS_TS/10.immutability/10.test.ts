import {
    makeHairStyle,
    moveUser,
    newLaptop,
    removeBook,
    updateBooks,
    updateCompany, updateCompany2,
    UserWithBooksType,
    UserWithLaptopType
} from './10';

test('cut half hair', () => {
    let user: UserWithLaptopType = {
        name: 'Mike',
        hair: 50,
        address: {
            title: 'here',
            house: 10
        },
        laptop: {
            title: 'MSI',
            os: 'Linux'
        },
        company: [{id: 1, title: 'One'}, {id: 2, title: 'One'}, {id: 3, title: 'Three'}]
    }

    const newUser = makeHairStyle(user, 2)

    expect(newUser.hair).toBe(25)
    expect(user.hair).toBe(50)
})

test('new address', () => {
    let user: UserWithLaptopType = {
        name: 'Mike',
        hair: 50,
        address: {
            title: 'here',
            house: 4
        },
        laptop: {
            title: 'MSI',
            os: 'Linux'
        },
        company: [{id: 1, title: 'One'}, {id: 2, title: 'One'}, {id: 3, title: 'Three'}]
    }

    const newAddressUser = moveUser(user, 'there')

    expect(newAddressUser.address.title).toBe('there')
    expect(newAddressUser.address.house).toBe(4)
    expect(user.address.title).toBe('here')
    expect(user.address.house).toBe(4)
})

test('new laptop', () => {
    let user: UserWithLaptopType = {
        name: 'Mike',
        hair: 50,
        address: {
            title: 'here',
            house: 4
        },
        laptop: {
            title: 'MSI',
            os: 'Linux'
        },
        company: [{id: 1, title: 'One'}, {id: 2, title: 'One'}, {id: 3, title: 'Three'}]
    }

    const newUserLaptop = newLaptop(user, 'Apple', 'Macintosh')

    expect(newUserLaptop.laptop.title).toBe('Apple')
    expect(newUserLaptop.laptop.os).toBe('Macintosh')
    expect(user.laptop.title).toBe('MSI')
    expect(user.laptop.os).toBe('Linux')
})

test('update book', () => {
    let user: UserWithBooksType = {
        name: 'Mike',
        hair: 50,
        address: {
            title: 'here',
            house: 4
        },
        laptop: {
            title: 'MSI',
            os: 'Linux'
        },
        books: ['html', 'css', 'js'],
        company: [{id: 1, title: 'One'}, {id: 2, title: 'One'}, {id: 3, title: 'Three'}]

    }

    const userCopy = updateBooks(user, 'js', 'ts')

    expect(userCopy.books[2]).toBe('ts')
})

test('remove book', () => {
    let user: UserWithBooksType = {
        name: 'Mike',
        hair: 50,
        address: {
            title: 'here',
            house: 4
        },
        laptop: {
            title: 'MSI',
            os: 'Linux'
        },
        books: ['html', 'js', 'css'],
        company: [{id: 1, title: 'One'}, {id: 2, title: 'One'}, {id: 3, title: 'Three'}]

    }

    const userCopy = removeBook(user, 'js')

    expect(userCopy.books[1]).toBe('css')
})

test('update company', () => {
    let user: UserWithBooksType = {
        name: 'Mike',
        hair: 50,
        address: {
            title: 'here',
            house: 4
        },
        laptop: {
            title: 'MSI',
            os: 'Linux'
        },
        books: ['html', 'js', 'css'],
        company: [{id: 1, title: 'One'}, {id: 2, title: 'One'}, {id: 3, title: 'Three'}]

    }

    const userCopy = updateCompany(user, 2, 'Two')

    expect(userCopy.company[1].title).toBe('Two')
})

test('update company snd', () => {

    const companies = {
        'Igor': [{id: 1, title: 'One'}, {id: 2, title: 'One'}, {id: 3, title: 'Three'}],
        'Artem': [{id: 1, title: 'One'}, {id: 2, title: 'One'}, {id: 3, title: 'Three'}],
    }

    const userCopy = updateCompany2(companies, 'Igor',2, 'Two')

    expect(userCopy['Igor'][1].title).toBe('Two')
})