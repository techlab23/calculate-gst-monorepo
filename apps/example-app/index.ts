import Dinero from 'dinero.js';
import BigNumber from 'bignumber.js';
import { DineroGSTUtils, BigNumberGSTUtils } from 'gst-utils';

function main() {
  // Use the amount in cents to avoid floating point errors
  const amount = Dinero({ amount: 10000 });

  const gau = new DineroGSTUtils(10);
  console.log('getPreTaxAmount (100): ', gau.getPreTaxAmount(amount).toUnit());
  console.log('getIncludedTax (100): ', gau.getIncludedTax(amount).toUnit());
  console.log('getTaxIncludedAmount (100): ', gau.getTaxIncludedAmount(amount).toUnit());
  console.log('getTaxOnAmount (100): ', gau.getTaxAmount(amount).toUnit());

  const gnz = new BigNumberGSTUtils(15);
  const amountB = BigNumber(100);
  console.log('getPreTaxAmount (100): ', gnz.getPreTaxAmount(amountB).toNumber());
  console.log('getIncludedTax (100): ', gnz.getIncludedTax(amountB).toNumber());
  console.log('getTaxIncludedAmount (100): ', gnz.getTaxIncludedAmount(amountB).toNumber());
  console.log('getTaxOnAmount (100): ', gnz.getTaxAmount(amountB).toNumber());
}

main();
