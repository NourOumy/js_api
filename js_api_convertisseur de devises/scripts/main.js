// variables

let amount = document.querySelector('.amount')
let from = document.querySelector('.from')
let to = document.querySelector('.to')
let resultat = document.querySelector('.resultat')
let convert = document.querySelector('button')

// functions
function myfetchConvert (){

fetch (`https://api.apilayer.com/fixer/convert?apikey=FKJDXG4Xc4azEOTWCwOdK46vmNH0HU5B&&to=${to.value}&from=${from.value}&amount=${amount.value}`) 

  .then(response => response.json()) 

  .then(data => { 
    resultat.innerHTML = data.result.toFixed(2)
    // console.log(data);


  })
  .catch(error => {console.log("Erreur lors de la récup des données :", error); 
})
}
function myfetchSymboles (){

fetch (`https://api.apilayer.com/fixer/symbols?apikey=FKJDXG4Xc4azEOTWCwOdK46vmNH0HU5B`) 

  .then(response => response.json()) 

  .then(data => { 
    
    console.log(data);


  })
  .catch(error => {console.log("Erreur lors de la récup des données :", error); 
})
}


// events 

convert.addEventListener("click", function () {
  myfetchConvert()
})


