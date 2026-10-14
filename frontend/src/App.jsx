import "./App.css";

function App() {
return (
<div className="coffee-shop">
<nav className="navbar">
<a className="logo" href="#home">☕ Brew & Bean</a>
<div className="nav-links">
<a href="#home">Home</a>
<a href="#menu">Menu</a>
<a href="#about">About</a>
</div>
<a className="nav-button" href="#menu">Order Coffee</a>
</nav>

  <header className="hero" id="home">
    <div className="hero-content">
      <p className="eyebrow">YOUR DAILY DOSE OF HAPPINESS</p>
      <h1>Life begins<br />after <span>coffee.</span></h1>
      <p className="hero-description">
        Freshly brewed coffee, delicious treats, and cozy moments.
        Your favorite little corner of happiness is waiting for you.
      </p>
      <a className="main-button" href="#menu">Explore Our Menu →</a>
      <p className="hero-note">☕ Made with love, served with a smile.</p>
    </div>
    <div className="hero-image" role="img" aria-label="A warm cup of coffee" />
  </header>

  <section className="features">
    <div><span>☕</span><h3>Fresh Coffee</h3><p>Made fresh for every cup.</p></div>
    <div><span>🌱</span><h3>Quality Beans</h3><p>Carefully selected beans.</p></div>
    <div><span>♡</span><h3>Made With Love</h3><p>A little happiness in every sip.</p></div>
  </section>

  <section className="menu-section" id="menu">
    <p className="eyebrow">A LITTLE SOMETHING FOR YOU</p>
    <h2>Our Favorites</h2>
    <p className="section-description">Good coffee. Good food. Good mood.</p>
    <div className="menu-grid">
      <article className="menu-card">
        <img src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=80" alt="Iced coffee" />
        <div className="menu-info"><h3>Iced Coffee</h3><p>Cool, smooth, and refreshing.</p><strong>₱120</strong></div>
      </article>
      <article className="menu-card">
        <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=700&q=80" alt="Hot cappuccino" />
        <div className="menu-info"><h3>Classic Cappuccino</h3><p>Rich espresso with creamy foam.</p><strong>₱140</strong></div>
      </article>
      <article className="menu-card">
        <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80" alt="Fresh pastries" />
        <div className="menu-info"><h3>Fresh Pastries</h3><p>A sweet treat for your coffee.</p><strong>₱95</strong></div>
      </article>
    </div>
  </section>

  <section className="about-section" id="about">
    <p className="eyebrow">WELCOME TO OUR LITTLE CORNER</p>
    <h2>More than coffee, it's a feeling.</h2>
    <p>We believe the best moments happen over a good cup of coffee. Come in, slow down, and make yourself at home.</p>
    <a className="main-button" href="#home">Back to Home ↑</a>
  </section>

  <footer>☕ Brew & Bean <span>Made with love, one cup at a time.</span></footer>
</div>

);
}

export default App;