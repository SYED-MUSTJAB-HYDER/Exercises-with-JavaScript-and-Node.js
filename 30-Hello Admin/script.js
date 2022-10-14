// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

var usernames = ["Salman","Rashid","Arsalan","Mousa Khan","admin"]
var inputUser=prompt("Enter Your Login name1 ")
var found=false;
for(i=0;i<usernames.length;i++){
      if(usernames[i]==inputUser && usernames[i]=="admin" ){
          
            console.log("Hello admin, would you like to see a status report?")
            found=true;
            break;
      }
      
}
if(found==false){
      for(i=0;usernames.length;i++){
            if(usernames[i]==inputUser && usernames[i]!="admin"){
                  
                  console.log(`Hello ${usernames[i]} , thank you for logging in again.`)
                  found=true;
                  break;
            }
      }
}