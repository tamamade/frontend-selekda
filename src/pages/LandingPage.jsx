import { useEffect } from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  useEffect(() => {
    // Initialize Swiper
    import("https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs").then((Swiper) => {
      new Swiper.default(".swiper", {
        autoplay: {
          delay: 5000,
        },
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
      });
    });

    // Initialize AOS
    const script = document.createElement("script");
    script.src = "https://unpkg.com/aos@2.3.1/dist/aos.js";
    script.onload = () => {
      window.AOS.init();
    };
    document.body.appendChild(script);
  }, []);

  return (
    <>
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
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <header className="slider-1">
              <div className="hero-section">
                <div>
                  <h1>
                    Technology is <span className="highlight">Everything</span>
                  </h1>
                  <p className="sub-heading">Transform Your World with Innovative Solutions</p>
                  <p className="description">
                    Our solutions are designed to push boundaries and redefine possibilities. <br />
                    Join us on a journey to harness the full potential of the digital era
                  </p>
                </div>
              </div>
            </header>
          </div>
          <div className="swiper-slide">
            <header className="slider-2">
              <div className="hero-section">
                <div>
                  <h1>
                    Technology is <span className="highlight">Everything</span>
                  </h1>
                  <p className="sub-heading">Transform Your World with Innovative Solutions</p>
                  <p className="description">
                    Our solutions are designed to push boundaries and redefine possibilities. <br />
                    Join us on a journey to harness the full potential of the digital era
                  </p>
                </div>
              </div>
            </header>
          </div>
          <div className="swiper-slide">
            <header className="slider-3">
              <div className="hero-section">
                <div>
                  <h1>
                    Technology is <span className="highlight">Everything</span>
                  </h1>
                  <p className="sub-heading">Transform Your World with Innovative Solutions</p>
                  <p className="description">
                    Our solutions are designed to push boundaries and redefine possibilities. <br />
                    Join us on a journey to harness the full potential of the digital era
                  </p>
                </div>
              </div>
            </header>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
      <section className="latest-news container">
        <h2 className="section-heading">
          Latest <span className="highlight">News</span>
        </h2>
        <input type="text" placeholder="Search news..." />
        <div className="news-grid" data-aos="fade-up">
          <div className="news-item news-highlight">
            <div>
              <p>27 August 2024</p>
              <h3>Lorem Ipsum</h3>
            </div>
          </div>
          <div className="news-other">
            <div className="news-item">
              <div>
                <p>27 August 2024</p>
                <h3>Lorem Ipsum</h3>
              </div>
            </div>
            <div className="news-item">
              <div>
                <p>27 August 2024</p>
                <h3>Lorem Ipsum</h3>
              </div>
            </div>
            <div className="news-item">
              <div>
                <p>27 August 2024</p>
                <h3>Lorem Ipsum</h3>
              </div>
            </div>
            <div className="news-item">
              <div>
                <p>27 August 2024</p>
                <h3>Lorem Ipsum</h3>
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-primary btn-more">More</button>
      </section>

      <section className="services container">
        <h2 className="section-heading">
          Our <span className="highlight">Services</span>
        </h2>
        <div className="service-grid" data-aos="fade-up">
          <div className="service-item">
            <h3>Website Design</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione nostrum labore quod laboriosam natus
              reiciendis.
            </p>
          </div>
          <div className="service-item">
            <h3>IOT Development</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione nostrum labore quod laboriosam natus
              reiciendis.
            </p>
          </div>
          <div className="service-item">
            <h3>Tech Consulting</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione nostrum labore quod laboriosam natus
              reiciendis.
            </p>
          </div>
        </div>
      </section>

      <section className="fun-features container">
        <h2 className="section-heading">
          Fun <span className="highlight">Features</span>
        </h2>
        <div className="features-grid" data-aos="fade-up">
          <div className="feature-item">
            <h3>DSGN</h3>
            <a className="btn btn-primary">Start</a>
          </div>
          <div className="feature-item">
            <h3>Head Balls</h3>
            <a className="btn btn-primary">Start</a>
          </div>
        </div>
      </section>

      <section className="portfolios">
        <div className="container" data-aos="fade-up">
          <h2 className="section-heading">
            Amazing <span className="highlight">Portfolios</span>
          </h2>
          <button className="btn btn-primary btn-more">All Porto</button>
        </div>
        <div className="portfolio-grid">
          <div className="portfolio-item">
            <h3>First Portfolio</h3>
            <a className="btn btn-primary">Detail</a>
          </div>
          <div className="portfolio-item">
            <h3>Second Portfolio</h3>
            <a className="btn btn-primary">Detail</a>
          </div>
          <div className="portfolio-item">
            <h3>Third Portfolio</h3>
            <a className="btn btn-primary">Detail</a>
          </div>
        </div>
      </section>

      <section className="gallery">
        <h2 className="section-heading">
          Our <span className="highlight">Gallery</span>
        </h2>

        <div className="gallery-grid container" data-aos="fade-up">
          <div className="gallery-item gallery-highlight">
            <div>▶</div>
          </div>
          <div className="gallery-other">
            <div className="gallery-item">
              <div>
                <button className="btn btn-primary">Detail</button>
              </div>
            </div>
            <div className="gallery-item">
              <div>
                <button className="btn btn-primary">Detail</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="copyright">
        <p>&copy; 2024 WebtechID. All rights reserved. Designed by I Made Gautama</p>
        <div className="sosmed-icon">
          <img src="images/twitter.png" />
          <img src="images/blogger.png" />
          <img src="images/youtube.png" />
        </div>
      </footer>
    </>
  );
}

export default LandingPage;
