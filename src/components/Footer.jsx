import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-section">
          <h3>联系我们</h3>
          <p>📧 Email: contact@example.com</p>
          <p>📞 电话: (123) 456-7890</p>
          <p>📍 地址: 中国上海市浦东新区</p>
        </div>
        <div className="footer-section">
          <h3>快速链接</h3>
          <a href="#home">首页</a>
          <a href="#features">特点</a>
          <a href="#about">关于</a>
        </div>
        <div className="footer-section">
          <h3>关注我们</h3>
          <div className="social-links">
            <a href="#" className="social-link">微信</a>
            <a href="#" className="social-link">微博</a>
            <a href="#" className="social-link">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 创新科技. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;