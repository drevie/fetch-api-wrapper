# fetch-api-wrapper  &middot; ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg) [![Build Status](https://travis-ci.org/drevie/fetch-api-wrapper.svg?branch=master)](https://travis-ci.org/drevie/fetch-api-wrapper)
A Node.js module that provides a typesafe wrapper class around the fetch api that is easily extendable
## Installation 
```sh
npm install fetch-api-wrapper --save
yarn add fetch-api-wrapper
bower install fetch-api-wrapper --save
```
## Usage
### TypeScript
```typescript
import BaseService from './BaseService';
import { SmoothieOrderResponse, SmoothieOrder } from './smoothieServiceTypes';

class SmoothieService extends BaseService<SmoothieOrderResponse> {
    constructor() {
        super('www.smoothiecentral.com');
    }

    public async getSmoothieOrders(): Promise<SmoothieOrderResponse> {
        return await this.get(`${this.getServiceContext()}/smoothie/orders`);
    }

    public async createNewSmoothieOrder(order: SmoothieOrder): Promise<SmoothieOrderResponse> {
        return await this.post(`${this.getServiceContext()}/smoothie/createorder`, order);
    }

    public async modifySmoothieOrder(order: SmoothieOrderResponse): Promise<SmoothieOrderResponse> {
        return await this.update(`${this.getServiceContext()}/smoothie/createorder`, order);
    }

    public async deleteSmoothieOrder(orderId: string): Promise<SmoothieOrderResponse> {
        return await this.delete(`${this.getServiceContext()}/smoothie/deleteorder/${orderId}`);
    }

    protected testResponse(): Promise<SmoothieOrderResponse> {
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

export default SmoothieService;
```
## Test 
```sh
npm run test
```
