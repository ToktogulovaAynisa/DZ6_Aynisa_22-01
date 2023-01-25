const h1Node = document.querySelector('h1')
const input = document.querySelector('input')

input.oninput =()=>{
    let rev = []
    rev.push(input.value.split('').reverse().join(''))
    rev.forEach(item=>{
        const div = document.createElement('div')
        div.innerHTML = item
        h1Node.append(div)
    })
}