require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var fs =require("fs");
var axios = require("axios");

var command = process.argv[2];
console.log(command);


  
  var searchTerm = process.argv.slice(3).join(" ");
  console.log(searchTerm);


switch (command) {
    case "concert-this":
concert(searchTerm);
        break;
    case "spotify-this-song":
        spotifyThis(searchTerm);
        break;
    case "movie-this":
        searchOMDB(searchTerm);
        break;
    case "do-what-it-says":
        doWhatItSays();
        break;
    default:
        console.log("Please enter a valid search");
}

function concert(){
console.log("");


//almost the same as OMDB
//use axios to call
//var queryUrl = 
// Call bands in town API

//https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp

// step 2 get the response and console log the necessaery data, data is found in instructions


}
function spotifyThis (song){
    spotify.search({ type: 'track', query: song }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log(data.tracks.items[0].artists[0.external_urls]); 
      });
console.log("this is spotify");

// call the spotify API

//  step 2 get the response and console log the necessaery data, data is found in instructions
}

//Search OMDB Function
function searchOMDB (movie){
    console.log("this is the movie");
    var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

    // This line is just to help us debug against the actual URL.
    console.log(queryUrl);
    
    axios.get(queryUrl).then(
      function(response) {
        console.log(response);
        console.log("Movie Title: " + response.data.Title)
        console.log("Movie Title: " + response.data.Title)
        console.log("Movie Title: " + response.data.Title)
        console.log("Movie Title: " + response.data.Title)
      })
      .catch(function(error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log("---------------Data---------------");
          console.log(error.response.data);
          console.log("---------------Status---------------");
          console.log(error.response.status);
          console.log("---------------Status---------------");
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an object that comes back with details pertaining to the error that occurred.
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });

}
function doWhatItSays (){
    console.log("do what it says");
    // reading the .txt, use fs.readfile
    // calling the spotify api wiuth that specific song
}
