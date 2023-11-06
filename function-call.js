// const a = {
//     firstName:'Sumit',
//     sleep: function(){
//         console.log(`${this.firstName} is sleeping`)
//     }
// }
// a.sleep();


const person = {
     fullName: function(city, country) {
       return this.firstName + " " + this.lastName +  city +  country;
    }
  }
  const person1 = {
     firstName:"John",
     lastName: "Doe"
  }
  const person2 = {
     firstName:"Mary",
      lastName: "Doe"
  }
  
  // This will return "John Doe":
 console.log(person.fullName.call(person2, 'Dhaka', 'Bangladesh'));
