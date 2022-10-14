// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

var magician_names=["David Blaine","David Copperfield","Apollo Robbins","Shin Lim"]

function show_magicians(magician_names){
      
      for(var i=0;i<magician_names.length;i++){
            
            console.log(magician_names[i])
      }
}  
show_magicians(magician_names);