import BigNumber from 'bignumber.js';

export class BigNumberGSTUtils {
  private taxRate: BigNumber;
  private taxRateDivisor: BigNumber;

  constructor(taxRate: number) {
    this.taxRate = BigNumber(taxRate).dividedBy(100);
    this.taxRateDivisor = this.taxRate.plus(1);
    BigNumber.config({ DECIMAL_PLACES: 2 });
  }

  getPreTaxAmount(amount: BigNumber) {
    return amount.dividedBy(this.taxRateDivisor);
  }

  getIncludedTax(amount: BigNumber) {
    return amount.multipliedBy(this.taxRate).dividedBy(this.taxRateDivisor);
  }

  getTaxIncludedAmount(amount: BigNumber) {
    return amount.multipliedBy(this.taxRateDivisor);
  }

  getTaxAmount(amount: BigNumber) {
    return amount.times(this.taxRate);
  }
}
