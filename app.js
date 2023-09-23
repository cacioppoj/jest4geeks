console.log("Hello World")

const sum = (a,b) => {
    return a+b
}

console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 127.9,
    "USD": 1.2,
    "GBP": 0.8,
}

const fromDollarToYen = (amountDollar) => {
    return (amountDollar/oneEuroIs.USD) * oneEuroIs.JPY
}

const fromEuroToDollar = (amountEur) => {
    return (amountEur*oneEuroIs.USD) 
}

const fromYenToPound = (amountYen) => {
    return (amountYen/oneEuroIs.JPY) * oneEuroIs.GBP 
}

module.exports = {sum,fromDollarToYen,fromEuroToDollar,fromYenToPound};