function Log(constructor: Function) {
    console.log(constructor)
}

function Log2(target: any, propName: string | symbol) {
    console.log(target)
    console.log(propName)
}

function Log3(target: any, propName: string | symbol, descriptor: PropertyDescriptor) {
    console.log(target)
    console.log(propName)
    console.log(descriptor)
}

@Log
class Component_1 {

    @Log2
    name: string

    constructor(name: string) {
        this.name = name
    }

    @Log3
    logName(): void {
        console.log(this.name)
    }

}