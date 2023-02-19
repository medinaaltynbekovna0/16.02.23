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




//1. Напишите функцию, которая выводит ваше имя и фамилию.
// functionName("Erjan", "Kydyrov") // My  name is Erjan Kydyrov
function myName(){
	console.log("Medina")
}
myName();


//2. Напишите функцию, которая выводит объем конуса по заданным параметрам - высота (height) и радиус (radius).
// functionName(hfunction myName(){


//3. Напишите функцию, которая принимает строку и возвращает ее длину.
// functionName(" ... ") // Длина строки равна ...

//4. Напишите функцию, которая принимает число и проверяет, четное оно или нечетное.
// functionName(num) // Число - четное || Число - нечетное
function number (c) {
	if (number % 2 === 0) {
		console.log("this number is even");
	}
	else if (number % 2 === 1) {
		console.log("this is not even");
	}
	else {
		console.log("this is wrong command");
	}
}

//5. Напишите функцию, которая возвращает квадрат числа.
// functionName(num) // Квадрат этого числа равен

//6. Напишите функцию, которая возвращает корень числа.
// functionName(num) // Корень этого числа равен

//7. Напишите функцию, которая возвращает периметр пятиугольника.
// functionName(a, b, c, d, e) // Периметр - ...

//8. Напишите цикл, который выводит каждое третье число в промежутке от 0 до 33.
// 0 3 6 9 ...

//9. Напишите цикл, вычисляющий факториал числа 8. (8!)
// ...

//10. Напишите цикл, который выводит квадраты чисел от 1 до 10.
// 1 4 9 ...

//11. Напишите цикл, который вычисляет сумму чисел от 1 до 25.
// ... 

//12. Напишите цикл, который печатает четные числа от 0 до 20.
// 0 2 4

//13. Напишите цикл, который печатает нечетные числа от 1 до 15.
// 1 3 ...

//14. Создайте массив из строк и добавьте в начало массива 2 новых элемента, а в конец 3.

//15. Создайте массив чисел и вычислите сумму всех четных чисел в массиве.

//17. Создайте массив строк и объедините их в одну строку. // ["I", "like", "to", "eat!"]

//18. Создайте массив строк ["one", "two", "three"] и переверните его. // ["three", "two", "one"]

//19. Создайте массив из имен (минимум 3) и выведите каждое имя.
// Hello Erjan Hello Ermek ... 

//20. Создайте массив из чисел и выведите квадраты этих чисел. [2, 3, 4, 5]
// 4 9 16 25

//21. Создайте массив строк и проверьте есть ли такой элемент в массиве. // ["cat", "dog", "snake"] 
// cat - true
// parrot - false