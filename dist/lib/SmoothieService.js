"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseService_1 = require("./BaseService");
class SmoothieService extends BaseService_1.default {
    constructor() {
        super('www.smoothiecentral.com');
    }
    getSmoothieOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.get(`${this.getServiceContext()}/smoothie/orders`);
        });
    }
    createNewSmoothieOrder(order) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post(`${this.getServiceContext()}/smoothie/createorder`, order);
        });
    }
    modifySmoothieOrder(order) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.update(`${this.getServiceContext()}/smoothie/createorder`, order);
        });
    }
    deleteSmoothieOrder(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.delete(`${this.getServiceContext()}/smoothie/deleteorder/${orderId}`);
        });
    }
    testResponse() {
        return new Promise((resolve, reject) => resolve({
            orderNumber: 1,
            smoothieOrders: [
                {
                    fruit: 'apple',
                    blendStyle: 'chunky',
                    size: 'medium',
                },
                {
                    fruit: 'apple',
                    blendStyle: 'chunky',
                    size: 'medium',
                }
            ]
        }));
    }
}
exports.default = SmoothieService;
