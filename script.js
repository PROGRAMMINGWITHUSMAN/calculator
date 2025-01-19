var input = document.querySelector('input') 
console.log(typeof input.value);

var btn = document.querySelectorAll("button") /// node list
var arr = Array.from(btn) // convert into real array


for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener('click' , function (event) {
        if (event.target.innerHTML == "DEL") {
            input.value = input.value.slice(0 , -1);
        }
        else if(event.target.innerHTML == "AC"){
            input.value = ""
        }
        else if(event.target.innerHTML == "="){
            try {
                input.value = eval(input.value);
            } catch (error) {
                input.value = "Error";
            }
        }
        else{   
            var Value = event.target.innerHTML
            input.value += Value
            console.log(Value);        
        }
    })
}