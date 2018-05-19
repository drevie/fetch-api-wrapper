export declare type method = 'GET' | 'POST' | 'PUT' | 'DELETE';
declare abstract class BaseService<T> {
    private requestInit;
    private serviceContext;
    private testMode;
    protected abstract testResponse(): Promise<T>;
    constructor(_serviceContext?: string, _requestInit?: RequestInit);
    setTestMode(_testMode: boolean): void;
    setServiceContext(context: string): void;
    getServiceContext(): string;
    getHeaders(): Headers;
    protected buildRequest(url: string, method: method, body?: string): Request;
    protected get(url: string): Promise<T>;
    protected post<P>(url: string, payload: P): Promise<T>;
    protected update<P>(url: string, payload: P): Promise<T>;
    protected delete(url: string): Promise<T>;
}
export default BaseService;
