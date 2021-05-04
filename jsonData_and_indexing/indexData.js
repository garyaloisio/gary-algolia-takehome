const algoliasearch = require('algoliasearch');
require("../secrets")
const client = algoliasearch('VOKPX0FOW8', process.env.Admin_API_Key);
const index = client.initIndex('garytest_PRODUCTS');
const products = require('./bestbuy_seo.json');
index.saveObjects(products).then(({ objectIDs }) => {
  console.log(objectIDs);
});

index.setSettings({
  searchableAttributes: [
    'manufacturer',
    'name',
    'categories',
    'unordered(shortDescription)',
    'salePrice',
    'type',
    'salePrice_range'
  ],
  customRanking: [
    'asc(bestSellingRank)'
  ],
  attributesForFaceting: [
    'searchable(manufacturer)',
    'type',
    'categories',
    'salePrice',
    'salePrice_range'
  ]
}).then(() => {
  // done
});




