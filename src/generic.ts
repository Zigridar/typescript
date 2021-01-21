const cars_1: string[] = ['Ford', 'Audi']
const cars_2: Array<string> = ['Ford', 'Audi']

const promise: Promise<string> = new Promise<string>((resolve) => {
    setTimeout(() => resolve('Hello'), 10)
})

promise.then(data => console.log(data))

////////

function mergeObjects<T extends object, R extends object>(first: T, second: R): T & R {
    return Object.assign({}, first, second)
}

const max = mergeObjects({name: 'Max'}, {age: 22})

console.log(max.name, max.age)

///////

interface ILength {
    length: number
}

function withCount<T extends ILength>(value: T): {value: T, count: string} {
    return {
        value,
        count: `value ${value.length}`
    }
}

///////

function getObjectValue<T extends object, R extends keyof T>(current: T, key: R): T[R] {
    return current[key]
}

const person = {
    name: 'Max',
    age: 22
}

console.log(getObjectValue(person, 'name'))

////

class Collection<T extends string | number | boolean> {

    constructor(private _items: T[] = []) {}

    add(item: T) {
        this._items.push(item)
    }

    get items() {
        return this._items
    }
}

const collection= new Collection([1, true, '', ])

//////
const arr: Readonly<Array<number>> = [1, 2, 3]

const obj: Readonly<object> = { name: 'object' }