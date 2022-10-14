// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.



var usernames = ["Salman","Rashid","Arsalan","Mousa Khan","admin"]
console.log("user list=",usernames)
if(usernames != [])
for(i=0;i<usernames.length;i++){
      
      usernames.splice(0,usernames.length)
      console.log(usernames)
}

console.log("We need to find some users!")
