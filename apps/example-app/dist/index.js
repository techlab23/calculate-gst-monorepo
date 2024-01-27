"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dinero_js_1 = __importDefault(require("dinero.js"));
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const gst_utils_1 = require("gst-utils");
function main() {
    // Use the amount in cents to avoid floating point errors
    const amount = (0, dinero_js_1.default)({ amount: 10000 });
    const gau = new gst_utils_1.DineroGSTUtils(10);
    console.log('getPreTaxAmount (100): ', gau.getPreTaxAmount(amount).toUnit());
    console.log('getIncludedTax (100): ', gau.getIncludedTax(amount).toUnit());
    console.log('getTaxIncludedAmount (100): ', gau.getTaxIncludedAmount(amount).toUnit());
    console.log('getTaxOnAmount (100): ', gau.getTaxAmount(amount).toUnit());
    const gnz = new gst_utils_1.BigNumberGSTUtils(15);
    const amountB = (0, bignumber_js_1.default)(100);
    console.log('getPreTaxAmount (100): ', gnz.getPreTaxAmount(amountB).toNumber());
    console.log('getIncludedTax (100): ', gnz.getIncludedTax(amountB).toNumber());
    console.log('getTaxIncludedAmount (100): ', gnz.getTaxIncludedAmount(amountB).toNumber());
    console.log('getTaxOnAmount (100): ', gnz.getTaxAmount(amountB).toNumber());
}
main();
