const assert = require('assert');
const SearchBar = require('../src/search-bar');

describe('SearchBar', function() {
  it('should return search query when user input text', function() {
    const searchBar = new SearchBar();
    searchBar.onSearch(query => {
      assert.equal(query, 'keyword');
    });
    searchBar.handleInput('keyword');
  });

  // Add more test cases here as needed
});
