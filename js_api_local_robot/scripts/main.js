// intégrer des plugin
let wrapper = document.querySelector('.wrapper')
let femalebtn = document.querySelector('.frobots')
let malebtn = document.querySelector('.hrobots')
let everybtn = document.querySelector('.everyrobots')


function myFetch (gender){

fetch("scripts/robots.json") 

  .then(response => response.json()) 
  .then(data => { 
    data.robots.forEach(function(robot){
      wrapper.innerHTML += `
      <div class="single-robot ${robot.gender}" data-gender="${robot.gender}">
      <h2>${robot.first_name} ${robot.last_name}</h2>
      <img src="${robot.portrait}" alt="robot">
      <p class ="description">${robot.description}</p>
        </div>
      ` 
      wrapper.

      if()

    })
    
  })
  .catch(error => {console.log("Erreur lors de la récup des données :", error); 
  })

}

myFetch()
