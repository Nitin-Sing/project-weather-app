
const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');

const temp_status = document.getElementById('temp_status');
const temp_real_val = document.getElementById('temp_real_val');

const datahide = document.querySelector('.middle_layer')

const getInfo = async(event)=>{
    event.preventDefault();

    let cityVal = cityName.value;
   
    
    if(cityVal === ""){
        city_name.innerText = `Please write the name before search`
        datahide.classList.add('data_hide');
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&APPID=76bc213c8cf677ad8fa38f25a632005a`;
        const response = await fetch(url);
        const data = await response.json()
        const arrData = [data];
        

        city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`
        temp_real_val.innerText = (arrData[0].main.temp - 273.15).toFixed(2);
        // console.log(data);
        datahide.classList.remove('data_hide');
        }catch{
            city_name.innerText = `Please enter the city name properly`
            datahide.classList.add('data_hide');
        }
    }
}


submitBtn.addEventListener('click', getInfo);