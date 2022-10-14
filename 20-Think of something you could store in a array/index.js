// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let list_of_cities= new Array(5);

for (var i=0;i<list_of_cities.length;i++){
     
      list_of_cities[i]=prompt("Enter name of your favorite City : ")
}

for (var j=0; j<list_of_cities.length; j++){

      document.write(`${list_of_cities[j]} \n `)
}
