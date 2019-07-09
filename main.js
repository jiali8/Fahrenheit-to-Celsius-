//fahrenheit to celcius calculator 

// event listeners 
document.getElementById("btn").addEventListener("click", convert)
//event functions 

function convert () {
    //input 
    let num1 = Number (document.getElementById('num1').value);

    //process
    let total= (num1 - 32 ) * 5 / 9 

    //output
    document.getElementById('result').innerHTML = total;
}