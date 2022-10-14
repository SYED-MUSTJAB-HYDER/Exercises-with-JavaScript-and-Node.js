// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

function make_album(artist_name,album_tital,number_of_tracks){

      let music = {
            artist_name: artist_name,
            album_tital: album_tital,
            number_of_tracks:number_of_tracks,
      }
      return music;
      
}
let new_artist1= make_album("Ali","Dil Ki Batt")
let new_artist2= make_album("Amir Saleem","Mutyarr")
let new_artist3= make_album("Nusrat Fthay Ali","Dam mast Qalander Ali Ali",6)
console.log(new_artist1)
console.log(new_artist2)
console.log(new_artist3)