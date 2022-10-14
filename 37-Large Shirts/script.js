// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size,text2){
      var large_size="Size = Large "
      var medium_size="Size = Medium "
      var text=" Print on Shirt 'I love JavaScript.'"
      console.log(large_size + text)
      console.log(medium_size + text)
      console.log(size + text2)
}
make_shirt("Size = small ","Print We Love Programming")