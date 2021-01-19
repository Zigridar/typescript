const btn = document.querySelector('#btn')

if (btn)
    btn.addEventListener('click', () => {
        console.log('click')
    })

const log = (data: any) => {
    console.log(data)
};

const arrowLog: (data: any) => void = (data: any) => {
    console.log(data)
}

arrowLog(6)