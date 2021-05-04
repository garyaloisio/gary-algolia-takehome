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

In the index.js file and using (https://www.algolia.com/doc/guides/building-search-ui/getting-started/react/) as a source I was able to successfully upload all the data to Algolia. I made 'manufacturer', 'name', 'categories', 'description','salePrice', 'type', 'salePrice_range' all searchable attributes. I used the “bestSellingRank” attribute for Custom Ranking Attributes. So when a user will searches a product and as they are typing the product with the highest rank will appear first relative to the search. I used faceting to help narrow down the results when searching as well and the attributes I used to facet were   'searchable(manufacturer)',  'type',  'categories',  'salePrice', 'salePrice_range'. I used (https://www.algolia.com/doc/guides/managing-results/refine-results/faceting/#what-is-a-facet) as a reference.

I started with the template provided from React Instasearch template. The searchClient verifies the credentials and pulls the data from Algolia. In the search client I use the Application ID and the Search-Only API Key. In the Instasearch Widget I call the target Index and use the searchClient variable to verify credentials. ref (https://www.algolia.com/doc/api-client/getting-started/instantiate-client-index/) as reference. The ClearRefinements widget clears every currently applied refinement. ref(https://www.algolia.com/doc/api-reference/widgets/clear-refinements/react/). On the left panel which held Manufacturer and Category I used the RefinementList widget. ref(https://www.algolia.com/doc/api-reference/widgets/refinement-list/react/). For the salePrice range I used the NumericMenu widget. ref(https://www.algolia.com/doc/api-reference/widgets/numeric-menu/react/).  I used the SearchBox widget for the search bar. ref(https://www.algolia.com/doc/api-reference/widgets/search-box/react/). I used the Stats widget to display how long the search takes. ref(https://www.algolia.com/doc/api-reference/widgets/stats/react/). I used the Pagination widget to display the pages and allow the user to change their current page. I also used “showLast” in the component to have a button to navigate the user to the last page. ref(https://www.algolia.com/doc/api-reference/widgets/pagination/react/).


The Hits component, Hit Function and Hit.propTypes all work together and is the most important part of this page. Hit.propTypes grabs the object of data we are using and validates it. The Hit function is what displays the individual image, title, price and highlights the relevant letters or phrases from the search to the product. The Hit widget is what displays the products. ref(https://www.algolia.com/doc/api-reference/widgets/hits/react/). The Configure widget is what determines how many results per page and I chose 10. ref(https://www.algolia.com/doc/api-reference/widgets/configure/react/)


The biggest challenge I came across while building this project was organizing the results from lowest price to highest price in the SortBy widget. When I used the default template provided from the docs I was getting a 404 error consistently. ref(https://www.algolia.com/doc/api-reference/widgets/sort-by/react/#examples). After some digging I found a page on your discussion board with someone with the same problem. ref(https://discourse.algolia.com/t/sortby-causing-hits-not-to-be-rendered/11995/2). This led me to Sorting results ref(https://www.algolia.com/doc/guides/managing-results/refine-results/sorting/) and that page led me to Understanding Replicas ref(https://www.algolia.com/doc/guides/managing-results/refine-results/sorting/in-depth/replicas/).  Since I only wanted to sort my existing replicas I thought creating a virtual record would be my most efficient option. I achieved that in the IndexData.js file. I first initialized the virtual indexes (const replicaIndexDesc = client.initIndex('salePrice_desc'); const replicaIndexASC = client.initIndex('salePrice_asc');).Then in the set settings object I added a replicas value with the key of an array which had  ['virtual(salePrice_desc)', 'virtual(salePrice_asc)']. Then I set the settings on the replicas by using customRanking. This semi worked but the results were still not entirely correct with values changing but not being completely in order. I fixed this problem by going into the dashboard, then going into the virtual index and then going to the Relevant Sort Tab and initializing the Relevant sort Ranking to a custom sort ranking by salePrice.
