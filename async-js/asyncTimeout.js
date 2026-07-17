// setTimeout(myFunction, 2000);

// function myFunction(){
//     document.getElementById("Text").innerHTML = "You Learned Asynchronous";
// }

// Dengan Anonymous Function

setTimeout(function(){myFunction("you learn js");}, 3000);

function myFunction(value){
    document.getElementById("Text").innerHTML = value;
}

