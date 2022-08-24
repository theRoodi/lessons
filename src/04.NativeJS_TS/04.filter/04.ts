import {student, StudentType} from '../02.objects/02';

const ages = [1,10,15,20,35,33,24,22,99,100,101]

export const predicate = (ages: Array<number>) =>  ages.filter(age => age > 90)

console.log(predicate(ages))

export const youngerThan = ( students:Array<StudentType>, age: number) => {
    return students.filter(s => s.age < age)
}