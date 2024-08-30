import { Link } from "react-router-dom";

function BlogPage() {
  return (
    <>
      <header className="blog-header">
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
              <span className="highlight">Lorem ipsum dolor sit amet.</span>
            </h1>
            <p className="sub-heading">Stay Ahead with Out Latest Insights</p>
            <p className="blog-description">Author : Gautama | 30 Views</p>
          </div>
        </div>
      </header>

      <section className="container blog-content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sit voluptates accusantium asperiores
          nostrum. Asperiores ullam commodi voluptatum dolorem inventore cumque aperiam ipsa totam. Ullam, labore nobis
          quia doloribus laborum quibusdam hic possimus optio dolore maxime beatae commodi atque reiciendis est
          architecto necessitatibus incidunt odit, cum non perferendis deleniti numquam illum. Illum quam facere iure a
          architecto officiis incidunt recusandae sint nisi! Blanditiis voluptatum temporibus perferendis dolorum
          voluptatem? Laudantium debitis repellat totam excepturi ducimus maxime, nam ab nobis amet quis, consequuntur
          labore alias dolor animi assumenda quisquam eius itaque aut? Magnam commodi sunt hic, placeat facere quibusdam
          suscipit nemo mollitia!
        </p>
        <p style={{ marginTop: "15px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sit voluptates accusantium asperiores
          nostrum. Asperiores ullam commodi voluptatum dolorem inventore cumque aperiam ipsa totam. Ullam, labore nobis
          quia doloribus laborum quibusdam hic possimus optio dolore maxime beatae commodi atque reiciendis est
          architecto necessitatibus incidunt odit, cum non perferendis deleniti numquam illum. Illum quam facere iure a
          architecto officiis incidunt recusandae sint nisi! Blanditiis voluptatum temporibus perferendis dolorum
          voluptatem? Laudantium debitis repellat totam excepturi ducimus maxime, nam ab nobis amet quis, consequuntur
          labore alias dolor animi assumenda quisquam eius itaque aut? Magnam commodi sunt hic, placeat facere quibusdam
          suscipit nemo mollitia!
        </p>
      </section>

      <section className="blog-comment container">
        <h3 className="heading-highlight">Comments</h3>
        <div className="comment-wrapper">
          <img className="comment-picture" src="images/images (5).jpg" />
          <div>
            <h3 className="comment-name">Tama Ramah</h3>
            <p className="comment-date">22 August 2024</p>
            <p className="comment-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, voluptates illo! Ab dolor autem accusantium
              reprehenderit minima ad eveniet magnam.
            </p>
          </div>
        </div>
        <div className="comment-wrapper">
          <img className="comment-picture" src="images/images (5).jpg" />
          <div>
            <h3 className="comment-name">Tama Ramah</h3>
            <p className="comment-date">22 August 2024</p>
            <p className="comment-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, voluptates illo! Ab dolor autem accusantium
              reprehenderit minima ad eveniet magnam.
            </p>
          </div>
        </div>
        <div className="comment-wrapper">
          <img className="comment-picture" src="images/images (5).jpg" />
          <div>
            <h3 className="comment-name">Tama Ramah</h3>
            <p className="comment-date">22 August 2024</p>
            <p className="comment-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, voluptates illo! Ab dolor autem accusantium
              reprehenderit minima ad eveniet magnam.
            </p>
          </div>
        </div>
        <button className="btn btn-primary">Show More</button>
      </section>

      <section className="send-comment container">
        <h3 className="heading-highlight">Share your thoughts</h3>

        <div className="comment-form">
          <div className="comment-form-top">
            <input placeholder="Name" className="form-input" />
            <input placeholder="Email" className="form-input" />
            <input placeholder="Subject" className="form-input" />
            <input placeholder="Website" className="form-input" />
          </div>
          <textarea
            rows="4"
            cols="50"
            className="form-input text-area-comment"
            placeholder="Your comment..."
          ></textarea>
          <div className="comment-submit">
            <img src="images/captcha.png" />
            <input placeholder="Captcha" className="form-input" />
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </section>

      <section className="popular-tag-section">
        <h3 className="section-heading">
          <span className="highlight">Popular</span> tags
        </h3>
        <div className="popular-tag-wrapper">
          <div className="popular-tag-item">
            <p className="tag-number">1</p>
            <p className="tag-description">Popular tag 1</p>
          </div>
          <div className="popular-tag-item">
            <p className="tag-number">2</p>
            <p className="tag-description">Popular tag 2</p>
          </div>
          <div className="popular-tag-item">
            <p className="tag-number">3</p>
            <p className="tag-description">Popular tag 3</p>
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

export default BlogPage;
