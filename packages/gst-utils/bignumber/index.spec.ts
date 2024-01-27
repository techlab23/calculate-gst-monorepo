import BigNumber from 'bignumber.js';
import { describe, expect, it } from 'vitest';
import { BigNumberGSTUtils as GSTUtils } from '.';

describe('GST Utils', () => {
  describe('Calculate Correct GST for Australia', () => {
    it('should be able to calculate correct pre-tax amount', () => {
      const amount = new BigNumber(100);
      const gst = new GSTUtils(10);
      const preTaxAmount = gst.getPreTaxAmount(amount);
      expect(preTaxAmount.toNumber()).toBe(90.91);
    });

    it('should be able to calculate included tax amount', () => {
      const amount = BigNumber(100);
      const gst = new GSTUtils(10);
      const includedTaxAmount = gst.getIncludedTax(amount);
      expect(includedTaxAmount.toNumber()).toBe(9.09);
    });

    it('should be able to calculate tax included amount', () => {
      const amount = BigNumber(100);
      const gst = new GSTUtils(10);
      const taxIncludedAmount = gst.getTaxIncludedAmount(amount);
      expect(taxIncludedAmount.toNumber()).toBe(110);
    });

    it('should be able to calculate tax on amount', () => {
      const amount = BigNumber(100);
      const gst = new GSTUtils(10);
      const taxIncludedAmount = gst.getTaxAmount(amount);
      expect(taxIncludedAmount.toNumber()).toBe(10);
    });
  });

  describe('Calculate Correct GST for New Zealand', () => {
    it('should be able to calculate correct pre-tax amount', () => {
      const amount = BigNumber(100);
      const gst = new GSTUtils(15);
      const preTaxAmount = gst.getPreTaxAmount(amount);
      expect(preTaxAmount.toNumber()).toBe(86.96);
    });

    it('should be able to calculate included tax amount', () => {
      const amount = BigNumber(100);
      const gst = new GSTUtils(15);
      const includedTaxAmount = gst.getIncludedTax(amount);
      expect(includedTaxAmount.toNumber()).toBe(13.04);
    });

    it('should be able to calculate tax included amount', () => {
      const amount = BigNumber(100);
      const gst = new GSTUtils(15);
      const taxIncludedAmount = gst.getTaxIncludedAmount(amount);
      expect(taxIncludedAmount.toNumber()).toBe(115);
    });

    it('should be able to calculate tax on amount', () => {
      const amount = BigNumber(100);
      const gst = new GSTUtils(15);
      const taxAmount = gst.getTaxAmount(amount);
      expect(taxAmount.toNumber()).toBe(15);
    });
  });
});
