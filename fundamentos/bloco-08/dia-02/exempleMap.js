// const numbers = [1,2,3,4,5,6,7,8,9];


// const negativeNumbers = numbers.map((number) => number>0 ? number * (-1) : number);


// console.log(negativeNumbers);
// console.log(numbers);


const products = ["Arroz", 'feijão','Alface','Tomate'];
const prices = [2.99,3.99,1.5,2.00];


const productPrices = (list,price) => {
 return list.map((produto,index) => ({[produto]: price[index]}) )}

const listProducts = productPrices(products,prices);


console.log(listProducts);