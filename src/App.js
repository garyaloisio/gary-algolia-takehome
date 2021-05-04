import React, { Component } from 'react';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
  Stats,
  NumericMenu,
  SortBy
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';

import './App.css';
import algoliasearch from 'algoliasearch';

const searchClient = algoliasearch(
  'VOKPX0FOW8',
  "5a49c7fd5e235c6ecba57a625a7db623"
);





function Hit(props) {
  return (
    <div>
      <img src={props.hit.image} align="left" alt={props.hit.name} />
      <div className="hit-name">
        <Highlight attribute="name" hit={props.hit} />
      </div>
      <div className="hit-price">${props.hit.salePrice}</div>
      <div className="hit-description">
        <div className="hit-price">{props.hit.shortDescription}</div>
      </div>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="ais-InstantSearch">
        <h1>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Best_Buy_Logo.svg/1280px-Best_Buy_Logo.svg.png" className="image" />
        </h1>
        <InstantSearch indexName="garytest_PRODUCTS" searchClient={searchClient}
        >
          <div className="left-panel">
            <ClearRefinements />
            <h2>Category</h2>
            <RefinementList attribute="categories" showMore={true}
              translations={{
                showMore(extended) {
                  return extended ? 'Show Less' : 'Show More';
                }
              }} />
            <h2>Manufacturer</h2>
            <RefinementList attribute="manufacturer" showMore={true}
              translations={{
                showMore(extended) {
                  return extended ? 'Show Less' : 'Show More';
                }
              }} />
            <h2>Sale Price</h2>
            <NumericMenu
              attribute="salePrice"
              items={[
                { label: '<= $10', end: 10 },
                { label: '$10 - $100', start: 10, end: 100 },
                { label: '$100 - $500', start: 100, end: 500 },
                { label: '>= $500', start: 500 },
              ]}
            />
            <Configure hitsPerPage={6} />
          </div>
          <div className="right-panel">
            <SearchBox />
            <Stats />
            <SortBy
              defaultRefinement="garytest_PRODUCTS"
              items={[
                { value: 'garytest_PRODUCTS', label: 'Most Popular' },
                { value: 'salePrice_asc', label: 'Lowest Price' },
                { value: 'salePrice_desc', label: 'Highest Price' },
              ]}
            />
            <Hits hitComponent={Hit} />
            <Pagination showLast />
          </div>
        </InstantSearch>
      </div>
    );
  }
}



Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;

