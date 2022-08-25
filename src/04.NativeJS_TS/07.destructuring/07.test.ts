import {ManType} from './07';

let props: ManType
beforeEach(()=> {
    props = {
        id: 1,
        name: 'Igor',
        age: 27,
        lessons: [{title: 'one'}, {title: 'two'}, {title: 'three'}],
        address: {
            street: {
                title: "Metallurgov"
            }
        }
    }
})

test('.', () => {
    // const age = props.age
    // const lessons = props.lessons

    const {age, lessons} = props

})


test('', ()=> {
    const [,ls2, ...restProps] = props.lessons

    expect(ls2.title).toBe('two')
    expect(restProps.length).toBe(1)
})