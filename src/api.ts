import fetch, { Request, Headers, Response } from 'node-fetch';

// inject node-fetch
if (!globalThis.fetch) {
    // @ts-ignore
    globalThis.fetch = fetch;
    // @ts-ignore
    globalThis.Headers = Headers;
    // @ts-ignore
    globalThis.Request = Request;
    // @ts-ignore
    globalThis.Response = Response;
}

export * from './gen/api';
