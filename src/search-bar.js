class SearchBar {
    constructor() {
      this.listeners = [];
    }
  
    onSearch(callback) {
      this.listeners.push(callback);
    }
  
    handleInput(query) {
      this.listeners.forEach(listener => {
        listener(query);
      });
    }
  }
  
  module.exports = SearchBar;
  