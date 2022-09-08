//----------------Addition-----------------

function printSum (sum1, sum2){
	let sumResult= (sum1 + sum2);
	console.log ("Displayed sum of" +" "+ sum1 +" " +"and" +" "+sum2)
	console.log (sumResult);
}

printSum(5, 15);

// ---------------Subtraction----------------

function printDifference (diff1, diff2){
	let diffResult= (diff1 - diff2);
	console.log ("Displayed difference of" +" "+ diff1 +" " +"and" +" "+diff2);
	console.log (diffResult);
}

printDifference(20, 5);

// ---------------Multiplication----------------

function returnProduct(product1, product2){
	let productResult = product1 * product2;
	console.log ("The product of" +" "+ product1 +" " +"and" +" "+product2 +":");

	return productResult;
}

let product = returnProduct(50,10);
console.log(product); 

// ---------------Division----------------

function returnQoutient(dividend1, dividend2){
	let qoutientResult = dividend1 / dividend2;
	console.log ("The qoutient of" +" "+ dividend1 +" " +"and" +" "+dividend2+":");

	return qoutientResult;
}

let qoutient =returnQoutient(50,10);
console.log(qoutient);

// ---------------Area of circle----------------

function totalAreaOfCircle(radius){
	const pi = 3.1416;
	let area = pi * (radius**2);

	console.log ("The result of getting the area of a circle with" +" "+ radius +" " +"radius:");

	return area;
}

let circleArea = totalAreaOfCircle(15);
console.log	(circleArea);

// ---------------Average of four Numbers---------------

function getAverage(avg1, avg2, avg3, avg4){

		let totalAvg = (avg1 + avg2 + avg3 + avg4) / 4;
		console.log ("The average of" + " " +avg1 +","+ avg2 +"," + avg3 + " " + "and" + " " + avg4 + ":");

		return totalAvg;

}

let averageVar = getAverage(20,40,60,80);
console.log(averageVar);

// ---------------Passing Score Checker---------------

function checkIfPassed(yourScore, totalScore){

	let score = (yourScore/totalScore) * 100;
	let  scoreChecker = score>=75;

	console.log("Is" + " " +yourScore+ "/" +totalScore+ " "+ "a passing score?");

	return scoreChecker;

}

let isPassing = checkIfPassed(38,50);
console.log(isPassing);














