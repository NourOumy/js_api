// lien correction prof : https://www.youtube.com/watch?v=sHN3VABm6IM&ab_channel=OlivierCéréssia


let wrapper = document.querySelector('.wrapper')
let boutons = document.querySelector('.buttons')
let result = document.querySelector('.result')

function myFetch (gender){

fetch("scripts/robots.json") 

  .then(response => response.json()) 
  .then(data => { 

    data.robots.forEach(function(robot){
      let robotGender = robot.gender
      if(gender == null|| gender == "all" || gender == robotGender){
      wrapper.innerHTML += `
      <div class="single-robot ${robot.gender}" data-gender="${robot.gender}">
      <h2>${robot.first_name} ${robot.last_name}</h2>
      <img src="${robot.portrait}" alt="robot">
      <p class ="description">${robot.description}</p>
        </div>
     
        ` 
    }

    let nbrFemale = document.querySelectorAll('.Female')
    let nbrMale = document.querySelectorAll('.Male')
    result.innerHTML = `Il y a ${nbrFemale.length} femmes et ${nbrMale.length} hommes.`
    })
    
  })
  .catch(error => {console.log("Erreur lors de la récup des données :", error); 
  })

}

myFetch()

boutons.addEventListener("click", function(e){
  if(e.target.hasAttribute('data-gender')){
    wrapper.innerHTML =''
    if(e.target.getAttribute == "all"){
      myFetch()
      
    }else{
      myFetch(e.target.getAttribute('data-gender'))
    }
    
  }
})
