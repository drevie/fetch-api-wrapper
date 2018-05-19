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
class BaseService {
    constructor(_serviceContext = 'localhost', _requestInit = Object.create({})) {
        this.testMode = false;
        this.requestInit = _requestInit;
        this.serviceContext = _serviceContext;
    }
    setTestMode(_testMode) {
        this.testMode = _testMode;
    }
    setServiceContext(context) {
        this.serviceContext = context;
    }
    getServiceContext() {
        return this.serviceContext;
    }
    getHeaders() {
        const headers = new Headers();
        headers.set('Content-Type', 'application/json');
        return headers;
    }
    buildRequest(url, method, body) {
        this.requestInit.headers = this.getHeaders();
        this.requestInit.method = method;
        this.requestInit.body = body;
        return new Request(url, this.requestInit);
    }
    ;
    get(url) {
        if (this.testMode) {
            return this.testResponse();
        }
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(this.buildRequest(url, 'GET'));
            if (response.ok) {
                resolve(response.json());
            }
            else {
                reject(response);
            }
        }));
    }
    post(url, payload) {
        if (this.testMode) {
            return this.testResponse();
        }
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(this.buildRequest(url, 'POST', JSON.stringify(payload)));
            if (response.ok) {
                resolve(response.json());
            }
            else {
                reject(response);
            }
        }));
    }
    update(url, payload) {
        if (this.testMode) {
            return this.testResponse();
        }
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(this.buildRequest(url, 'PUT', JSON.stringify(payload)));
            if (response.ok) {
                resolve(response.json());
            }
            else {
                reject(response);
            }
        }));
    }
    delete(url) {
        if (this.testMode) {
            return this.testResponse();
        }
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(this.buildRequest(url, 'DELETE'));
            if (response.ok) {
                resolve(response.json());
            }
            else {
                reject(response);
            }
        }));
    }
}
exports.default = BaseService;
