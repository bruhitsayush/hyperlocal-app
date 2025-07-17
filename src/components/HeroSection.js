import SearchBar from './SearchBar';

function HeroSection() {
  return (
    <section style={{ padding: '2rem', backgroundColor: '#f4f4f4', textAlign: 'center' }}>
      <h1>Find Trusted Professionals Near You</h1>
      <p>Search for employees, businesses, and service providers in your area.</p>
      <SearchBar />
    </section>
  );
}

export default HeroSection;