"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GSTUtils = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
class GSTUtils {
    taxRate;
    taxRateDivisor;
    constructor(taxRate) {
        this.taxRate = (0, bignumber_js_1.default)(taxRate).dividedBy(100);
        this.taxRateDivisor = this.taxRate.plus(1);
        bignumber_js_1.default.config({ DECIMAL_PLACES: 2 });
    }
    getPreTaxAmount(amount) {
        return amount.dividedBy(this.taxRateDivisor);
    }
    getIncludedTax(amount) {
        return amount.multipliedBy(this.taxRate).dividedBy(this.taxRateDivisor);
    }
    getTaxIncludedAmount(amount) {
        return amount.multipliedBy(this.taxRateDivisor);
    }
    getTaxAmount(amount) {
        return amount.times(this.taxRate);
    }
}
exports.GSTUtils = GSTUtils;
