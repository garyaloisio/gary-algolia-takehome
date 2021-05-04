const algoliasearch = require('algoliasearch');
require("../secrets")
const client = algoliasearch('VOKPX0FOW8', process.env.Admin_API_Key);
const index = client.initIndex('garytest_PRODUCTS');
const products = require('./bestbuy_seo.json');
index.saveObjects(products).then(({ objectIDs }) => {
  console.log(objectIDs);
});

const replicaIndexDesc = client.initIndex('salePrice_desc');
const replicaIndexASC = client.initIndex('salePrice_asc');


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
  ],
  replicas: [
    'virtual(salePrice_desc)',
    'virtual(salePrice_asc)',
  ]
}).then(() => {
  // done
});


replicaIndexDesc.setSettings({
  customRanking: [
    "desc(salePrice)"
  ]
}).then(() => {
  // done
});

replicaIndexASC.setSettings({
  customRanking: [
    "asc(salePrice)"
  ]
}).then(() => {
  // done
});




