// API

 
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




//const reloadButton = document.querySelector("")
//reloadButton.addEventListener("click", ()=> getAdvice())


/*const selection = document.querySelector('selectOne');
selectOne.addEventListener('change',() =>
)
const result = document.querySelector('h2#quote');

selection.addEventListener('change', () =>
{
  result.innerText = selection.options[selection.selectedIndex].value;})*/
 
  //const sel = document.getElementById("selectOne");
  //const value = sel.options[sel.selectedIndex].value;

 const sendValue = document.getElementById('my-select').addEventListener('change', function() {
   return(this.value);
  })

  
  

  
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


