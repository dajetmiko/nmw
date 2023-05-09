# Client-side rendering (CSR):

This is when the browser generates the HTML content of a web page using JavaScript. This can provide a fast and interactive user experience, but it can also be slow for initial loading and bad for SEO. Examples of frameworks or tools that support CSR are React, Angular, Vue.js, etc. contoh desktop app.

# Server-side rendering (SSR):

This is when the web server generates the HTML content of a web page on the server-side and sends it to the browser. This can improve initial loading times and SEO, but it can also be slower for dynamic content and require more server resources. Examples of frameworks or tools that support SSR are Next.js, Nuxt.js, SvelteKit, etc.

# Static site generation (SSG):

This is when the HTML content of a web page is generated at build time and served as a static file. This can provide excellent performance and security, but it can also be less flexible for dynamic content and require frequent rebuilds. Examples of frameworks or tools that support SSG are Gatsby, Hugo, Eleventy, etc.
Incremental static regeneration (ISR): This is a hybrid approach that combines SSG and SSR. It allows to generate static pages at build time, but also to re-generate them on-demand when new data is available. This can provide the best of both worlds: fast performance, good SEO, and up-to-date content. Examples of frameworks or tools that support ISR are Next.js and Blitz.js.

# Partial hydration:

This is a technique that allows to selectively hydrate only the parts of a web page that need interactivity, while leaving the rest as static HTML. This can reduce the amount of JavaScript needed to run on the browser and improve performance and user experience. Examples of frameworks or tools that support partial hydration are Astro, Elder.js, Solid.js, etc.

# Islands:

This is a similar technique to partial hydration, but instead of hydrating only parts of a web page, it hydrates entire components or widgets that are isolated from each other. This can provide more flexibility and modularity for building complex web pages with different rendering paradigms. Examples of frameworks or tools that support islands are Remix, Astro, Solid.js, etc.

# Streaming server-side rendering (SSR):

This is an advanced technique that allows to stream HTML content from the server to the browser as soon as it is available, without waiting for the entire page to be rendered. This can improve perceived performance and user experience by showing content faster and progressively. Examples of frameworks or tools that support streaming SSR are React Server Components, SvelteKit, etc.
