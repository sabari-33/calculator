
const num = document.getElementById('display');


function clearDisplay(){
   num.value= num.value.slice(0,-1);
}

function appendToDisplay(e){
     num.value+=e;
}

function calculate(){
      num.value = eval(num.value);
}

function AclearDisplay(){
        num.value = '';
}

