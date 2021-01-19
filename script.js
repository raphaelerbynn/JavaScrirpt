console.log("Hello world");

var massJohn, massMark, heightJohn, heightMark;

massMark = 55;
massJohn = 60;

heightMark = 4.6;
heightJohn = 5.0;

console.log('Mark\'s mass is ' + massMark + 'kg and height is ' + heightMark + 'm.');
console.log('John\'s mass is ' + massJohn + 'kg and height is ' + heightJohn + 'm.');

var BMIJohn, BMIMark;

BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJohn * heightJohn);

console.log('Mark\'s BMI is ' + BMIMark);
console.log('John\'s BMI is ' + BMIJohn);

var comapareBMI = BMIMark > BMIJohn;

console.log('Mark\'s BMI higher than John\'s? ' + comapareBMI);

