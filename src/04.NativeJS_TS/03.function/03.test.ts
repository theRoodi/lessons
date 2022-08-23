import {StudentType} from '../02.objects/02';
import {addSkill, isActive, studentCountryRussia} from './03';

let student: StudentType

beforeEach(() => {
    student = {
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
})

test('new tech should be added to student', () => {
    addSkill(student, "TS")
    expect(student.technologies[3].title).toBe('TS')
    expect(student.technologies.length).toBe(4)
})

test('student is unactive', () => {
    isActive(student)
    expect(student.isActive).toBe(false)
    expect(student.technologies.length).toBe(3)
})
test('student must lives at Russia', () => {
    const student2 = {
        id: 1,
        name: 'Igor',
        age: 27,
        isActive: true,
        address: {
            streetTitle: 'Vokzalnaya',
            city: {
                title: "Novokuznetsk",
                countryTitle: 'USA'
            }
        },
        technologies: [
            {id: 1, title: 'HTML'},
            {id: 2, title: 'CSS'},
            {id: 3, title: 'JS'}
        ]

    }
    const country = studentCountryRussia(student)
    expect(country).toBeTruthy()
    const country2 = studentCountryRussia(student2)
    expect(country2).toBeFalsy()
})