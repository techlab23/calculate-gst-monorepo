"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const vitest_1 = require("vitest");
const _1 = require(".");
(0, vitest_1.describe)('GST Utils', () => {
    (0, vitest_1.describe)('Calculate Correct GST for Australia', () => {
        (0, vitest_1.it)('should be able to calculate correct pre-tax amount', () => {
            const amount = new bignumber_js_1.default(100);
            const gst = new _1.GSTUtils(10);
            const preTaxAmount = gst.getPreTaxAmount(amount);
            (0, vitest_1.expect)(preTaxAmount.toNumber()).toBe(90.91);
        });
        (0, vitest_1.it)('should be able to calculate included tax amount', () => {
            const amount = (0, bignumber_js_1.default)(100);
            const gst = new _1.GSTUtils(10);
            const includedTaxAmount = gst.getIncludedTax(amount);
            (0, vitest_1.expect)(includedTaxAmount.toNumber()).toBe(9.09);
        });
        (0, vitest_1.it)('should be able to calculate tax included amount', () => {
            const amount = (0, bignumber_js_1.default)(100);
            const gst = new _1.GSTUtils(10);
            const taxIncludedAmount = gst.getTaxIncludedAmount(amount);
            (0, vitest_1.expect)(taxIncludedAmount.toNumber()).toBe(110);
        });
        (0, vitest_1.it)('should be able to calculate tax on amount', () => {
            const amount = (0, bignumber_js_1.default)(100);
            const gst = new _1.GSTUtils(10);
            const taxIncludedAmount = gst.getTaxAmount(amount);
            (0, vitest_1.expect)(taxIncludedAmount.toNumber()).toBe(10);
        });
    });
    (0, vitest_1.describe)('Calculate Correct GST for New Zealand', () => {
        (0, vitest_1.it)('should be able to calculate correct pre-tax amount', () => {
            const amount = (0, bignumber_js_1.default)(100);
            const gst = new _1.GSTUtils(15);
            const preTaxAmount = gst.getPreTaxAmount(amount);
            (0, vitest_1.expect)(preTaxAmount.toNumber()).toBe(86.96);
        });
        (0, vitest_1.it)('should be able to calculate included tax amount', () => {
            const amount = (0, bignumber_js_1.default)(100);
            const gst = new _1.GSTUtils(15);
            const includedTaxAmount = gst.getIncludedTax(amount);
            (0, vitest_1.expect)(includedTaxAmount.toNumber()).toBe(13.04);
        });
        (0, vitest_1.it)('should be able to calculate tax included amount', () => {
            const amount = (0, bignumber_js_1.default)(100);
            const gst = new _1.GSTUtils(15);
            const taxIncludedAmount = gst.getTaxIncludedAmount(amount);
            (0, vitest_1.expect)(taxIncludedAmount.toNumber()).toBe(115);
        });
        (0, vitest_1.it)('should be able to calculate tax on amount', () => {
            const amount = (0, bignumber_js_1.default)(100);
            const gst = new _1.GSTUtils(15);
            const taxAmount = gst.getTaxAmount(amount);
            (0, vitest_1.expect)(taxAmount.toNumber()).toBe(15);
        });
    });
});
