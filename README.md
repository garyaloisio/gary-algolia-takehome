# gary-algolia-takehome

_This project was generated with [create-instantsearch-app](https://github.com/algolia/create-instantsearch-app) by [Algolia](https://algolia.com)._

## Get started

To run this project locally, install the dependencies and run the local server:

```sh
npm install
npm start
```

Alternatively, you may use [Yarn](https://http://yarnpkg.com/):

```sh
yarn
yarn start
```

Open http://localhost:3000 to see your app.

________________________________________________________________

Notes:

First I started signing into Algolia and creating an index called “garytest_PRODUCTS”. Then I went to API keys in the dashboard and obtained my App ID and Admin API key.  In order to familiarize myself with the Algolia product I used the React Instasearch template. (https://www.algolia.com/doc/guides/building-search-ui/getting-started/react/). I initialized the product and substituted my info.

In the index.js file and using (https://www.algolia.com/doc/guides/building-search-ui/getting-started/react/) as a source I was able to successfully upload all the data to Algolia. I made 'manufacturer', 'name', 'categories', 'description','salePrice', 'type', 'salePrice_range' all searchable attributes. I used the “bestSellingRank” attribute for Custom Ranking Attributes. So when a user will searches a product and as they are typing the product with the highest rank will appear first relative to the search. I used faceting to help narrow down the results when searching as well and the attributes I used to facet were   'searchable(manufacturer)',  'type',  'categories',  'salePrice', 'salePrice_range'.
