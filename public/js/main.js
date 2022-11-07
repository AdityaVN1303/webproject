const cityName = document.getElementById('cityName')
const submitBtn = document.getElementById('submitBtn')
const city_name = document.getElementById('city_name')
const temp_status = document.getElementById('temp_status')
const temp = document.getElementById('temp')
const datahide = document.querySelector('.middle_layer')

const getInfo = async(event)=>{
   event.preventDefault();
   let cityVal = cityName.value

    if(cityVal === ""){
        city_name.innerText = "Plz Enter Something"
        datahide.classList.add('data_hide')
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=3e44a863047a83b4af330fe3db0a45c5`
        const response = await fetch(url)
        const data = await response.json()
        const arrData = [data]
        datahide.classList.remove('data_hide')

    // Farenheit to Celcius

       let faren = arrData[0].main.temp
       let celcius = `${Math.floor(faren - 273.15)} °C `



        temp.innerText = celcius
        city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`
        let tempMood = arrData[0].weather[0].main

    //  Code for Clouds Logo

       if(tempMood == "Clear"){
        temp_status.innerHTML = "<i class='fa fa-sun' style= 'color: #eccc68'></i>"
       }
       else if(tempMood == "Clouds"){
        temp_status.innerHTML = "<i class='fa fa-cloud' style= 'color: #add8e6'></i>"
       }
       else if(tempMood == "Rain"){
        temp_status.innerHTML = "<i class='fa fa-rain' style= 'color: #a4b0be'></i>"
       }
       else{
        temp_status.innerHTML = "<i class='fa fa-cloud' style= 'color: #f12f12f6'></i>"
       }




        }
        catch{
            city_name.innerText = "Plz Enter City Name Properly"
            datahide.classList.add('data_hide')
        }
        
    }



}

submitBtn.addEventListener('click', getInfo)