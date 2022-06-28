# Data Fetching

Data fetching in Next.js allows you to render your content in different ways, depending on your application's use case. These include pre-rendering with **Server-side Rendering** or **Static Generation**, and updating or creating content at runtime with **Incremental Static Regeneration.**

- [SSR](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props)

- [SSG](https://nextjs.org/docs/basic-features/data-fetching/get-static-props)

- [CSR](https://nextjs.org/docs/basic-features/data-fetching/client-side)

- [Dynamic Routing](https://nextjs.org/docs/basic-features/data-fetching/get-static-paths)

- [ISR](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration)

## Learn More

- [Preview Mode](https://nextjs.org/docs/advanced-features/preview-mode)

- [Routing](https://nextjs.org/docs/routing/introduction)

- [TypeScript](https://nextjs.org/docs/basic-features/typescript#pages)

## getServerSideProps

If you export a function called `getServerSideProps` (Server-Side Rendering) from a page, Next.js will pre-render this page on each request using the data returned by `getServerSideProps`.

## getServerSideProps or API Routes

It can be tempting to reach for an API Route when you want to fetch data from the server, then call that API route from `getServerSideProps`. 

This is an unnecessary and inefficient approach, as it will cause an extra request to be made due to both `getServerSideProps` and API Routes running on the server.

## Related

[getServerSideProps API Ref.](https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props)
