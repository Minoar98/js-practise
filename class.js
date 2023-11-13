
class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }

    run(speed){
        console.log(this.name + 'is running' + speed)
    }
  }
  const bmw = new Car ('BMW', 1999);
  const audi = new Car ('Audi', 2000);

  audi.run (' 100 km per hour ');


  class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
  let myCar = new Model("Ford", "Mustang");
  document.getElementById("demo").innerHTML = myCar.show();