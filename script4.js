console.log('\n\nChallenge 4');

var john = {
	fullName: 'John Mensah',
	mass: 50,
	height: 1.7,
	calcBMI: function(){
		this.BMI = this.mass / (this.height * this.height);
	}
}

var mark = {
	fullName: 'Mark Amponsah',
	mass: 52, 
	height: 1.7,
	calcBMI: function(){
		this.BMI = this.mass / (this.height * this.height);
	}
}
mark.calcBMI();
john.calcBMI();
if (mark.BMI > john.BMI){
	console.log(mark.fullName + ' has the highest BMI of ' + mark.BMI);
}else if(mark.BMI < john.BMI){
	console.log(john.fullName + ' has the highest BMI of ' + john.BMI);
}else{
	console.log(john.fullName + ' and ' + mark.fullName + ' has the same BMI of ' + mark.BMI);
}

