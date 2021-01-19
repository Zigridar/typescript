const cars_1: string[] = ['Ford', 'Audi']
const cars_2: Array<string> = ['Ford', 'Audi']

const promise: Promise<string> = new Promise<string>((resolve) => {
    setTimeout(() => resolve('Hello'), 10)
})

promise.then(data => console.log(data))