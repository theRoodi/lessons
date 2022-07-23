export let state = {
    name: 'Mike',
    age: 27,
    school: {
        students: [{},{},{}],
        address: 'Minks',
        director: {
            name: 'Andrew'
        }
    }
}

export let copyState = {
    ...state,
    school: {
        ...state.school,
        students: state.school.students.map(el => ({...el})),
        director: {...state.school.director}
    }
}
