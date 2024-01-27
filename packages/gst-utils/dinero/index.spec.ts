import Dinero from 'dinero.js';
import { describe, expect, it } from 'vitest';
import { DineroGSTUtils as GSTUtils } from '.';

describe('GST Utils', () => {
  describe('Calculate Correct GST for Australia', () => {
    it('should be able to calculate correct pre-tax amount', () => {
      const amount = Dinero({ amount: 10000 });
      const gst = new GSTUtils(10);
      const preTaxAmount = gst.getPreTaxAmount(amount);
      expect(preTaxAmount.toUnit()).toBe(90.91);
    });

    it('should be able to calculate included tax amount', () => {
      const amount = Dinero({ amount: 10000 });
      const gst = new GSTUtils(10);
      const includedTaxAmount = gst.getIncludedTax(amount);
      expect(includedTaxAmount.toUnit()).toBe(9.09);
    });

    it('should be able to calculate tax included amount', () => {
      const amount = Dinero({ amount: 10000 });
      const gst = new GSTUtils(10);
      const taxIncludedAmount = gst.getTaxIncludedAmount(amount);
      expect(taxIncludedAmount.toUnit()).toBe(110);
    });

    it('should be able to calculate tax on amount', () => {
      const amount = Dinero({ amount: 10000 });
      const gst = new GSTUtils(10);
      const taxIncludedAmount = gst.getTaxAmount(amount);
      expect(taxIncludedAmount.toUnit()).toBe(10);
    });
  });

  describe('Calculate Correct GST for New Zealand', () => {
    it('should be able to calculate correct pre-tax amount', () => {
      const amount = Dinero({ amount: 10000 });
      const gst = new GSTUtils(15);
      const preTaxAmount = gst.getPreTaxAmount(amount);
      expect(preTaxAmount.toUnit()).toBe(86.96);
    });

    it('should be able to calculate included tax amount', () => {
      const amount = Dinero({ amount: 10000 });
      const gst = new GSTUtils(15);
      const includedTaxAmount = gst.getIncludedTax(amount);
      expect(includedTaxAmount.toUnit()).toBe(13.04);
    });

    it('should be able to calculate tax included amount', () => {
      const amount = Dinero({ amount: 10000 });
      const gst = new GSTUtils(15);
      const taxIncludedAmount = gst.getTaxIncludedAmount(amount);
      expect(taxIncludedAmount.toUnit()).toBe(115);
    });

    it('should be able to calculate tax on amount', () => {
      const amount = Dinero({ amount: 10000 });
      const gst = new GSTUtils(15);
      const taxIncludedAmount = gst.getTaxAmount(amount);
      expect(taxIncludedAmount.toUnit()).toBe(15);
    });
  });
});
