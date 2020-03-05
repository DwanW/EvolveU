// console.log("Hello World from basic.js");

// function onButtonClicked(){
//      console.log(Number(document.getElementById("inputfield").value))
// }

function size(){
    var e = Number(document.getElementById("inputfield").value);
    var tag = document.getElementById("result");
    if (isNaN(e) !== true && document.getElementById("inputfield").value !== ""){
        if (e < 10){
            tag.innerHTML="small"
        }
        else if (e < 19){
            tag.innerHTML="med"
        }
        else {
            tag.innerHTML="large"
        }
    }
}