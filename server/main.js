import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(function()
{
	// class Person
	// {
	// 	constructor(name = 'Anonymous', age = 0)
	// 	{
	// 		this.name = name;
	// 		this.age = age;
	// 	}

	// 	getGreeting()
	// 	{
	// 		return `Hi! I am ${this.name}.`;
	// 	}

	// 	getPersonDescription()
	// 	{
	// 		return `${this.name} is ${this.age} year(s) old.`;
	// 	}
	// }

	// class Employee extends Person
	// {
	// 	constructor(name, age, tittle)
	// 	{
	// 		super(name, age);
	// 		this.tittle = tittle;
	// 	}

	// 	getGreeting()
	// 	{
	// 		if(this.tittle){
	// 			return `Hi! I am ${this.name}. I work as a ${this.tittle}`;
	// 		}
	// 		else{
	// 			return super.getGreeting();
	// 		}
	// 	}

	// 	hasJob()
	// 	{
	// 		return !!this.tittle;
	// 	}
	// }

	// class Programmer extends Person
	// {
	// 	constructor(name, age, preferredLanguage = 'assembly')
	// 	{
	// 		super(name, age);
	// 		this.preferredLanguage = preferredLanguage;
	// 	}

	// 	getGreeting()
	// 	{
	// 		return `Hi! I am ${this.name}. I am a ${this.preferredLanguage} developer.`;
	// 	}
	// }

	// let me = new Programmer('Andrew', 25, 'holaa');
	// console.log(me.getGreeting());


	//let square = (x) => x*x;

	//console.log(square(10));

	// let user = 
	// {
	// 	name: 'Andrew',
	// 	sayHi ()
	// 	{
	// 		setTimeout(() =>
	// 		{
	// 			console.log(this.name);
	// 		}, 1000);
	// 	}
	// };

	// user.sayHi(1, 2);

	// let house =
	// {
	// 	bedroms: 2,
	// 	batdroms: 1.5
	// };

	// let year = 1995;

	// let newe =
	// {
	// 	...house,
	// 	bedroms: 3,
	// 	year,
	// 	floring: 'carpet'
	// };
	// console.log(newe);
});