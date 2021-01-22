/// <reference path="form-namespace.ts" />

namespace Form_1 {

    class MyForm {
        private type: FormType = 'block'
        private state: FormState = 'active'

        constructor(public email: string) {
            console.log(email)
            console.log(this.type)
            console.log(this.state)
        }

        getInfo(): FormInfo {
            return {
                state: this.state,
                type: this.type
            }
        }
    }

    const myForm = new MyForm('@')
    log(myForm)
}