 let weather = {
     apiKey : "",
    fetchWeather: function(city){
        fetch( //get the url below
            "https://api.openweathermap.org/data/2.5/weather?q="
             + city 
             + "&units=imperial&appid=" //units 
             + this.apiKey
         ) 
            .then((response) => {
                if (!response.ok) {
                  alert("No weather found.");
                  throw new Error("No weather found.");
                }
                return response.json();
              })
            .then((data) => this.displayWeather(data)); 
    },
 
 displayWeather: function(data) { //find all the elements on the page and replace there content
    const { name } = data; // this will extract the name out of the data (the object)
    const {icon, description} = data.weather[0]; // this will extract the icon and description from data.weather 1st element since the key value pair is in that array 
    const {temp, humidity} = data.main;
    const { speed} = data.wind; // data.wind contains speed, so speed is taken out of the object and made into a variable
    console.log(name,icon,description,temp,humidity,speed);
    /// now to display this information we just set the variables too. ///
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = Math.round(temp) +"°F";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed:" + speed + "km/h";
    document.querySelector(".weather").classList.remove("loading") // it will remove the class loading and make the css for this not function
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + description + "')" //sets background as photos related to the description
 },
 search: function () {
     this.fetchWeather(document.querySelector(".search-bar").value); // what ever value is entered in search bar will be in the weather.fetchWeather(_).
     console.log(document.querySelector(".search-bar").value);
    
 }

};

// the search button // 

document.querySelector(".search button").addEventListener("click", function(){ // when search button is clicked on the function of  Search function in Weather will be initialized 
weather.search();
});

// for the enter key and what if no info was entered // 


document.querySelector(".search-bar").addEventListener("keyup", function (event){ //keyup is when key is released
    if (event.key == "Enter"){ // when the key used is the enter button
        weather.search();
    }
})


// create a loading so the dummy page doesn't load until the accurate information is displayed.
weather.fetchWeather("Modesto"); //this is executed when the page is loaded. 

// export {weather};

