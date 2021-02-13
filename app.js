// initialising translate button
var btnTranslate = document.querySelector("#btn-translate");

// initialising textInput
var textInput = document.querySelector("#txtInput");

// initialising output div block
var outputDiv = document.querySelector("#output");


btnTranslate.addEventListener("click", clickHandler)

function clickHandler(){
    console.log("clicked");
    console.log("input: ",textInput.value);
    outputDiv.innerText = "Maanvendra Singh"
}
