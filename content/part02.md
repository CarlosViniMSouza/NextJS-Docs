# Pages

## Intro

```markdown
NOTE: We are introducing improved routing support in Next.js. Look up [layouts-rfc](https://nextjs.org/blog/layouts-rfc) for more details and to provide feedback.
```

In Next.js, a **page** is a [React Component](https://reactjs.org/docs/components-and-props.html) exported from a `.js`, `.jsx`, `.ts`, or `.tsx` file in the pages directory. Each page is associated with a route based on its file name.

## Pages with Dynamic Routes

Next.js supports pages with dynamic routes. For example, if you create a file called `pages/posts/[id].js`, then it will be accessible at `posts/1`, `posts/2`, etc.

## Pre-rendering

By default, Next.js **pre-renders** every page. This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO.

Each generated HTML is associated with minimal JavaScript code necessary for that page. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called *hydration*.)

### Two forms of Pre-rendering

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- [Static Generation (Recommended)](https://nextjs.org/docs/basic-features/pages#static-generation-recommended): The HTML is generated at **build time** and will be reused on each request.

- [Server-side Rendering](https://nextjs.org/docs/basic-features/pages#server-side-rendering): The HTML is generated on **each request**.

**We recommend using Static Generation** over Server-side Rendering for performance reasons. Statically generated pages can be cached by CDN with no extra configuration to boost performance. However, in some cases, Server-side Rendering might be the only option.

You can also use Client-side Rendering along with Static Generation or Server-side Rendering. That means some parts of a page can be rendered entirely by client side JavaScript. To learn more, take a look at the [Data Fetching](https://nextjs.org/docs/basic-features/data-fetching/client-side) documentation.

If a page uses **Static Generation**, the page HTML is generated at **build time**. That means in production, the page HTML is generated when you run next build. This HTML will then be reused on each request. It can be cached by a CDN.

To learn more about how `getStaticProps` works, check out the [Data Fetching docs](https://nextjs.org/docs/basic-features/data-fetching/get-static-props).

## When should I use Static Generation?

**We recommend using Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

1 - Marketing pages

2 - Blog posts and portfolios

3 - E-commerce product listings

4 - Help and documentation

## Server-side Rendering

```
Also referred to as "SSR" or "Dynamic Rendering".
```

If a page uses **Server-side Rendering**, the page HTML is generated on **each request**.

To use Server-side Rendering for a page, you need to `export` an `async` function called `getServerSideProps`. This function will be called by the server on every request.

## Summary

We've discussed two forms of pre-rendering for Next.js.

- **Static Generation (Recommended):** The HTML is generated at build time and will be reused on each request. To make a page use Static Generation, either export the page component, or export `getStaticProps` (and `getStaticPaths` if necessary). It's great for pages that can be pre-rendered ahead of a user's request. You can also use it with Client-side Rendering to bring in additional data.

- **Server-side Rendering:** The HTML is generated on **each request.** To make a page use Server-side Rendering, export `getServerSideProps`. Because Server-side Rendering results in slower performance than Static Generation, use this only if absolutely necessary.

## Learn more

[Data Fetching](https://nextjs.org/docs/basic-features/data-fetching/overview)

[Preview Mode](https://nextjs.org/docs/advanced-features/preview-mode)

[Routing](https://nextjs.org/docs/routing/introduction)

[TypeScript](https://nextjs.org/docs/basic-features/typescript#pages)
