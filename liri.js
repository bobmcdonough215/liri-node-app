require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var fs =require("fs");
var axious = require("axios");

var command = process.argv[2];
console.log(command);


  
  var searchTerm = process.argv.slice(3).join(" ");
  console.log(searchTerm);


switch (command) {
    case "concert-this":
concert();
        break;
    case "spotify-this-song":
        spotify();
        break;
    case "movie-this":
        movie();
        break;
    case "do-what-it-says":
        doWhatItSays();
        break;
    default:
        console.log("Please enter a valid search");
}

function concert(){
console.log("");

// Call bands in town API

// step 2 get the response and console log the necessaery data, data is found in instructions


}
function spotify (){
console.log("this is spotify");

// call the spotify API

//  step 2 get the response and console log the necessaery data, data is found in instructions
}
function movie (){
    console.log("this is the movie");

    // call the omdb api
    // step 2 get the response and console log the necessaery data, data is found in instructions

}
function doWhatItSays (){
    console.log("do what it says");
    // reading the .txt, use fs.readfile
    // calling the spotify api wiuth that specific song
}
