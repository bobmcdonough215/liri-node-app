#Purpose
The purpose of this project was to make a Node.js app that depends on user input from the command line. The user would open Ternminal and input node, file name, the command, and a random movie, artist, song, or "do-what-it-says" in the .txt file. This would use API calls and parse through returned JSON objects, outputting them in a specified format.

movie-this would return:
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.

concert-this would return:
     * Name of the venue

     * Venue location

     * Date of the Event (use moment to format this as "MM/DD/YYYY")

     (If the band is currently on tour)

spotify-this-song would return:

     * Artist(s)

     * The song's name

     * A preview link of the song from Spotify

     * The album that the song is from

do-what-it-says would return the text that is in the random.txt file.


#Technologies Used
Node.js
JavaScript
Bands In Town API 
Spotify API 
OMDb API 
