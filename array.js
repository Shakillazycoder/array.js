var x = 5;
var name = 'Shakil';
var male = true;

// var arrayName = [value1, value2, value3, value4,....] 

var numbers = [10, 20, 30, 40, 50, 60];
var names = ['Shakil', 'mahin', 'likhon']
console.log(numbers)
console.log(names)

// if i want to target a specific numbers then just selected index number into numbers

console.log(numbers[4])


// if i want to find index numbers then

console.log(numbers.indexOf(40));

// if i want to find numbers of index then
 
console.log(numbers.length);

// if i want to find a big serial numbers last index numbers then

console.log(numbers[numbers.length -1]);

// if i will add more numbers then

// arrayName . push

numbers.push(60, 70, 80);
console.log(numbers);

// if will remove array numbers then
// arrayName . pop

numbers.pop();
numbers.pop();
console.log(numbers);

// if i want to storage those array numbers which i removed it then
// var a = numbers.pop();

var a = numbers.pop();
console.log(a);

// if i want to add a numbers from the first serial then
numbers.unshift(5, 6, 9);
console.log(numbers);


// if i want to remove a numbers from the first serial then

numbers.shift();
console.log(numbers);


// if i want to target a specific area on my array then
// slice (kon index thake suru, kon index er ag porjonto)
console.log(numbers.slice(1));
console.log(numbers.slice(1,4));

// splice (start, deleteCount, push element1,2,3.......)

numbers.splice(2,1)
numbers.splice(2,1,100, 200)
console.log(2,0,100,200)
console.log(numbers);