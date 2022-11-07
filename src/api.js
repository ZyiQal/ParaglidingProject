function buttonClicked(){
    var city = document.getElementById("city").value
    console.log(city)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2`)

    .then(response => response.json())
    .then(data => {
        var info=data
        console.log(data)
        console.log("Weather:",data.weather[0].main)
        console.log("Description:",data.weather[0].description)
        document.getElementById("display0").append("Weather:",(data.weather[0].description))

        console.log("Wind Speed:",data.wind.speed)
        console.log("Wind Degree:",data.wind.deg)
        
        document.getElementById("display1").append("Wind Speed:",(data.wind.speed),"m/h")
        document.getElementById("display2").append("Wind Degree:",(data.wind.deg))
        
        tot=

        console.log("Temp:",data.main.temp)
        document.getElementById("display3").append("Temp:",(data.main.temp))
        document.getElementById("info").removeAttribute("hidden")
    })}