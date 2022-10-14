// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

var items=["cream","salad","butter","chize"]

function sandwich_item(items){
      console.log(`Sandwich with ${items}.`);

}
sandwich_item(items[0])
sandwich_item(items[1])
sandwich_item(items[2])