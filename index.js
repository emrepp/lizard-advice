// API

const apiURL = "https://api.adviceslip.com/advice";

function get(url) {return fetch(url).then(resp => resp.json())}
const api= { get }


const advicePost = document.querySelector("h2#quote")

function getAdvice() {
  api.get(apiURL)
  .then(data => addAdvice(data['slip']['advice']))
}

function addAdvice(quote) {
  advicePost.innerText = quote;}

  const mySelect = document.getElementById('my-select')


  mySelect.addEventListener('change', function() {
    getAdvice()
    
 })

 document.body.onload = getAdvice


/////
/*const init = () => {
  const dropDownSelect = document.querySelector('form');
  document.addEventListener('change', (event) => {
    event.preventDefault();
    const input = document.getElementById('my-select');

    fetch(`https://api.adviceslip.com/advice/${dropDownSelect.value}`)
    .then(response => response.json())
    .then(data =>{
      console.log(data)
      const adviceQuote = document.querySelector('h2#quote');
      adviceQuote.innerText = data.adviceQuote

    })
  })
}
document.addEventListener('DOMContentLoaded', init); */







/*form.addEventListener('submit', function(e) {
    e.preventDefault()
    const payload = new FormData(form);
  

    fetch('https://api.adviceslip.com/advice', {
    method: 'POST',
    body: payload,
    })
    .then(res => res.json())
    .then(data => console.log(data))
})// */




//document.getElementById('modalButton').addEventListener('click')
//const signNumber = document.querySelector('select[sign=""]:select').value
//gettingAdvice (signNumber)
//

/*const apiUrl = "https://api.adviceslip.com/advice";

function get(url) {
    return fetch(url).then(resp => resp.json())
}

const api = { get }

const fontType = ["Roboto Mono", "Roboto Slab", "Abril Fatface", "Notable", "Bungee"]
const colours = ["#FFCDD2", "#FCE4EC", "#F3E5F5", "#8C9EFF", "#90CAF9", "#80D8FF", "#80DEEA", "#B2DFDB", "#69F0AE", "#AED581", "#AED581", "#FFC400", "#BCAAA4", "#90A4AE"]
const adviceRead = document.querySelector("h2#quote")
const bground = document.querySelector("body")

function getQuotes() {
    api.get(apiUrl).then(data => addQuote(data['slip']['advice']))
}
function addQuote(quote) {
  quoteP.innerText = quote;
  }

  const refreshButton = document.querySelector("input")
refreshButton.addEventListener("click", ()=> getQuotes()) 

document.body.onload = getQuotes
*/


const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

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
//input field on modal

//id




// document.getElementById('my-select').addEventListener('change', function() {
 //  return(this.value);

  //})
/*const mySelect = document.getElementById('my-select')

mySelect.addEventListener('change', function() {
    console.log(this.value);
 })
 

async function run() {
    for (let i = 1; i <= 100; i++) {
      
     
     

        let data = await fetch(`https://api.adviceslip.com/advice`,{
              method:'GET',
               })
               .then(res=>res.json());

        push(data);
    }

    JSON.stringify(data)
   
};


/*
  async function getQuote(){
    const response = await fetch(`/${sendValue}`);
    const blob = await response.blob();
    document.getElementById('flower').src=URL.createObjectURL(blob);
    }


  //FIIXXXXXXXXX
  const API_URL = "e";
function get(url) {return fetch(url).then(resp => resp.json())}



    const object = get.find(obj => obj.id === sendValue);
 


/*const API = {get}

//function getQuotes() {
 // API.get(API_URL).then(data => addQuote(data['slip']['advice']))
//}

c

//function addQuote(quote) {
  quoteP.innerText = quote;
}

const reloadButton = document.querySelector("button#modalBtn")
reloadButton.addEventListener("click", ()=> getQuotes())

document.body.onload = getQuotes

 /* function JavaScriptFetch() {
    const script = document.createElement('script');
    script.src = `https://api.adviceslip.com/advice/${sendValue}`;
    document.querySelector('head').appendChild(script);
}
  
function processJSONPResponse(data) {
    alert(data);
} */
  
/*const script = document.createElement('script');
script.src = 'https://api.adviceslip.com/advice';
document.body.appendChild(script);*/

/*function handleJSON() {
fetch('https://api.adviceslip.com/advice')
  .then((response) => response.json())
  .then((data) => console.log(data));
}
console.log(handleJSON())
  
 /* function submitForm(e) {
   // e.preventDefault();
    let selectInputs = document.querySelectorAll('select');
    let res = [];
    selectInputs.forEach(input => {
     res.push(input.value)
    })
    return res;
  }
console.log(submitForm())
*/
  
  

 


//const urlFetch = `https://api.adviceslip.com/advice/${sendValue}`


  //document.getElementById('value').value = option.value;

  //fetch(`https://api.adviceslip.com/advice/${sendValue}`)
  //.then((response) => response.json())
  //.then((data) => console.log(data));


/*
const form = document.getElementsByClassName('myForm')[0];
form.addEventListener('submit');

const formToJSON = (elements) =>
[].reduce.call(
  elements,
  (data, element) => {
    if (isValidElement(element)) {
      data[element.name] = element.value;
  }
  return data;
},
  {},
); */


