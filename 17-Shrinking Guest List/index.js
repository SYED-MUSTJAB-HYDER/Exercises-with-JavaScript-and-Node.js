let guest_list=["1-Imran Kiyani","2-Nadeem ul Hassan Syed","3-Rifhat Ismaeil"]

let invitation_txt="I invited you for lush dinner on eve of our Passing out from this course."
let invitation_txt2="I invited you for lush dinner on eve of our Passing out from this course.I found a bigger dinner table."

console.log(`This is the Start Array list ${guest_list}`)

let add_beginning_person=guest_list.unshift("1a-Salman Hyder")
console.log('"Adding Person in beginning"')
for (var i=0;i<guest_list.length;i++){
      
      console.log(guest_list[i],invitation_txt)
}
let add_middle_person= guest_list.splice(guest_list.length/2,0,"mid-Bajwa")
console.log('"Adding Person in middle"')
for (var i=0;i<guest_list.length;i++){
    
      console.log(guest_list[i],invitation_txt)
}

let add_end_person= guest_list.push("last-Safdar Raheem")
console.log('"Adding Person in End"')
for (var i=0;i<guest_list.length;i++){
    
      console.log(guest_list[i],invitation_txt)
}

console.log(`This is the final Array list ${guest_list}`)



// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.


// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

let limited_seats= "Sorry I can only invite only two guest for dinner."

for (var i=0;i<guest_list.length;i++){
    
      console.log(guest_list[i],limited_seats)
}


// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.


let applogies = "Sorry I can,t invite you for dinner."
let pop_name=guest_list.pop()

for(var i=guest_list.length=2;i<guest_list.length;i++){
      console.log(pop_name,applogies)
      
      
}

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

let still_invite="You are invited in my dinner."
for(var i=1;i<guest_list.length;i++){

      console.log(guest_list,still_invite);
}

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

for(let i=0;i<guest_list.length;i++){
      guest_list.pop();
      guest_list.pop();
}
console.log(guest_list)

