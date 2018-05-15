type fruit = 'apple' | 'orange' | 'banana';
type blendStyle = 'smooth' | 'chunky';
type size = 'small' | 'medium' | 'large';
interface SmoothieOrder {
    fruit: fruit;
    blendStyle: blendStyle;
    size: size;
}
interface SmoothieOrderResponse {
    smoothieOrders: SmoothieOrder[];
    orderNumber: number;
}

export {
    fruit,
    blendStyle,
    size,
    SmoothieOrder,
    SmoothieOrderResponse,
}