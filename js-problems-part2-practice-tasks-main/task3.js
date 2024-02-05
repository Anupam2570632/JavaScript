//problem---Your task is to calculate the total budget required to buy electronics:

function calculateElectronicsBudget(laptop, tablet, mobile) {
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;
    const totalPrice = (laptopPrice * laptop) + (tabletPrice * tablet) + (mobilePrice * mobile);
    return totalPrice;
}

const result = calculateElectronicsBudget(1, 3, 0);
console.log(result);