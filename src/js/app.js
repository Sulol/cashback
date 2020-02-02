const regularPurchase = 500;
const regularPurchasePercent = 0.01;

const increasedPurchase = 600;
const increasedPurchasePercent = 0.05;

const specialPurchase = 700;
const scecialPurchasePercent = 0.3;



const cashbackLimit = 3000;

let cashback = regularPurchase * regularPurchasePercent + 
increasedPurchase * increasedPurchasePercent + 
specialPurchase * scecialPurchasePercent;

    if (cashback > cashbackLimit) {
    cashback = cashbackLimit
}
console.log(cashback);