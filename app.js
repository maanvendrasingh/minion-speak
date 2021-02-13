// initialising translate button
var btnTranslate = document.querySelector("#btn-translate");

// initialising textInput
var textInput = document.querySelector("#txtInput");


btnTranslate.addEventListener("click", clickHandler)

function clickHandler(){
    console.log("clicked");
    console.log("input: ",textInput.value);
}
