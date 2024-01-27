"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DineroGSTUtils = void 0;
const dinero_js_1 = __importDefault(require("dinero.js"));
class DineroGSTUtils {
    taxRate;
    taxRateDivisor;
    constructor(taxRate) {
        this.taxRate = (0, dinero_js_1.default)({ amount: taxRate * 100 }).divide(100);
        this.taxRateDivisor = this.taxRate.add((0, dinero_js_1.default)({ amount: 100 })).toUnit();
    }
    getPreTaxAmount(amount) {
        return amount.divide(this.taxRateDivisor);
    }
    getIncludedTax(amount) {
        // const divisor = taxRate.add(Dinero({ amount: 100 })).toUnit();
        // return amount.multiply(taxRate.toUnit()).divide(divisor);
        return amount.multiply(this.taxRate.toUnit()).divide(this.taxRateDivisor);
    }
    getTaxIncludedAmount(amount) {
        return amount.multiply(this.taxRateDivisor);
    }
    getTaxAmount(amount) {
        return amount.percentage(this.taxRate.getAmount());
    }
}
exports.DineroGSTUtils = DineroGSTUtils;
