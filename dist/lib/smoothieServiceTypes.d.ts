declare type fruit = 'apple' | 'orange' | 'banana';
declare type blendStyle = 'smooth' | 'chunky';
declare type size = 'small' | 'medium' | 'large';
interface SmoothieOrder {
    fruit: fruit;
    blendStyle: blendStyle;
    size: size;
}
interface SmoothieOrderResponse {
    smoothieOrders: SmoothieOrder[];
    orderNumber: number;
}
export { fruit, blendStyle, size, SmoothieOrder, SmoothieOrderResponse, };
