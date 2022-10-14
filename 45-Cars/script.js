// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function car_obj(manufacturer,model){
      let car ={
            manufacturer : manufacturer,
            model : model,
            optional_feature:function(color,chasis){
                  car_obj.color=color,
                  car_obj.chasis=chasis
                  console.log(`Car color is ${color} and chasis number is ${chasis}`)


            }
            

      }
      return car;
}

let new_car = car_obj("Toyota",1988)
console.log(new_car);
console.log(new_car.optional_feature("red",7876577));