//creating classes
class Animal {
    constructor (Name ,age){
        this.Name = Name;
        this.age = age;

    }
    getName()   {  // reusing the code
        return this.Name
    }
    getAge()  {
        return this.age
    }
}
let name = new Animal("tiger", 12)
console.log(name.Name)
console.log(name.age)
let domestic = new Animal("dog",10) 
console.log(domestic.getName())
console.log(domestic.getAge())

//static class
class car {
    static myCar =  "bently"
} 
console.log(car.myCar)
