// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.


const myFaviourat_places=["Muzafarabad","Kazkistan","Thiland","K-2","Islamabad"]

// • Print your array in its original order.
const copy_myFaviourat_places=myFaviourat_places.slice()
console.log(copy_myFaviourat_places)


// • Print your array in alphabetical order without modifying the actual list.
const sorted_arry=copy_myFaviourat_places.sort()

console.log(sorted_arry)

// • Show that your array is still in its original order by printing it.
// let original_arry2=myFaviourat_places

console.log(myFaviourat_places)

// • Print your array in reverse alphabetical order without changing the order of the original list.

copy_myFaviourat_places.reverse();
console.log(copy_myFaviourat_places);

// • Show that your array is still in its original order by printing it again.

console.log(myFaviourat_places)

// • Reverse the order of your list. Print the array to show that its order has changed.

copy_myFaviourat_places.reverse()
console.log(copy_myFaviourat_places)

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

console.log(myFaviourat_places)


// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

const again_sorted=myFaviourat_places.slice()
console.log("Again sorted",again_sorted.sort())