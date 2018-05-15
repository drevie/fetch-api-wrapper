# definitely-typed-fetch-api  &middot; ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg) [![Build Status](https://travis-ci.org/drevie/definitely-typed-fetch-api.svg?branch=master)](https://travis-ci.org/drevie/definitely-typed-fetch-api)
A Node.js module that provides a typesafe wrapper class around the fetch api that is easily extendable
## Installation 
```sh
npm install definitely-typed-fetch-api --save
yarn add definitely-typed-fetch-api
bower install definitely-typed-fetch-api --save
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
