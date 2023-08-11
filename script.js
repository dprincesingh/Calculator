let input = document.getElementById('input');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons)
arr.forEach(buttons => {
    buttons.addEventListener('click', (e) =>{
        if(e.target.innertext == "="){
            string = eval(string)
            input.value = string
        }else if(e.target.innertext == "DEL"){
            string = string.substring(0,string.length-1)
            input.value = string
        }else if(e.target.innertext == "AC"){
            string =""
            input.value = string
        }
        else{
            string = string+e.target.innertext
            input.value = string
        }

       
        
    })
})
