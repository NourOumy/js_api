let select = document.querySelector('select')

let country = document.querySelector(`[value="${select.value}"]`).innerHTML

let result = document.querySelector('.result')


function myWeather (){

    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${select.value},${country}&lang=fr&units=metric&appid=c65b019fe59221617776cb635070de57`) 
    
      .then(response => response.json()) 
    
      .then(data => { 
        console.log(data);
        result.innerHTML += 
        `<div>La situation météo à Cairo est : ${data.weather[0].description}</div>
        <div> La température actuelle est de ${parseInt(data.main.temp)} degrés</div>
        <div>Le taux d'humidité est de ${data.main.humidity}%</div>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        `
      })
      .catch(error => {console.log("Erreur lors de la récup des données :", error); 
    })
    }

    myWeather()

    select.addEventListener("change",function(){
        myWeather() 
        result.innerHTML = "" 
    })
 

//    Main.temp