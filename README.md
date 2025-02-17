# directus-extension-noindex

Custom hook extension that injects the following tag which instructs search engines to not index the current project:

```html
<meta name="robots" content="noindex, nofollow" />
```

Learn more about the `noindex` tag here:
https://developers.google.com/search/docs/crawling-indexing/block-indexing
