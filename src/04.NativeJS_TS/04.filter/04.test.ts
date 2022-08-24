import {predicate, youngerThan} from './04';
import {StudentType} from '../02.objects/02';

let ages: Array<number>;
let students: Array<StudentType> = [{
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

},{
    id: 2,
    name: 'Egor',
    age: 23,
    isActive: true,
    address: {
        streetTitle: 'Vokzalnaya',
        city: {
            title: "Minsk",
            countryTitle: 'Belarus'
        }
    },
    technologies: [
        {id: 1, title: 'HTML'},
        {id: 2, title: 'CSS'},
        {id: 3, title: 'JS'}
    ]

}]

beforeEach(()=> {
    ages = [1,10,15,20,35,33,24,22,99,100,101]
})

test('sholud take old mans older than 90', () => {
    expect(predicate(ages)[0]).toBe(99)
    expect(predicate(ages).length).toBe(3)
})

test('should be younger then 30', () => {
    const result = ages.filter(age => age < 30)
    expect(result.length).toBe(6)
})

test('should be younger then 25', () => {
    const result = youngerThan(students, 25)
    expect(result.length).toBe(1)
})