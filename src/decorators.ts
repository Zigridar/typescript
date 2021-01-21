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

//////

interface ComponentDecInterface {
    template: string
    selector: string
}

function Component_decorator(config: ComponentDecInterface) {
    return function<T extends { new(...args: any[]): object }> (constructor: T) {
        return class extends constructor {
            constructor(...args: any[]) {
                super(...args);

                const el: Element = document.querySelector('body')!

                el.innerHTML = config.template
            }
        }
    }
}

@Component_decorator({ template: 'decorator template', selector: '' })
class Component_2 {

    name: string

    constructor(name: string) {
        this.name = name
    }

    get getName(): string {
        return this.name
    }

    logName(): void {
        console.log(this.name)
    }
}

const testComponent = new Component_2('name')