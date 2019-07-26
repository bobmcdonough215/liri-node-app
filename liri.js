
require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var fs = require("fs");
var axios = require("axios");
var moment = require('moment');

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

// BANDS IN TOWN --------------------------------------------------------

function concert(artist) {
  console.log("this is the concert");
  var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

  // This line is just to help us debug against the actual URL.
  console.log(queryUrl);

  axios.get(queryUrl).then(
    function (response) {
      console.log(response);
      console.log("Venue " + response.data[0].venue.name),
        console.log("Venue Location " + response.data[0].venue.region + ", " + response.data[0].venue.city),
        console.log("Date of event " + moment(response.data[0].datetime).format("MM DD YYYY"))
    })
    .catch(function (error) {
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
    })


}

// SPOTIFY --------------------------------------------------------

function spotifyThis(song) {
  spotify.search({ type: 'track', query: song })
.then(function(response) {
console.log(response);
console.log(response.tracks.artists);


})
}


  // call the spotify API

  //  step 2 get the response and console log the necessaery data, data is found in instructions


// OMDB --------------------------------------------------------
//Search OMDB Function
function searchOMDB(movie) {
  console.log("this is the movie");
  var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

  // This line is just to help us debug against the actual URL.
  console.log(queryUrl);

  axios.get(queryUrl).then(
    function (response) {
      console.log(response);
      if (response) {
          console.log("Movie Title: " + response.data.Title),
          console.log("Release Year: " + response.data.Year),
          console.log("IMDB Rating: " + response.data.imdbRating),
          console.log("Rotten Tomatoes Rating: " + response.data.Title),
          console.log("Country: " + response.data.Country),
          console.log("Language: " + response.data.Language),
          console.log("Plot: " + response.data.Plot),
          console.log("Actors/Actresses: " + response.data.Actors)
      }
    });
  //   .catch (function (error) {
  //   if (error.response) {
  //     // The request was made and the server responded with a status code
  //     // that falls out of the range of 2xx
  //     console.log("---------------Data---------------");
  //     console.log(error.response.data);
  //     console.log("---------------Status---------------");
  //     console.log(error.response.status);
  //     console.log("---------------Status---------------");
  //     console.log(error.response.headers);
  //   } else if (error.request) {
  //     // The request was made but no response was received
  //     // `error.request` is an object that comes back with details pertaining to the error that occurred.
  //     console.log(error.request);
  //   } else {
  //     // Something happened in setting up the request that triggered an Error
  //     console.log("Error", error.message);
  //   }
  //   console.log(error.config);
  // }
// });


function doWhatItSays() {
  console.log("do what it says");
  switch (dataArr[0]) {
    case "concert-this":
      concert(searchTerm);
      break;
    case "spotify-this-song":
      spotifyThis(searchTerm);
      break;
    case "movie-this":
      searchOMDB(searchTerm);
      break;
  }
}

}