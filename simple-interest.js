function simpleInterest(principle, rate, time) {
    const onlyInterest = (principle * rate * time) / 100;
    console.log("onle Interest", onlyInterest);
    const totalAmount = principle + onlyInterest;
    console.log("total Amount", totalAmount);
}
const shudkhor = simpleInterest(1000, 10, 2);
