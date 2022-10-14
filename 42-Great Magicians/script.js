// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

var magician_names=["David Blaine","David Copperfield","Apollo Robbins","Shin Lim"]


function make_great(magician_names){
      for(i=0;i<magician_names.length;i++){
            console.log(`Great ${magician_names[i]}`)
      }

}
make_great(magician_names)

function show_magicians(magician_names){
      
      for(var i=0;i<magician_names.length;i++){
            
            console.log(magician_names[i])
      }
}  
show_magicians(magician_names);



