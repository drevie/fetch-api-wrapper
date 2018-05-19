import BaseService from './BaseService';
import { SmoothieOrderResponse, SmoothieOrder } from './smoothieServiceTypes';
declare class SmoothieService extends BaseService<SmoothieOrderResponse> {
    constructor();
    getSmoothieOrders(): Promise<SmoothieOrderResponse>;
    createNewSmoothieOrder(order: SmoothieOrder): Promise<SmoothieOrderResponse>;
    modifySmoothieOrder(order: SmoothieOrderResponse): Promise<SmoothieOrderResponse>;
    deleteSmoothieOrder(orderId: string): Promise<SmoothieOrderResponse>;
    protected testResponse(): Promise<SmoothieOrderResponse>;
}
export default SmoothieService;
