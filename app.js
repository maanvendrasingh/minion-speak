// initialising translate button
var btnTranslate = document.querySelector("#btn-translate");

// initialising textInput
var textInput = document.querySelector("#txtInput");

// initialising output div block
var outputDiv = document.querySelector("#output");

// initialising mock url
var serverURL = "https://api.funtranslations.com/translate/yoda.json";

// click event returns clickHandler callback after every click 
btnTranslate.addEventListener("click", clickHandler)

// callback function
function clickHandler(){
    // calling server for processing 
    fetch(getTranslationURL(textInput.value))
    .then(response=> response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
}
// function to get Translation URL
function getTranslationURL(text){
    return serverURL+"?"+"text="+text;
}

// function for error handling
function errorHandler(error){
    console.log("error occured ",error);
    alert("something's wrong with server. Please try in some time!");
}