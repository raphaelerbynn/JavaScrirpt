console.log("\n\nHello world");


var johnTipser = {
	bills: [124, 48, 268, 180, 42],
	tips: [],
	totalAmount: [],
	tipCalc: function(){

		for(var i=0; i<this.bills.length; i++){

			if(this.bills[i] <= 50){
				this.tips[i] = (20/100)*this.bills[i];
			}

			else if(this.bills[i] > 50 && this.bills[i] <= 200){
				this.tips[i] = (15/100)*this.bills[i];
			}

			else{
				this.tips[i] = (10/100)*this.bills[i];
			}

			this.totalAmount[i] = this.bills[i] + this.tips[i];
		}
	}
};


johnTipser.tipCalc();


var markTipser = {
	bills: [77, 375, 110, 45],
	tips: [],
	totalAmount: [],
	tipCalc: function(){

		for(var i=0; i<this.bills.length; i++){

			if(this.bills[i] <= 100){
				this.tips[i] = (20/100)*this.bills[i];
			}

			else if(this.bills[i] > 100 && this.bills[i] <= 300){
				this.tips[i] = (10/100)*this.bills[i];
			}

			else{
				this.tips[i] = (25/100)*this.bills[i];
			}

			this.totalAmount[i] = this.bills[i] + this.tips[i];
		}
	}
};
markTipser.tipCalc();


function tipsAverage(tips){
	var totalTips = 0, average = 0;
	for(var i=0; i<tips.length; i++){
		totalTips += tips[i];
	}

	average = totalTips / tips.length;
	return average;
}



console.log(tipsAverage(johnTipser.tips));



console.log(johnTipser);
console.log('John\'s tips and total bill ');
for (var i = 0; i < johnTipser.bills.length; i++) {
	console.log(johnTipser.tips[i]+' , '+johnTipser.totalAmount[i]);
}


console.log();

if (tipsAverage(johnTipser.tips) > tipsAverage(markTipser.tips)){
	console.log('John paid more tips than Mark with average of ' + tipsAverage(johnTipser.tips));
}
else if(tipsAverage(johnTipser.tips) < tipsAverage(markTipser.tips)){
	console.log('Mark paid more tips than Mark with average of ' + tipsAverage(markTipser.tips));
}else{
	console.log('They both paid the same amount.');4
}










