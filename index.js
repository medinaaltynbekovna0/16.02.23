let example1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let example2 = [[1, 2, 3],[4, 5, 6], [7, 8, 9]];//три массива[1,2,3],[4, 5,6],

//console.log(example1.length);
//console.log(example2.length);

console.log(example1[2]);
console.log(example2[2]);
console.log(example1[4]);
console.log(example1[7]);

console.log(example2[1][1]);//многоуровневый массив

let test = example2[2];
console.log(test[1]);

for(let i =1; i <= example1.length; i++){//цикл
console.log(i);
}

for(let i = 0; i < example2.length; i++){//мультиуровневый массив
	for(let j = 0; j < example2.length; j++){
		console.log(example2[i][j]);
	}
}

let example3 = [33, 5, 6, 7, 33, 2, 11];
if(example3.includes(33)){
	console.log("yes");
}
else {
	console.log("no");
}

let example4 = [5, 6, 4, 3, 22, 0, 1];
let example5 = [4, 5, 7, 8, 72, 13];
if(example4.includes(72)){
	console.log("yes");
}
else {
	console.log("no");
}

if(example4.includes(44)){
	console.log("yes");
}
else {
	console.log("no");
}
if(example4.includes(0)){
	console.log("yes");
}
else {
	console.log("no");
}

for(let i = 0; i < example4.length; i++){
	console.log(example4[i]);
	if (example5.includes(example4[i])){
		console.log(example4[i]);
	}
	}

	let example6 = ["a","c","f","d","b"];//
	example6.reverse();
	console.log(example6.reverse());
  
  example6.sort();
	console.log(example6);

	//let example7 =[10, 51, 44, 2, 3, 6];//сортровка групп
	//example7.sort(funstion(a, b) {
	//	return a - b;
	//});
	//console.log(example7);
 


	let carPrice =[4000, 3000, 4000, 5000, 1000, 8000, 5000, 3000, 7000, 12000, 100];
	let totalPrice = 0;
	for(let i = 0; i < carPrice.length; i++){
		totalPrice = totalPrice + carPrice[i];
		}
		console.log(totalPrice);
 console.log(totalPrice / carPrice.length);

 
 carPrice.sort(function(a, b){
	return a - b;
 });
 console.log(carPrice);

let medianPrice = (carPrice[4] + carPrice[5]) / 2;
console.log(medianPrice);

let carPrices =[4000, 3000, 4000, 5000, 1000, 8000, 5000, 3000, 7000, 12000, 100];//
carPrices.sort();
console.log(carPrice);
let middle = (carPrice.length - 1) / 2;
console.log(carPrice[middle]);

