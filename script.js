const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8c64675ad5msh23ae0d56c214ac0p139085jsnab1d8c7bbacc",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};


const getWeather =(city)=>{

  cityName.innerHTML=city

  fetch(
    'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
  
  
      console.log(response);
      cloud_pct.innerHTML = response.cloud_pct;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humiditysub.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      sunrise.innerHTML = response.sunrise;
      //sunset.innerHTML = response.sunset;
      temp.innerHTML = response.temp;
      tempsub.innerHTML = response.temp;
      wind_degrees.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;
      wind_speedsub.innerHTML = response.wind_speed;
      
    })
    .catch((err) => console.error(err));
}

submit_city.addEventListener("click",(e)=>{
  e.preventDefault();
  getWeather(city.value);
})

getWeather("Delhi")

function getDefaultWeather(){
  
  let defcity=["Mumbai","New York","Paris","Tokyo","Jakarta","Cairo"]

    fetch(
      'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+defcity[0],
      options
    )
      .then((response) => response.json())
      .then((response) => {
    
    
        console.log(response);
        feels_like1.innerHTML = response.feels_like;
        humidity1.innerHTML = response.humidity;
        max_temp1.innerHTML = response.max_temp;
        min_temp1.innerHTML = response.min_temp;
        temp1.innerHTML = response.temp;
        
      })
      .catch((err) => console.error(err));

      fetch(
        'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+defcity[1],
        options
      )
        .then((response) => response.json())
        .then((response) => {
      
      
          console.log(response);
          feels_like2.innerHTML = response.feels_like;
          humidity2.innerHTML = response.humidity;
          max_temp2.innerHTML = response.max_temp;
          min_temp2.innerHTML = response.min_temp;
          temp2.innerHTML = response.temp;
          
        })
        .catch((err) => console.error(err));

        fetch(
          'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+defcity[2],
          options
        )
          .then((response) => response.json())
          .then((response) => {
        
        
            console.log(response);
            feels_like3.innerHTML = response.feels_like;
            humidity3.innerHTML = response.humidity;
            max_temp3.innerHTML = response.max_temp;
            min_temp3.innerHTML = response.min_temp;
            temp3.innerHTML = response.temp;
            
          })
          .catch((err) => console.error(err));

          fetch(
            'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+defcity[3],
            options
          )
            .then((response) => response.json())
            .then((response) => {
          
          
              console.log(response);
              feels_like4.innerHTML = response.feels_like;
              humidity4.innerHTML = response.humidity;
              max_temp4.innerHTML = response.max_temp;
              min_temp4.innerHTML = response.min_temp;
              temp4.innerHTML = response.temp;
              
            })
            .catch((err) => console.error(err));

            fetch(
              'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+defcity[4],
              options
            )
              .then((response) => response.json())
              .then((response) => {
            
            
                console.log(response);
                feels_like5.innerHTML = response.feels_like;
                humidity5.innerHTML = response.humidity;
                max_temp5.innerHTML = response.max_temp;
                min_temp5.innerHTML = response.min_temp;
                temp5.innerHTML = response.temp;
                
              })
              .catch((err) => console.error(err));


              fetch(
                'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+defcity[5],
                options
              )
                .then((response) => response.json())
                .then((response) => {
              
              
                  console.log(response);
                  feels_like6.innerHTML = response.feels_like;
                  humidity6.innerHTML = response.humidity;
                  max_temp6.innerHTML = response.max_temp;
                  min_temp6.innerHTML = response.min_temp;
                  temp6.innerHTML = response.temp;
                  
                })
                .catch((err) => console.error(err));
  
}
getDefaultWeather()





