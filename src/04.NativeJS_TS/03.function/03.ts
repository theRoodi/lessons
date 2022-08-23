import {StudentType} from '../02.objects/02';

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({id: new Date().getDate(), title: skill})
}

export const isActive = (student: StudentType) => {
    student.isActive = false
}
export const studentCountryRussia = (student:StudentType) => {
    return student.address.city.countryTitle === 'Russia'
}