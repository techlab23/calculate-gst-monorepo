import Dinero from 'dinero.js';

export class DineroGSTUtils {
  private taxRate: Dinero.Dinero;
  private taxRateDivisor: number;

  constructor(taxRate: number) {
    this.taxRate = Dinero({ amount: taxRate * 100 }).divide(100);
    this.taxRateDivisor = this.taxRate.add(Dinero({ amount: 100 })).toUnit();
  }

  getPreTaxAmount(amount: Dinero.Dinero) {
    return amount.divide(this.taxRateDivisor);
  }

  getIncludedTax(amount: Dinero.Dinero) {
    // const divisor = taxRate.add(Dinero({ amount: 100 })).toUnit();
    // return amount.multiply(taxRate.toUnit()).divide(divisor);
    return amount.multiply(this.taxRate.toUnit()).divide(this.taxRateDivisor);
  }

  getTaxIncludedAmount(amount: Dinero.Dinero) {
    return amount.multiply(this.taxRateDivisor);
  }

  getTaxAmount(amount: Dinero.Dinero) {
    return amount.percentage(this.taxRate.getAmount());
  }
}
