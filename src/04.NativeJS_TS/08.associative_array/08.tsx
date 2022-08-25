type UserType1 = {
    [key: string] : {id:number, name: string}
}

let users1: UserType1 = {
    '1123': {id: 1123, name: 'Igor'},
    '11232': {id: 11232, name: 'Igor1'},
    '11213': {id: 11213, name: 'Igor2'},
    '11253': {id: 11253, name: 'Igor3'},
    '11423': {id: 11423, name: 'Igor4'},
}

let user1 = {id: 555, name: 'Anton'}

users1[user1.id] = user1
