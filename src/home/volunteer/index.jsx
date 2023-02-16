import React from "react";

const index = () => {
  return (
    <section className="become-volunteer-one">
      <div className="become-volunteer-one__bg-box">
        <div
          className="become-volunteer-one__bg jarallax"
          data-jarallax
          data-speed="0.2"
          data-imgPosition="50% 0%"
          // style="background-image: url(assets/images/backgrounds/become-volunteer-one-bg.jpg);"
        ></div>
      </div>
      <div
        className="become-volunteer-one__shape-1"
        // style="background-image: url(assets/images/shapes/become-volunteer-shape-1-dark.png);"
      ></div>
      <div className="container">
        <div className="become-volunteer-one__inner">
          <p className="become-volunteer-one__sub-title">Become a Volunteers</p>
          <h3 className="become-volunteer-one__title">
            Join your hand with us for a <br /> better life and future
          </h3>
          <div className="become-volunteer-one__btn-box">
            <a
              href="become-volunteer.html"
              className="thm-btn become-volunteer-one__btn"
            >
              Discover More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
