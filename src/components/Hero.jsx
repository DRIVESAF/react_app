import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>创新科技解决方案</h1>
        <p>为您的业务提供最前沿的技术支持和创新解决方案</p>
        <div className="hero-buttons">
          <button className="primary-btn">了解更多</button>
          <button className="secondary-btn">联系我们</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="/src/assets/hero-image.svg" alt="创新科技" />
      </div>
    </section>
  );
};

export default Hero;