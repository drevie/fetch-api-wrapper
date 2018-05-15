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