let guest_list=["Imran Kiyani","Nadeem ul Hassan Syed","Rifhat Ismaeil"]

let invitation_txt="I invited you for lush dinner on eve of our Passing out from this course."
let missing_person=guest_list.splice(0,1)
let adding_person=guest_list.splice(1,0,"Asad")


for (var i=0;i<guest_list.length;i++){
      console.log(guest_list[i],invitation_txt)
}

console.log(`The person ${missing_person} dropped from invitation. `)