let toggle=document.getElementById("mode");
let container=document.querySelector(".container");
let options=document.querySelector(".options");
let result=document.querySelector(".result");
let button=document.querySelectorAll(".button");
let answer=document.getElementById("input");

toggle.addEventListener('click',()=>{
    document.body.classList.toggle('dark1');
    container.classList.toggle('dark2');
    options.classList.toggle('dark3');
    result.classList.toggle('dark4');
    answer.classList.toggle('dark5')
})

let string='';
let buttons= document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            document.getElementById('input').value=string;
        }else if(e.target.innerHTML=='C'){
            string="";
            document.getElementById('input').value=string;
        }
        else{
            console.log(e.target);
            string=string+e.target.innerHTML;
            console.log(string);
            document.getElementById('input').value=string;
        }

    })
})