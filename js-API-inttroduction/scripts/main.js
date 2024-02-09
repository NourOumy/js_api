const wrapper = document.querySelector('.wrapper')
// on créé la variable select pour catcher la valeur de l'option
let select = document.querySelector('select')


function myfetch(){
   fetch(`http://shibe.online/api/shibes?count=${select.value}`)
  .then(response => response.json())
  .then(data => {
    // console.log(data);
    data.forEach(function(oneshiba){
        wrapper.innerHTML += `
        <img src="${oneshiba}" alt="Un beau Shiba">`

    })
  })
  .catch(error => {console.log("Erreur lors de la récup des données :", error);
})
 
}
// on met la fonction en dehors pour que la page se charge avec 1 image d'office
myfetch()

select.addEventListener("input", function(){
    // on met le wrapper à 0 pour éviter que le select.value s'additionne à chaque fois
    wrapper.innerHTML = ''
    myfetch()
})

