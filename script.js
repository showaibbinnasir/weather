    
    const searchbtn = document.getElementById('searchbtn');
    searchbtn.addEventListener("click", ()=>{
        const cityName = document.getElementById("cityname").value;
        document.getElementById('error').style.display = "none";
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=eb8bbbac4d2a2d166e0004d1326f50a0')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const city = data.name;
            const country = data.sys.country;
            const tem = data.main.temp;
            const temp = tem - 273.15;

            const humadify = data.main.humidity;
            const realFeel = data.main.feels_like;
            const realfeel = realFeel - 273.15;

            const description = data.weather[0].description;
            document.getElementById('city').innerHTML = city;
            document.getElementById('country').innerHTML = country;
            document.getElementById('temp').innerHTML = temp.toFixed(1);
            document.getElementById('humadify').innerHTML = humadify + "%";
            document.getElementById('realfeel').innerHTML =" " + realfeel.toFixed(1)+"&deg;C";

            document.getElementById('description').innerHTML = description;
        })
        .catch(res => {
            document.getElementById('error').style.display = "block";
            
        })
    })
    
    