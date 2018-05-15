export type method = 'GET' | 'POST' | 'PUT' | 'DELETE';

abstract class BaseService<T> {

    private requestInit: RequestInit;
    private serviceContext: string;
    private testMode: boolean = false;
    protected abstract testResponse(): Promise<T>;

    constructor(_serviceContext: string = 'localhost', _requestInit: RequestInit = Object.create({})) {
        this.requestInit = _requestInit;
        this.serviceContext = _serviceContext;
    }

    public setTestMode(_testMode: boolean): void {
        this.testMode = _testMode;
    }

    public setServiceContext(context: string): void {
        this.serviceContext = context;
    }

    public getServiceContext(): string {
        return this.serviceContext;
    }

    public getHeaders(): Headers {
        const headers = new Headers();
        headers.set('Content-Type', 'application/json');
        return headers;
    }

    protected buildRequest(url: string, method: method, body?: string): Request {
        this.requestInit.headers = this.getHeaders();
        this.requestInit.method = method;
        this.requestInit.body = body;
        return new Request(url, this.requestInit);
    };

    protected get(url: string): Promise<T> {
        if (this.testMode) {
            return this.testResponse();
        }
        return new Promise<T>(async (resolve, reject) => {
            const response = await fetch(this.buildRequest(url, 'GET'));
            if (response.ok) {
                resolve(response.json());
            } else {
                reject(response);
            }
        });
    }

    protected post<P>(url: string, payload: P): Promise<T> {
        if (this.testMode) {
            return this.testResponse();
        }
        return new Promise<T>(async (resolve, reject) => {
            const response = await fetch(this.buildRequest(url, 'POST', JSON.stringify(payload)));
            if (response.ok) {
                resolve(response.json());
            } else {
                reject(response);
            }
        });
    }

    protected update<P>(url: string, payload: P): Promise<T> {
        if (this.testMode) {
            return this.testResponse();
        }
        return new Promise<T>(async (resolve, reject) => {
            const response = await fetch(this.buildRequest(url, 'PUT', JSON.stringify(payload)));
            if (response.ok) {
                resolve(response.json());
            } else {
                reject(response);
            }
        });
    }

    protected delete(url: string): Promise<T> {
        if (this.testMode) {
            return this.testResponse();
        }
        return new Promise<T>(async (resolve, reject) => {
            const response = await fetch(this.buildRequest(url, 'DELETE'));
            if (response.ok) {
                resolve(response.json());
            } else {
                reject(response);
            }
        });
    }
}

export default BaseService;