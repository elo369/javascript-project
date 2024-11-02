
let input = document.querySelector('#inputBox')
let buttons = document.querySelectorAll('.button')

let num = ""
let arr = Array.from(buttons)

arr.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        console.log(e.target.innerHTML)
        if (e.target.innerHTML == '=') {
            calculate = eval(num)
            input.value = calculate
        }
        else if(e.target.innerHTML == 'DEL'){
            string = num.substring(0,string.length-1)
            input.value = string
        }
        else if(e.target.innerHTML == 'AC'){
            string = ""
            input.value=string
        }
        else{
            num += e.target.innerHTML
            input.value = num
        }
    })
})