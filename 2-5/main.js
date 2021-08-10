var price = Number(process.argv[2]);

let price1 = price / 100 | 0;

let price2 = price - price1 * 100 | 0;

let price3 = price2 / 10 | 0;

let price4 = price2 - price3 * 10;

console.log(`100円玉${price1}枚, 10円玉${price3}枚, 1円玉${price4}枚`);