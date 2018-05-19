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
const SmoothieService_1 = require("../lib/SmoothieService");
// import { SmoothieOrder, SmoothieOrderResponse } from '../lib/smoothieServiceTypes';
console.log('testing');
test('GET', () => __awaiter(this, void 0, void 0, function* () {
    console.log('testing');
    const smoothieService = new SmoothieService_1.default();
    smoothieService.setTestMode(true);
    expect(yield smoothieService.getSmoothieOrders()).resolves;
}));
test('UPDATE', () => __awaiter(this, void 0, void 0, function* () {
    const smoothieService = new SmoothieService_1.default();
    smoothieService.setTestMode(true);
    expect(yield smoothieService.createNewSmoothieOrder({
        fruit: 'apple',
        blendStyle: 'chunky',
        size: 'medium',
    })).resolves;
}));
test('POST', () => __awaiter(this, void 0, void 0, function* () {
    const smoothieService = new SmoothieService_1.default();
    smoothieService.setTestMode(true);
    expect(yield smoothieService.modifySmoothieOrder({
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
    })).resolves;
}));
test('DELETE', () => __awaiter(this, void 0, void 0, function* () {
    const smoothieService = new SmoothieService_1.default();
    smoothieService.setTestMode(true);
    expect(yield smoothieService.deleteSmoothieOrder('1')).resolves;
}));
