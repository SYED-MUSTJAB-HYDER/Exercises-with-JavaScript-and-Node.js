// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


let guest_list=["Imran Kiyani","Nadeem ul Hassan Syed","Rifhat Ismaeil"]

let invitation_txt="I invited you for lush dinner on eve of our Passing out from this course."
let invitation_txt2="I invited you for lush dinner on eve of our Passing out from this course.I found a bigger dinner table."

console.log(`This is the Start Array list ${guest_list}`)

let add_beginning_person=guest_list.unshift("Salman Hyder")
console.log('"Adding Person in beginning"')
for (var i=0;i<guest_list.length;i++){
      
      console.log(guest_list[i],invitation_txt)
}
let add_middle_person= guest_list.splice(guest_list.length/2,0,"Bajwa")
console.log('"Adding Person in middle"')
for (var i=0;i<guest_list.length;i++){
    
      console.log(guest_list[i],invitation_txt)
}

let add_end_person= guest_list.push("Safdar Raheem")
console.log('"Adding Person in End"')
for (var i=0;i<guest_list.length;i++){
    
      console.log(guest_list[i],invitation_txt)
}

console.log(`This is the final Array list ${guest_list}`)