type UserType = {
    [key: string] : {id:number, name: string}
}

let users: UserType

beforeEach(()=> {
    users = {
        '1123': {id: 1123, name: 'Igor'},
        '11232': {id: 11232, name: 'Igor1'},
        '11213': {id: 11213, name: 'Igor2'},
        '11253': {id: 11253, name: 'Igor3'},
        '11423': {id: 11423, name: 'Igor4'},
    }
})

test('user should be update', () => {
    let user = {id: 555, name: 'Anton'}
    users[user.id] = user
    expect(users[555].name).toBe('Anton')
})