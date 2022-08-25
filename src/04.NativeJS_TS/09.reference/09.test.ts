type UsersType = {
    name: string
    age: number
}

const increaseAge = (u: UsersType) => {
    u.age = u.age + 1
}


test('test', () => {
    let userr = {
        name: 'Igor',
        age: 27
    }
    increaseAge(userr)

    expect(userr.age).toBe(28)


})
