var tipsArr;
var paidAmts;

function tipCalc(bill){
	var tip = 0;
	// switch(bill){
	// 	case bill <= 50:
	// 		tip = 0.2 * bill;
	// 		console.log('vijiv');
	// 		break;
	// 	case bill>50 && bill <= 200:
	// 		tip = (15/100) * bill;
	// 		break;
	// 	case bill > 200:
	// 		tip = (10/100) * bill;
	// 		break;
	// 	default:
	// 		break;	
	// }

	if (bill <= 50){
		tip = 0.2 * bill;
	}else if (bill>50 && bill <= 200){
		tip = (15/100) * bill;
	}else{
		tip = (10/100) * bill;
	}

	return tip;

}

tipsArr = [tipCalc(124), tipCalc(48), tipCalc(268)];
paidAmts = [tipCalc(124) + 124, tipCalc(48) + 48, tipCalc(268) + 268];

console.log('Tips will be ', tipsArr);
console.log('Total amount of each bill will now be ', paidAmts);
