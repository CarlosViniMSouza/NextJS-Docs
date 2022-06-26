# Pages

## Intro

```markdown
NOTE: We are introducing improved routing support in Next.js. Look up [layouts-rfc](https://nextjs.org/blog/layouts-rfc) for more details and to provide feedback.
```

In Next.js, a **page** is a [React Component](https://reactjs.org/docs/components-and-props.html) exported from a `.js`, `.jsx`, `.ts`, or `.tsx` file in the pages directory. Each page is associated with a route based on its file name.

**Example:** If you create `pages/about.js` that exports a React component like below, it will be accessible at `/about`.

```js
function About() {
  return <div>About</div>
}

export default About
```

## Pages with Dynamic Routes

Next.js supports pages with dynamic routes. For example, if you create a file called `pages/posts/[id].js`, then it will be accessible at `posts/1`, `posts/2`, etc.

## Pre-rendering

By default, Next.js **pre-renders** every page. This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO.

Each generated HTML is associated with minimal JavaScript code necessary for that page. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called *hydration*.)
