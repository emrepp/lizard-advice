// API
const API_URL = "https://api.adviceslip.com/advice";

function get(url) {
    return fetch(url).then(resp => resp.json())
}

const API = { get }

const fontType = ["Roboto Mono", "Roboto Slab", "Abril Fatface", "Notable", "Bungee"]
const colours = ["#FFCDD2", "#FCE4EC", "#F3E5F5", "#8C9EFF", "#90CAF9", "#80D8FF", "#80DEEA", "#B2DFDB", "#69F0AE", "#AED581", "#AED581", "#FFC400", "#BCAAA4", "#90A4AE"]
const adviceRead = document.querySelector("h2#advice")
const bground = document.querySelector("body")

function getQuotes() {
    API.get(API_URL).then(data => addQuote(data['slip']['advice']))
}

// FUNCTIONS

function addQuote(quote) {
    quoteP.innerText = quote;
    let fontsNum = Math.floor(Math.random()*fontType.length);
    let coloursNum = Math.floor(Math.random()*colours.length);
    adviceRead.style.fontFamily=fontType[fontsNum];
    bground.style.backgroundColor = colours[coloursNum]
}
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const reloadButton = document.querySelector("button#reload")
reloadButton.addEventListener("click", ()=> getQuotes())

// START PAGE
document.body.onload = getQuotes
