/* Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/

var magician_names=["David Blaine","David Copperfield","Apollo Robbins","Shin Lim"]
var magician_names_copy=magician_names.slice()
function make_great(magician_names_copy){
      for(i=0;i<magician_names_copy.length;i++){
      console.log(`Great ${magician_names_copy[i]}`)
     
     }

}

make_great(magician_names_copy)


console.log("Orignal Arry is ")
function show_magicians(magician_names){
      
      for(var i=0;i<magician_names.length;i++){
            
            console.log(magician_names[i])
      }
}  
show_magicians(magician_names);

