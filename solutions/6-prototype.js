// BEGIN
function Money(value, currency = 'usd') {
    this.value = value;
    this.currency = currency.toLowerCase();
}

Money.prototype.getValue = function () {
    return this.value;
};

Money.prototype.getCurrency = function () {
    return this.currency;
};

Money.prototype.exchangeTo = function (targetCurrency) {
    targetCurrency = targetCurrency.toLowerCase();

    if (this.currency === targetCurrency) {
        return new Money(this.value, this.currency);
    }

    let newValue;
    if (this.currency === 'usd' && targetCurrency === 'eur') {
        newValue = this.value * 0.7;
    } else if (this.currency === 'eur' && targetCurrency === 'usd') {
        newValue = this.value * 1.2;
    } else {
        throw new Error(`Unsupported currency conversion: ${this.currency} -> ${targetCurrency}`);
    }

    return new Money(newValue, targetCurrency);
};

Money.prototype.add = function (otherMoney) {
    let otherConverted =
        otherMoney.getCurrency() !== this.currency
        ? otherMoney.exchangeTo(this.currency)
        : otherMoney;

    const sum = this.value + otherConverted.getValue();
    return new Money(sum, this.currency);
};

Money.prototype.format = function () {
    return this.value.toLocaleString(undefined, {
        style: 'currency',
        currency: this.currency.toUpperCase(),
    });
};

export default Money;
// END

