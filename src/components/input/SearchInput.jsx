import React from 'react';

function SearchInput({ searchTerm, onSearchChange }) {
  const handleChange = (event) => {
    onSearchChange(event); 
  };

  return (
    <input
      type="text"
      placeholder="Search by title..."
      value={searchTerm}
      onChange={handleChange} 
    />
  );
}

export default SearchInput;