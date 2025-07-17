function SearchBar() {
  return (
    <div style={{ marginTop: '1rem' }}>
      <input type="text" placeholder="Search for services..." style={{ padding: '0.5rem', width: '60%' }} />
      <button style={{ padding: '0.5rem 1rem', marginLeft: '0.5rem' }}>Search</button>
    </div>
  );
}

export default SearchBar;