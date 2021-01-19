//function constructor
/*
var Person = function(name, yearOfBirth, gender, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.gender = gender;
    this.name = job;
}

Person.prototype.calcAge = function(){
    console.log(2020 - this.yearOfBirth);
}
Person.prototype.lastName = 'Mensah';


var john = new Person('John', 1996, 'M', 'Tailor');
john.calcAge();
*/

//Object.create
var personProto = {
    calcAge: function(){
        return 2016-this.yearOfBirth;
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 2000;
john.job = 'Footballer';

var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 2001 },
    job: { value: 'Teacher '},
}); 

jane.age = jane.calcAge();






//Primitives and objects

//primitives
var a=20; 
var b=a;
a=25;
console.log(a);
console.log(b);

console.log('\n');

//objects
var obj1 = {
    name: 'Ralph',
    age: 23
};
var obj2 = obj1;
console.log(obj1.age);
console.log(obj1.age);


//function
var age = 30;
var obj = {
    name: 'Raph',
    city: 'Cape'
};
function change(a,b){
    a = 33;
    b.city = 'Taadiii';
}
change(age, obj);
console.log(age);
console.log(obj.city);

console.log('\n');



//1st Class Functions

//call back function
/*
var years = [2000, 1980, 1994, 1967];

function arrayCalc(arr, fn){
    var arrResult = [];

    for(var i=0; i<arr.length; i++){
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}

function calcAge(el){
    return 2020 - el;
}

function isFullAge(el){
    return el >= 18;
}

var ages = arrayCalc(years, calcAge);
console.log(ages);
var fullAge = arrayCalc(age, isFullAge);
console.log(fullAge);

*/


//functions returning functions

function question(job) {
    if (job === 'designer'){
        return  function(name){
            console.log(name + ', what is a design?');
        }
    }else if (job == 'teacher'){
        return function(name){
            console.log(name+', which subject do you teach?');
        }
    }else{
        return function(name){
            console.log(name + ', please which job do you do?');
        }
    }
}

var teacherQuestion = question('teacher');
teacherQuestion('John');

question('designer')('Raph');


//invoke function
function game(){
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

//invoking game()
(function (){
    var score = Math.random() * 10;
    console.log(score >= 5);
})();


//closures
function intQuestion(job){
    return function(name){
        if (job === 'designer'){
                console.log(name + ', what is a design?');
        }else if (job == 'teacher'){
                console.log(name+', which subject do you teach?');
        }else{
                console.log(name + ', please which job do you do?');
        }
    }
}

intQuestion('svv')('Ralph');

//bind, call & apply
var john = {
    name : 'John',
    age : 20,
    job : 'teacher',
    present : function(style, timeOfDay){
        if (style === 'formal'){
            console.log('Good '+timeOfDay+'. My name is '+this.name
            +' and I am '+this.age+'. I am a '+this.job+'.');
        }else if (style === 'informal'){
            console.log('Hey... My name is '+this.name
            +' and I am '+this.age+'. I am a '+this.job+'. Have a nice good '+timeOfDay); 
        }
    }
}

john.present('formal', 'morning');

john.present.call(jane, 'formal', 'morning');
var johnFriendly = john.present.bind(john, 'informal');

johnFriendly('evening');

//call: borrowing method 
//apply: borrowning method but argument is array
//bind: generates a copy of the function to store it somewhere 





















 






























