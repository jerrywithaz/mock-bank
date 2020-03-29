function createStringDollarAmount(amount: number) {
    if (amount === 0) {
        return "$0.00";
    }
    else if (amount > 0) {
        return `$${amount.toFixed(2)}`;
    }
    else {
        return `-$${Math.abs(amount).toFixed(2)}`;
    }
}

export default createStringDollarAmount;