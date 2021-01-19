var averageTeamJohnPoints, averageTeamMikePoints, averageTeamMaryPoints;

var teamJohnPoints = 120 + 89 + 103;
var teamMikePoints = 116 + 94 + 123;
var teamMaryPoints = 97 + 134 + 10;


averageTeamJohnPoints = teamJohnPoints / 3;
averageTeamMikePoints = teamMikePoints / 3;
averageTeamMaryPoints = teamMaryPoints / 3;

if ((averageTeamMikePoints > averageTeamJohnPoints) && (averageTeamMikePoints > averageTeamMaryPoints)){
	console.log('Mike\'s team won with '+averageTeamMikePoints+' points. \nJohn\'s team had '+averageTeamJohnPoints+' points. \nMary\'s team had '+averageTeamMaryPoints+' points.');
}
else if((averageTeamJohnPoints > averageTeamMikePoints) && (averageTeamJohnPoints > averageTeamMaryPoints)){
	console.log('John\'s team won with '+averageTeamJohnPoints+' points. \nMike\'s team had '+averageTeamMikePoints+' points. \nMary\'s team had '+averageTeamMaryPoints+' points.');
}
else if((averageTeamMaryPoints > averageTeamMikePoints) && (averageTeamJohnPoints < averageTeamMaryPoints)){
	console.log('Mary\'s team won with '+averageTeamMaryPoints+' points. \nMike\'s team had '+averageTeamMikePoints+' points. \nJohn\'s team had '+averageTeamJohnPoints+' points.');
}
else{
	console.log('Mike\'s team had '+averageTeamMikePoints+' points. \nJohn\'s team had '+averageTeamJohnPoints+' points. \nMary\'s team had '+averageTeamMaryPoints+' points.\nTherefore, its a DRAW');
}