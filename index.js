

      fetch('https://api.kanye.rest/')
      .then(resp => resp.json())
      .then(data => {
        alwaysRenderAllContent = true;
   
  
       console.log(data)
      
      });
      

      Promise.all([
        fetch('https://api.kanye.rest/'),
        fetch('https://api.adviceslip.com/advice')
      
      ]).then(function (responses) {
        // Get a JSON object from each of the responses
        return Promise.all(responses.map(function (response) {
          return response.json();
        }));
      }).then(function (data) {
        // Log the data to the console
        // You would do something with both sets of data here

        
       
        console.log(data);
       
      }).catch(function (error) {
        // if there's an error, log it
        console.log(error);
      });
      
    

     
  


 


/*const apiURL = "https://api.adviceslip.com/advice";

function get(url) {return fetch(url).then(resp => resp.json())}
const api= {get}


const advicePost = document.querySelector("h2#quote");


function getAdvice() {
  api.get(apiURL)

  .then(data => addAdvice(data['slip']['advice']))
  advicePost.style.display= "none"
}



function addAdvice(quote) {
  advicePost.innerText = quote;}

  const mySelect = document.getElementById('my-select')

  setTimeout(function () {

    mySelect.addEventListener('change', function() {
      getAdvice()
      
   })
    
    }, 1000);

 

 //document.body.onload = getAdvice */



const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  document.querySelector('.parent')
    .querySelector('.layer2').style.display = "none";
    

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




document
  .querySelector('.parent')
  .querySelector('.layer2').style.display = "none";

function toggleCrown() {
    document.querySelector('.parent')
    .querySelector('.layer2').style.display = "block";
    modal.style.display = "none";
    advicePost.style.display = "block"

};


  

 