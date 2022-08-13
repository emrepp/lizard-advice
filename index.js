

      fetch('https://api.kanye.rest/')
      .then(resp => resp.json())
      .then(data => {
        alwaysRenderAllContent = true;
   
  
       console.log(data)
      
      });
      


      const init = () => {

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
        //JSON.stringify(data);

        
        const mySelect = document.getElementById('my-select');
        
       
          mySelect.addEventListener('change',(event) =>{
          //event.preventDefault();
          const selected = mySelect.options[mySelect.selectedIndex].value;
          console.log(selected)
          
          
         
  

          if (selected == 0) {
            const first = data.slice(0,1);
            console.log(first)
           
          console.log( Object.values(first[0]))

          
       
          
            const quoteSpot = document.querySelector("h2#quote")
            quoteSpot.textContent = Object.values(first[0])

            
           
           
          }
        
          else {
           const second = data.slice(1,2)
           //second => addAdvice(second[0]['slip']['advice'])
           console.log(second) 
           console.log(Object.values(second[0].slip["advice"]))
           const secondAdvice = Object.values(second[0].slip["advice"])

           console.log(secondAdvice.join(''))

          
           const adviceThings = document.querySelector("h2#quote")

           adviceThings.textContent = secondAdvice.join('')

         
    

           

          }
      
        })})
         
         }
         
       
document.addEventListener('DOMContentLoaded', init);





const modal = document.getElementById("myModal");


const btn = document.getElementById("myBtn");


const span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  
  modal.style.display = "block";
  document.querySelector('.parent')
  .querySelector('.layer2').style.display = "none";
    

}


span.onclick = function() {
  modal.style.display = "none";
}


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
  

};


  

 