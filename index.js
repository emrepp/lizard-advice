
  
      async function getPosts() {

      Promise.all([
       
        fetch('https://api.kanye.rest/'),
        fetch('https://api.adviceslip.com/advice') 
    
      ])

      .then (function (responses) {
       
        return Promise.all(responses.map(function (response) {
        return response.json();
        }))
        
      }) 
      
      .then(function(data){ 
        const mySelect = document.getElementById('my-select');
        
       
          mySelect.addEventListener('change',() =>{
          const selected = mySelect.options[mySelect.selectedIndex].value;
          
  

          if (selected == 0) {
            const first = data.slice(0,1);

            const quoteSpot = document.querySelector("h2#quote");
            quoteSpot.textContent = Object.values(first[0]);
          }
        
          else {
           const second = data.slice(1,2);
           
           
           const secondAdvice = Object.values(second[0].slip["advice"]);
           const adviceThings = document.querySelector("h2#quote");
           adviceThings.textContent = secondAdvice.join('');

          }
      
        })})
         
         }

         const timer = setInterval(getPosts,3000);
         getPosts();
         


const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");

const span = document.getElementsByClassName("close")[0];

btn.addEventListener('click', () => {
modal.style.display = "block";}
)


//btn.onclick = function() {
  
 // modal.style.display = "block";
    

//}

span.addEventListener('click', () => {
  modal.style.display = "none";
}

)

//span.onclick = function() {
//  modal.style.display = "none";
//}

window.addEventListener('click',() => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
})

//window.onclick = function(event) {
 // if (event.target == modal) {
  //  modal.style.display = "none";
 // }
//}


function toggleCrown() {
  document.getElementById("baseLizard").style.visibility = "visible";
    if (document.getElementById("baseLizard")
        .src == "https://live.staticflickr.com/2940/14431710441_385928e588_k.jpg"){
        document.getElementById("baseLizard")
        .src = "https://user-images.githubusercontent.com/58008006/184746854-52163985-60a2-4ecb-a207-e1da9f9162aa.png";
    } else {
        document.getElementById("baseLizard")
        .src = "https://live.staticflickr.com/2940/14431710441_385928e588_k.jpg";
    }

    
    modal.style.display = "none"; 
    
  }

 