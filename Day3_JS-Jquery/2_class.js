// ES5
function Person(name, age){// a constructor
	this.name = name;
	this.age = age;

	this.details = function(){
		console.log(this.name + " is "+this.age+" years old.");
	}
}

var bob = new Person("BOB", 21);

// ES6
class Person1{

	constructor(name, age){
		this.name = name;
		this.age = age;
	}

	details(){
		console.log(`${name} is ${age} years old`);
	}
}

var tom = new Person1('Tom', 32);




// inheritance
class Employee extends Person1{
	constructor(name, age, salary){
		super(name, age);
		this.salary = salary;
	}

	getBonus(per){
		return this.salary * per/100;
	}
}