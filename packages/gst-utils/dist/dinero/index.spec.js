"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dinero_js_1 = __importDefault(require("dinero.js"));
const vitest_1 = require("vitest");
const _1 = require(".");
(0, vitest_1.describe)('GST Utils', () => {
    (0, vitest_1.describe)('Calculate Correct GST for Australia', () => {
        (0, vitest_1.it)('should be able to calculate correct pre-tax amount', () => {
            const amount = (0, dinero_js_1.default)({ amount: 10000 });
            const gst = new _1.DineroGSTUtils(10);
            const preTaxAmount = gst.getPreTaxAmount(amount);
            (0, vitest_1.expect)(preTaxAmount.toUnit()).toBe(90.91);
        });
        (0, vitest_1.it)('should be able to calculate included tax amount', () => {
            const amount = (0, dinero_js_1.default)({ amount: 10000 });
            const gst = new _1.DineroGSTUtils(10);
            const includedTaxAmount = gst.getIncludedTax(amount);
            (0, vitest_1.expect)(includedTaxAmount.toUnit()).toBe(9.09);
        });
        (0, vitest_1.it)('should be able to calculate tax included amount', () => {
            const amount = (0, dinero_js_1.default)({ amount: 10000 });
            const gst = new _1.DineroGSTUtils(10);
            const taxIncludedAmount = gst.getTaxIncludedAmount(amount);
            (0, vitest_1.expect)(taxIncludedAmount.toUnit()).toBe(110);
        });
        (0, vitest_1.it)('should be able to calculate tax on amount', () => {
            const amount = (0, dinero_js_1.default)({ amount: 10000 });
            const gst = new _1.DineroGSTUtils(10);
            const taxIncludedAmount = gst.getTaxAmount(amount);
            (0, vitest_1.expect)(taxIncludedAmount.toUnit()).toBe(10);
        });
    });
    (0, vitest_1.describe)('Calculate Correct GST for New Zealand', () => {
        (0, vitest_1.it)('should be able to calculate correct pre-tax amount', () => {
            const amount = (0, dinero_js_1.default)({ amount: 10000 });
            const gst = new _1.DineroGSTUtils(15);
            const preTaxAmount = gst.getPreTaxAmount(amount);
            (0, vitest_1.expect)(preTaxAmount.toUnit()).toBe(86.96);
        });
        (0, vitest_1.it)('should be able to calculate included tax amount', () => {
            const amount = (0, dinero_js_1.default)({ amount: 10000 });
            const gst = new _1.DineroGSTUtils(15);
            const includedTaxAmount = gst.getIncludedTax(amount);
            (0, vitest_1.expect)(includedTaxAmount.toUnit()).toBe(13.04);
        });
        (0, vitest_1.it)('should be able to calculate tax included amount', () => {
            const amount = (0, dinero_js_1.default)({ amount: 10000 });
            const gst = new _1.DineroGSTUtils(15);
            const taxIncludedAmount = gst.getTaxIncludedAmount(amount);
            (0, vitest_1.expect)(taxIncludedAmount.toUnit()).toBe(115);
        });
        (0, vitest_1.it)('should be able to calculate tax on amount', () => {
            const amount = (0, dinero_js_1.default)({ amount: 10000 });
            const gst = new _1.DineroGSTUtils(15);
            const taxIncludedAmount = gst.getTaxAmount(amount);
            (0, vitest_1.expect)(taxIncludedAmount.toUnit()).toBe(15);
        });
    });
});
