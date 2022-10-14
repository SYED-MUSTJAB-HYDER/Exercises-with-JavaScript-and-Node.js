// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
var current_users=["Ali","Asad","Irfan","Salman","Hyder"]

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
var new_users=["Asad","Salman","Naveed","Mustjab","Zafar"]

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
var inputUser=prompt("Enter Your New User Name :")
var found_name=false;
for(i=0;i<new_users.length;i++){
      if(new_users.includes(inputUser) && inputUser.toLowerCase()){
            alert(("enter a new username"))
            found_name=true;
            break;


      }
      

}
if(found_name==false){
      alert(" username is available")
}

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

