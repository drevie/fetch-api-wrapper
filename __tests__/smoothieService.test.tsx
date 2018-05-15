import SmoothieService from '../lib/SmoothieService';
// import { SmoothieOrder, SmoothieOrderResponse } from '../lib/smoothieServiceTypes';

console.log('testing');
test('GET', async () => {
    console.log('testing');
    const smoothieService = new SmoothieService();
    smoothieService.setTestMode(true);
    expect(await smoothieService.getSmoothieOrders()).resolves
})


test('UPDATE', async () => {
    const smoothieService = new SmoothieService();
    smoothieService.setTestMode(true);
    expect(await smoothieService.createNewSmoothieOrder({
        fruit: 'apple',
        blendStyle: 'chunky',
        size: 'medium',
    })).resolves
})

test('POST', async () => {
    const smoothieService = new SmoothieService();
    smoothieService.setTestMode(true);
    expect(await smoothieService.modifySmoothieOrder({
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
    })).resolves
})

test('DELETE', async () => {
    const smoothieService = new SmoothieService();
    smoothieService.setTestMode(true);
    expect(await smoothieService.deleteSmoothieOrder('1')).resolves
})
