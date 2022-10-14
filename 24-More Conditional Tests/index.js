// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

let string_a = "String";
let string_b = "string";

console.log(string_a == string_b ? "True" : "False")

// • Tests using the lower case function


 let country_name= prompt("Enter Your country name to check equality : ")
country_name=="pakistan"
console.log(country_name.toLowerCase()==country_name ? "True" : "False")

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let num1=34;
let num2=23;
console.log("Num1= ",num1)
console.log("Num2= ",num2)
console.log("check num1 greater than num2 ",num1>num2)
console.log("check num1 less than num2 ",num1<num2)
console.log("check num1 less than and equal than num2 ",num1<=num2)
console.log("check num1 greater than and equal num2 ",num1>=num2)
console.log("check num1 equal to num2 ",num1==num2)

// • Tests using "and" and "or" operators
// "and"
let age = 35;
let marks= 800;

let input_age=Number(prompt("Input your age"))
let input_marks=Number(prompt("Input your marks ="))


console.log(input_age==age && input_marks==marks ? "True":"False")

// "or"
let age1 = 35;
let marks1= 879;

let input_age1=Number(prompt("Input your age"))
let input_marks1=Number(prompt("Input your marks ="))


console.log(input_age1==age1 || input_marks1==marks1 ? "True":"False")


// • Test whether an item is in a array/Test whether an item is not in a array

let find_element=[1,2,3,4,5,6,7,8,9,0]
let input_number=Number(prompt("Enter your Searching number : "))
var found_num=false;

for(i=0;i<find_element.length;i++){
      

      if(find_element[i]=== input_number){
            console.log(`Requaired Number is found`)
            found_num=true;
            break;
      
      }
      
}
if(found_num=false){
      console.log("Not Found")
}