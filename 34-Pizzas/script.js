// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.

var favorite_pizza=["Mushroom ","Sausage ","Onion "]
for(var i=0;i<favorite_pizza.length;i++){
      
      document.write(favorite_pizza[i])
      document.write("<br>")
}


// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
for(var i=0;i<favorite_pizza.length;i++){
      document.write(`I like ${favorite_pizza[i]} pizza`)
      document.write("<br>")
      

}

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
document.write("<br>")
document.write(`I like ${favorite_pizza[1]} pizza. It is very delicious and healthy food.Its also digest esily.The good thing is that this flaviour is cheeper than others so I can buy esily.But the best thing is that I caught this by my friends with tecnique.I really love ${favorite_pizza[1]} pizza! `)