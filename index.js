

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
          event.preventDefault();
          const selected = mySelect.options[mySelect.selectedIndex].value;
          
          
         
  

          if (selected == 0) {
            const first = data.slice(0,1);
            //first => addAdviceO(first['quote'])
            console.log(first);
            
            for(let key in first) {
              console.log(first[key])
              document.getElementById("quote").innerHTML = JSON.stringify(first[key]);
              
            }
           
          }
        
          else {
           const second = data.slice(1,2)
           //second => addAdvice(second['slip']['advice'])
           console.log(second) 
           
           for(let advice in second) {
            console.log(second[advice]);
            document.getElementById("quote").innerHTML = JSON.stringify(second[advice]);

          }
      
        }})
         
         })}
         
       
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
   // document.querySelector('.parent')
   // .querySelector('.layer2').style.display = "block";
    modal.style.display = "none";
  

};


  

 