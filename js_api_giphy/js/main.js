let select = document.querySelector('select')
let button = document.querySelector('input[type="button"]')
let search = document.querySelector('#gifToSearch')
let wrapper = document.querySelector('.wrapper')
function giphy (){
   fetch(`https://api.giphy.com/v1/gifs/search?api_key=BtvJ6mRdKuiMTtnIZWkY5OkS665C16j0&q=${search.value}&limit=${select.value}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    data.data.forEach(function(onedata){
        wrapper.innerHTML += `
        <img src="${onedata.images.downsized.url}" alt="giph">`

    })
  })
  .catch(error => {console.log("Erreur lors de la récup des données :", error);
    }) 
} 

giphy()

button.addEventListener("click", function(){
    wrapper.innerHTML = ''
    giphy()
    
})

// !!!!!! chaque API a son propre langage !!!!!! bien lire !!!
