# Propsal to swap deprecated request for node-fetch

Request is fully deprecated and has some security vulnerabilities requiring us to switch libraries (see #414 for more information).

@brendanburns outlined some of the clear options [forward](https://github.com/kubernetes-client/javascript/issues/414#issuecomment-978031677). This change should ideally be a long-term solution leaving us with the option of either modifying the node-typescript open-api-generator to use a different request library or migrate to one of the other generator options.

Modifying an outdated node-typescript library does not seem like the right path forward. It would require us to still use a new library which would likely change the api and still be a breaking change. We might as well migrate to a newer version of openapi-generator while we do that and acquire the advantages of a more up-to-date openapi version.

## Choosing a new library

This leads us to the choice of choosing a library. @d-cs posted a nice [summary](https://github.com/kubernetes-client/javascript/issues/414#issuecomment-648847415) of the different choices. We narrowed it down to Axios or Fetch. The other libraries didn't match how widely adopted and focused these libraries are.

Fetch is simply the standard JavaScript as a whole is moving to which brings more longterm support aligning us better with our goal of migrating to a long-term solution. [node-fetch](https://www.npmjs.com/package/node-fetch) has significantly more weekly downloads than [axios](https://github.com/axios/axios). The package size of node-fetch is also noticeably smaller than axios. We will use node-fetch to support fetch for Node. We will go more into the technical details below.

## Node-fetch

Fetch is a native browser API that is not implemented in Node.js by default. Node-fetch is the natural choice for the Node implementation because it is the most widely adopted.

The openapi-generator uses the browser implementation of Fetch so you must substitute node-fetch in manually.

## Implementation steps

@davidgamero and I will work to implement the following changes and have created the following plan.

### Other repositories

-   [ ] Update [kubernetes-client/gen](https://github.com/kubernetes-client/gen)'s typescript-fetch files to let us pass in the `typescriptThreePlus` config option <sup>[1](https://github.com/OpenAPITools/openapi-generator/issues/9973) [2](https://github.com/OpenAPITools/openapi-generator/issues/3869#issuecomment-584152932)</sub>
-   [ ] Update [openapi-generator](https://github.com/OpenAPITools/openapi-generator)'s typescript-fetch flavor to mark parameters as optional if all parameters are optional <sup>[3](https://github.com/OpenAPITools/openapi-generator/issues/6440)</sup>

### Kubernetes-client repository

-   [ ] Increment `OPENAPI_GENERATOR_COMMIT` to be [version 5.3.0](https://github.com/OpenAPITools/openapi-generator/releases/tag/v5.3.0)
-   [ ] `npm install node-fetch` to install node-fetch
-   [ ] Switch generate-client script to use typescript-fetch
-   [ ] Import and inject node-fetch in `src/api.ts` with the following

```typescript
import fetch from 'node-fetch';

// inject node-fetch
if (!globalThis.fetch) {
    // @ts-ignore
    globalThis.fetch = fetch;
    globalThis.Headers = Headers;
    globalThis.Request = Request;
    globalThis.Response = Response;
}
```

-   [ ] Generate api with `npm run generate`
-   [ ] Match src/gen/api.ts to new generated layout (it changes slightly)
-   [ ] Fix errors in /src folder (due to new api)
-   [ ] Fix errors in test (due to new api)
-   [ ] Fix examples (due to new api)
-   [ ] Document breaking changes for users
-   [ ] Release new version
