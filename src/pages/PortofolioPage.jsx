import { Link } from "react-router-dom";

function PortofolioPage() {
  return (
    <>
      <header className="porto-header">
        <div className="navbar">
          <div className="container">
            <Link to="/">
              <img src="/images/logo-webtech.png" alt="WebtechID Logo" className="logo" />
            </Link>
            <nav>
              <ul>
                <li>
                  <Link to="/blog-list">Blog</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <a href="#" className="btn btn-primary">
                    Login
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="hero-section">
          <div>
            <h1>
              <span className="highlight">Portfolio</span>
            </h1>
            <p className="sub-heading">Explore Our Portfolio of Innovative and Impactfult Work</p>
            <p className="description">
              Explore fresh insights and expert analysis to keep you informed and ahead of the curve. <br />
              Discover the knowledge you need to stay on top.
            </p>
          </div>
        </div>
      </header>

      <section className="latest-posts container" style={{ marginBottom: "20px" }}>
        <h2 className="section-heading">
          Our <span className="highlight">Work</span>
        </h2>
        <div className="blog-category">
          <div className="category-arrow">◀</div>
          <div className="category-wrapper">
            <div className="category-item">Category 1</div>
            <div className="category-item">Category 2</div>
            <div className="category-item">Category 3</div>
            <div className="category-item">Category 4</div>
            <div className="category-item">Category 5</div>
            <div className="category-item">Category 6</div>
          </div>
          <div className="category-arrow">▶</div>
        </div>
        <div className="posts-grid">
          {Array.from(Array(6).keys()).map((_, index) => {
            return (
              <div className="posts-item" key={index}>
                <img src="images/images (2).png" className="posts-img" />
                <div className="posts-description">
                  <div className="posts-top">
                    <p className="posts-date">27 August 2024</p>
                    <p className="posts-category">27 August 2024</p>
                  </div>
                  <h2 className="posts-title">Lorem Dolor Ipsum.</h2>
                  <p className="posts-subtitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam illum eum omnis non labore modi ab
                    alias? Pariatur, harum ullam.
                  </p>
                  <p className="posts-author">Author : Gautama | 30 views</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <footer className="copyright">
        <p>&copy; 2024 WebtechID. All rights reserved. Designed by I Made Gautama</p>
        <div className="sosmed-icon">
          <img src="/assets/images/twitter.png" />
          <img src="/assets/images/blogger.png" />
          <img src="/assets/images/youtube.png" />
        </div>
      </footer>
    </>
  );
}

export default PortofolioPage;
