var weatherApi = `**********`;
//var googleApi = `**********`;
var latitude = NaN;
var longitude = NaN;
var type_c = 'metric';
var type_f = 'imperial';


var data_0 ='-----';
var main_description_0 = '-----';
var humidity_0='-----';
var pressure_0='-----';
var wind_direction_0='-----';
var wind_speed_0='-----';
var day_temperature_0='-----';
var evening_temperature_0='-----';
var max_temperature_0='-----';
var min_temperature_0='-----';
var morning_temperature_0='-----';
var night_temperature_0='-----';

var data_1 ='-----';
var main_description_1 ='-----';
var humidity_1='-----';
var pressure_1='-----';
var wind_direction_1='-----';
var wind_speed_1='-----';
var day_temperature_1='-----';
var evening_temperature_1='-----';
var max_temperature_1='-----';
var min_temperature_1='-----';
var morning_temperature_1='-----';
var night_temperature_1='-----';

var data_2 ='-----';
var main_description_2 = '-----';
var humidity_2='-----';
var pressure_2='-----';
var wind_direction_2='-----';
var wind_speed_2='-----';
var day_temperature_2='-----';
var evening_temperature_2='-----';
var max_temperature_2='-----';
var min_temperature_2='-----';
var morning_temperature_2='-----';
var night_temperature_2='-----';


var data_3 ='-----';
var main_description_3 ='-----';
var humidity_3='-----';
var pressure_3='-----';
var wind_direction_3='-----';
var wind_speed_3='-----';
var day_temperature_3='-----';
var evening_temperature_3='-----';
var max_temperature_3='-----';
var min_temperature_3='-----';
var morning_temperature_3='-----';
var night_temperature_3='-----';



var data_4 ='-----';
var main_description_4 = '-----';
var humidity_4='-----';
var pressure_4='-----';
var wind_direction_4='-----';
var wind_speed_4='-----';
var day_temperature_4='-----';
var evening_temperature_4='-----';
var max_temperature_4='-----';
var min_temperature_4='-----';
var morning_temperature_4='-----';
var night_temperature_4='-----';



var data_5 ='-----';
var main_description_5 = '-----';
var humidity_5='-----';
var pressure_5='-----';
var wind_direction_5='-----';
var wind_speed_5='-----';
var day_temperature_5='-----';
var evening_temperature_5='-----';
var max_temperature_5='-----';
var min_temperature_5='-----';
var morning_temperature_5='-----';
var night_temperature_5='-----';


var data_6 ='-----';
var main_description_6 = '-----';
var humidity_6='-----';
var pressure_6='-----';
var wind_direction_6='-----';
var wind_speed_6='-----';
var day_temperature_6='-----';
var evening_temperature_6='-----';
var max_temperature_6='-----';
var min_temperature_6='-----';
var morning_temperature_6='-----';
var night_temperature_6='-----';





       
function search() {
    const city = document.getElementById('input').value;
    current_Weather(city, latitude, longitude, weatherApi);
   
    }

    var time_format = function(dt) {
          const dtt = dt*1000;
          const d = new Date(dtt);
          const strDate = d.toDateString();
          return strDate;
    }
    
    function wind_dir(val){
        let Index = val % 360;
        Index = Math.floor(Index/ 22.5)+1;
        var end_val=NaN;
        switch(Index) {
            case 1:
            end_val = 'N';
            break;
            case 2:
            end_val = 'NNE';
            break;
            case 3:
            end_val = 'NE';
            break;
            case 4:
            end_val = 'ENE';
            break;
            case 5:
            end_val = 'E';
            break;
            case 6:
            end_val = 'ESE';
            break;
            case 7:
            end_val = 'SE';
            break;
            case 8:
            end_val = 'SSE';
            break;
            case 9:
            end_val = 'S';
            break;
            case 10:
            end_val = 'SSW';
            break;
            case 11:
            end_val = 'SW';
            break;
            case 12:
            end_val = 'WSW';
            break;
            case 13:
            end_val = 'W';
            break;
            case 14:
            end_val = 'WNW';
            break;
            case 15:
            end_val = 'NW';
            break;
            case 16:
            end_val = 'NNW';
            break;
            case 17:
            end_val = 'N';
            break;
            default:
          console.log('error occurs');
       }
        return end_val;
    }
  
    /*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
  
    function current_Weather(city, latitude, longitude, weatherApi) {
       
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApi}&units=metric`)//AJAX Request
            .then(result => {
                console.log('Getting result....');
                return result.json();
            })
            .then(data => {
                console.log(data);
                
                latitude = data.coord.lat;
                longitude = data.coord.lon;

                
                document.getElementById('temperature').textContent = `${data.main.temp} C`;
                document.getElementById('description').textContent = `${data.weather[0].description}`;

                document.getElementById('place').textContent = `${data.name}`;
                document.getElementById('latitude').textContent = `${data.coord.lat}`;
                document.getElementById('longitude').textContent = `${data.coord.lon}`;
                document.getElementById('country').textContent = `${data.sys.country}`;

                document.getElementById('date').textContent = time_format(data.dt); 
                document.getElementById('wind_degree').textContent = wind_dir(data.wind.deg);
                document.getElementById('wind_speed').textContent = `${data.wind.speed} m/s`;

                document.getElementById('temp_min').textContent = `${data.main.temp_max} C`;
                document.getElementById('temp_max').textContent = `${data.main.temp_min} C`;
                document.getElementById('humidity').textContent = `${data.main.humidity}%`;
                document.getElementById('pressure').textContent = `${data.main.pressure} hPa`;


                weekly_Weather(latitude, longitude, weatherApi);
                getting_map(latitude, longitude);
              
            })
            .catch(error => {
                
                  console.log(error + '. Please enter a valid name !');
                
                
                
            });
                    }
    
    
      /*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
  
      function weekly_Weather(lat_val, lng_val, weatherApi){
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat_val}&lon=${lng_val}&exclude=minutely,hourly,alerts&appid=${weatherApi}&units=metric`)
      .then(result => {
        console.log('Getting result....');
        return result.json();
        })
      .then(data => {   
         console.log(data);
         document.getElementById('date_0').textContent = time_format(data.daily[1].dt);
         document.getElementById('temperature_0').textContent = `${data.daily[1].temp.day} C`;
         document.getElementById('description_0').textContent = `${data.daily[1].weather[0].description}`;

         document.getElementById('date_1').textContent = time_format(data.daily[2].dt);
         document.getElementById('temperature_1').textContent = `${data.daily[2].temp.day} C`;
         document.getElementById('description_1').textContent = `${data.daily[2].weather[0].description}`;

         document.getElementById('date_2').textContent = time_format(data.daily[3].dt);
         document.getElementById('temperature_2').textContent = `${data.daily[3].temp.day} C`;
         document.getElementById('description_2').textContent = `${data.daily[3].weather[0].description}`;

         document.getElementById('date_3').textContent = time_format(data.daily[4].dt);
         document.getElementById('temperature_3').textContent = `${data.daily[4].temp.day} C`;
         document.getElementById('description_3').textContent = `${data.daily[4].weather[0].description}`;

         document.getElementById('date_4').textContent = time_format(data.daily[5].dt);
         document.getElementById('temperature_4').textContent = `${data.daily[5].temp.day} C`;
         document.getElementById('description_4').textContent = `${data.daily[5].weather[0].description}`;

         document.getElementById('date_5').textContent = time_format(data.daily[6].dt);
         document.getElementById('temperature_5').textContent = `${data.daily[6].temp.day} C`;
         document.getElementById('description_5').textContent = `${data.daily[6].weather[0].description}`;

         document.getElementById('date_6').textContent = time_format(data.daily[7].dt);
         document.getElementById('temperature_6').textContent = `${data.daily[7].temp.day} C`;
         document.getElementById('description_6').textContent = `${data.daily[7].weather[0].description}`;



  date_0 = data.daily[1].dt;
  main_description_0 = data.daily[1].weather[0].main;
  humidity_0 = data.daily[1].humidity;
  pressure_0 = data.daily[1].pressure;
  wind_direction_0 = wind_dir(data.daily[1].wind_deg);
  wind_speed_0 = data.daily[1].wind_speed;
  day_temperature_0 = data.daily[1].temp.day;
  evening_temperature_0 = data.daily[1].temp.eve;
  max_temperature_0 = data.daily[1].temp.max;
  min_temperature_0 = data.daily[1].temp.min;
  morning_temperature_0 = data.daily[1].temp.morn;
  night_temperature_0 = data.daily[1].temp.night;


  date_1 = data.daily[2].dt;
  main_description_1 = data.daily[2].weather[0].main;
  humidity_1 = data.daily[2].humidity;
  pressure_1 = data.daily[2].pressure;
  wind_direction_1 = wind_dir(data.daily[2].wind_deg);
  wind_speed_1 = data.daily[2].wind_speed;
  day_temperature_1 = data.daily[2].temp.day;
  evening_temperature_1 = data.daily[2].temp.eve;
  max_temperature_1 = data.daily[2].temp.max;
  min_temperature_1 = data.daily[2].temp.min;
  morning_temperature_1 = data.daily[2].temp.morn;
  night_temperature_1 = data.daily[2].temp.night;



  date_2 = data.daily[3].dt;
  main_description_2 = data.daily[3].weather[0].main;
  humidity_2 = data.daily[3].humidity;
  pressure_2 = data.daily[3].pressure;
  wind_direction_2 = wind_dir(data.daily[3].wind_deg);
  wind_speed_2 = data.daily[3].wind_speed;
  day_temperature_2 = data.daily[3].temp.day;
  evening_temperature_2 = data.daily[3].temp.eve;
  max_temperature_2 = data.daily[3].temp.max;
  min_temperature_2 = data.daily[3].temp.min;
  morning_temperature_2 = data.daily[3].temp.morn;
  night_temperature_2 = data.daily[3].temp.night;




  date_3 = data.daily[4].dt;
  main_description_3 = data.daily[4].weather[0].main;
  humidity_3 = data.daily[4].humidity;
  pressure_3 = data.daily[4].pressure;
  wind_direction_3 = wind_dir(data.daily[4].wind_deg);
  wind_speed_3 = data.daily[4].wind_speed;
  day_temperature_3 = data.daily[4].temp.day;
  evening_temperature_3 = data.daily[4].temp.eve;
  max_temperature_3 = data.daily[4].temp.max;
  min_temperature_3 = data.daily[4].temp.min;
  morning_temperature_3 = data.daily[4].temp.morn;
  night_temperature_3 = data.daily[4].temp.night;



  date_4 = data.daily[5].dt;
  main_description_4 = data.daily[5].weather[0].main;
  humidity_4 = data.daily[5].humidity;
  pressure_4 = data.daily[5].pressure;
  wind_direction_4 = wind_dir(data.daily[5].wind_deg);
  wind_speed_4 = data.daily[5].wind_speed;
  day_temperature_4 = data.daily[5].temp.day;
  evening_temperature_4 = data.daily[5].temp.eve;
  max_temperature_4 = data.daily[5].temp.max;
  min_temperature_4= data.daily[5].temp.min;
  morning_temperature_4 = data.daily[5].temp.morn;
  night_temperature_4 = data.daily[5].temp.night;





  date_5 = data.daily[6].dt;
  main_description_5 = data.daily[6].weather[0].main;
  humidity_5 = data.daily[6].humidity;
  pressure_5 = data.daily[6].pressure;
  wind_direction_5 = wind_dir(data.daily[6].wind_deg);
  wind_speed_5 = data.daily[6].wind_speed;
  day_temperature_5 = data.daily[6].temp.day;
  evening_temperature_5 = data.daily[6].temp.eve;
  max_temperature_5 = data.daily[6].temp.max;
  min_temperature_5 = data.daily[6].temp.min;
  morning_temperature_5 = data.daily[6].temp.morn;
  night_temperature_5 = data.daily[6].temp.night;



  date_6 = data.daily[7].dt;
  main_description_6 = data.daily[7].weather[0].main;
  humidity_6 = data.daily[7].humidity;
  pressure_6 = data.daily[7].pressure;
  wind_direction_6 = wind_dir(data.daily[7].wind_deg);
  wind_speed_6 = data.daily[7].wind_speed;
  day_temperature_6 = data.daily[7].temp.day;
  evening_temperature_6 = data.daily[7].temp.eve;
  max_temperature_6 = data.daily[7].temp.max;
  min_temperature_6 = data.daily[7].temp.min;
  morning_temperature_6 = data.daily[7].temp.morn;
  night_temperature_6 = data.daily[7].temp.night;


      

          
      })
      .catch(err => {
        console.log(error);
        console.log('error occurred');
      });
      }
  
      /*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
   function getting_map(latitude, longitude){
            var pos = new google.maps.LatLng(latitude, longitude);
            initMap(pos);
    };
      let marker;
      function initMap(location){
        
      var map = new google.maps.Map(document.getElementById("map"), {
        center:location,  
        zoom:8
          
      });
  
      marker = new google.maps.Marker({
        position:location,
        map:map,
        //draggable:true,
        animation:google.maps.Animation.DROP,
        icon:`https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png`,
        //label:'you are here',// permanent info
        title:'your search result'// mouse hover
        
    });
  //  marker.addEventListener('click',toggleBounce);
  
      }
/*

      function toggleBounce() {
        if(marker.getAnimation() !== null) {
          marker.setAnimation(null);
        }else{
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      }

*/

document.querySelector(".day_0").addEventListener("mouseover", mouseOver_0);
document.querySelector(".day_0").addEventListener("mouseout", mouseOut);

document.querySelector(".day_1").addEventListener("mouseover", mouseOver_1);
document.querySelector(".day_1").addEventListener("mouseout", mouseOut);

document.querySelector(".day_2").addEventListener("mouseover", mouseOver_2);
document.querySelector(".day_2").addEventListener("mouseout", mouseOut);

document.querySelector(".day_3").addEventListener("mouseover", mouseOver_3);
document.querySelector(".day_3").addEventListener("mouseout", mouseOut);

document.querySelector(".day_4").addEventListener("mouseover", mouseOver_4);
document.querySelector(".day_4").addEventListener("mouseout", mouseOut);

document.querySelector(".day_5").addEventListener("mouseover", mouseOver_5);
document.querySelector(".day_5").addEventListener("mouseout", mouseOut);

document.querySelector(".day_6").addEventListener("mouseover", mouseOver_6);
document.querySelector(".day_6").addEventListener("mouseout", mouseOut);

function mouseOver_0() {
  document.getElementById("display_map").style.display = "block";

  document.getElementById('weekly_description').textContent = main_description_0;
  document.getElementById('weekly_humidity').textContent = humidity_0+'%';
  document.getElementById('weekly_pressure').textContent = pressure_0+' hPa';
  document.getElementById('weekly_day_temp').textContent = day_temperature_0+' C';
  document.getElementById('weekly_even_temp').textContent = evening_temperature_0+' C';
  document.getElementById('weekly_max_temp').textContent = max_temperature_0+' C';
  document.getElementById('weekly_min_temp').textContent = min_temperature_0+' C';
  document.getElementById('weekly_morning_temp').textContent = morning_temperature_0+' C';
  document.getElementById('weekly_night_temp').textContent = night_temperature_0+' C';
  document.getElementById('weekly_wind_dir').textContent = wind_direction_0;
  document.getElementById('weekly_wind_speed').textContent = wind_speed_0+' m/s';



}
function mouseOver_1() {
  document.getElementById("display_map").style.display = "block";
 
  document.getElementById('weekly_description').textContent = main_description_1;
  document.getElementById('weekly_humidity').textContent = humidity_1+'%';
  document.getElementById('weekly_pressure').textContent = pressure_1+' hPa';
  document.getElementById('weekly_day_temp').textContent = day_temperature_1+' C';
  document.getElementById('weekly_even_temp').textContent = evening_temperature_1+' C';
  document.getElementById('weekly_max_temp').textContent = max_temperature_1+' C';
  document.getElementById('weekly_min_temp').textContent = min_temperature_1+' C';
  document.getElementById('weekly_morning_temp').textContent = morning_temperature_1+' C';
  document.getElementById('weekly_night_temp').textContent = night_temperature_1+' C';
  document.getElementById('weekly_wind_dir').textContent = wind_direction_1;
  document.getElementById('weekly_wind_speed').textContent = wind_speed_1+' m/s';
  
}


function mouseOver_2() {
  document.getElementById("display_map").style.display = "block";
 
  document.getElementById('weekly_description').textContent = main_description_2;
  document.getElementById('weekly_humidity').textContent = humidity_2+'%';
  document.getElementById('weekly_pressure').textContent = pressure_2+' hPa';
  document.getElementById('weekly_day_temp').textContent = day_temperature_2+' C';
  document.getElementById('weekly_even_temp').textContent = evening_temperature_2+' C';
  document.getElementById('weekly_max_temp').textContent = max_temperature_2+' C';
  document.getElementById('weekly_min_temp').textContent = min_temperature_2+' C';
  document.getElementById('weekly_morning_temp').textContent = morning_temperature_2+' C';
  document.getElementById('weekly_night_temp').textContent = night_temperature_2+' C';
  document.getElementById('weekly_wind_dir').textContent = wind_direction_2;
  document.getElementById('weekly_wind_speed').textContent = wind_speed_2+' m/s';
  
}

function mouseOver_3() {
  document.getElementById("display_map").style.display = "block";
 
  document.getElementById('weekly_description').textContent = main_description_3;
  document.getElementById('weekly_humidity').textContent = humidity_3+'%';
  document.getElementById('weekly_pressure').textContent = pressure_3+' hPa';
  document.getElementById('weekly_day_temp').textContent = day_temperature_3+' C';
  document.getElementById('weekly_even_temp').textContent = evening_temperature_3+' C';
  document.getElementById('weekly_max_temp').textContent = max_temperature_3+' C';
  document.getElementById('weekly_min_temp').textContent = min_temperature_3+' C';
  document.getElementById('weekly_morning_temp').textContent = morning_temperature_3+' C';
  document.getElementById('weekly_night_temp').textContent = night_temperature_3+' C';
  document.getElementById('weekly_wind_dir').textContent = wind_direction_3;
  document.getElementById('weekly_wind_speed').textContent = wind_speed_3+' m/s';
  
}

function mouseOver_4() {
  document.getElementById("display_map").style.display = "block";
 
  document.getElementById('weekly_description').textContent = main_description_4;
  document.getElementById('weekly_humidity').textContent = humidity_4+'%';
  document.getElementById('weekly_pressure').textContent = pressure_4+' hPa';
  document.getElementById('weekly_day_temp').textContent = day_temperature_4+' C';
  document.getElementById('weekly_even_temp').textContent = evening_temperature_4+' C';
  document.getElementById('weekly_max_temp').textContent = max_temperature_4+' C';
  document.getElementById('weekly_min_temp').textContent = min_temperature_4+' C';
  document.getElementById('weekly_morning_temp').textContent = morning_temperature_4+' C';
  document.getElementById('weekly_night_temp').textContent = night_temperature_4+' C';
  document.getElementById('weekly_wind_dir').textContent = wind_direction_4;
  document.getElementById('weekly_wind_speed').textContent = wind_speed_4+' m/s';
  
}

function mouseOver_5() {
  document.getElementById("display_map").style.display = "block";
 
  document.getElementById('weekly_description').textContent = main_description_5;
  document.getElementById('weekly_humidity').textContent = humidity_5+'%';
  document.getElementById('weekly_pressure').textContent = pressure_5+' hPa';
  document.getElementById('weekly_day_temp').textContent = day_temperature_5+' C';
  document.getElementById('weekly_even_temp').textContent = evening_temperature_5+' C';
  document.getElementById('weekly_max_temp').textContent = max_temperature_5+' C';
  document.getElementById('weekly_min_temp').textContent = min_temperature_5+' C';
  document.getElementById('weekly_morning_temp').textContent = morning_temperature_5+' C';
  document.getElementById('weekly_night_temp').textContent = night_temperature_5+' C';
  document.getElementById('weekly_wind_dir').textContent = wind_direction_5;
  document.getElementById('weekly_wind_speed').textContent = wind_speed_5+' m/s';
  
}

function mouseOver_6() {
  document.getElementById("display_map").style.display = "block";
 
  document.getElementById('weekly_description').textContent = main_description_6;
  document.getElementById('weekly_humidity').textContent = humidity_6+'%';
  document.getElementById('weekly_pressure').textContent = pressure_6+' hPa';
  document.getElementById('weekly_day_temp').textContent = day_temperature_6+' C';
  document.getElementById('weekly_even_temp').textContent = evening_temperature_6+' C';
  document.getElementById('weekly_max_temp').textContent = max_temperature_6+' C';
  document.getElementById('weekly_min_temp').textContent = min_temperature_6+' C';
  document.getElementById('weekly_morning_temp').textContent = morning_temperature_6+' C';
  document.getElementById('weekly_night_temp').textContent = night_temperature_6+' C';
  document.getElementById('weekly_wind_dir').textContent = wind_direction_6;
  document.getElementById('weekly_wind_speed').textContent = wind_speed_6+' m/s';
  
}


function mouseOut() {
  document.getElementById("display_map").style.display = "none";//none

}









