function Header() {
  return (
    <header style={{ backgroundColor: '#333', color: '#fff', padding: '1rem' }}>
      <h2>HyperLocal Connect</h2>
      <nav>
        <a href="#about" style={{ color: '#fff', marginRight: '1rem' }}>About Us</a>
        <a href="#contact" style={{ color: '#fff' }}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;