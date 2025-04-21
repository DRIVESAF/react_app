import React from 'react';

const Features = () => {
  const features = [
    {
      title: '创新技术',
      description: '采用最新的技术栈和解决方案，为您的业务保驾护航',
      icon: '🚀'
    },
    {
      title: '专业团队',
      description: '经验丰富的开发团队，提供全方位的技术支持',
      icon: '👥'
    },
    {
      title: '高效服务',
      description: '快速响应客户需求，提供高效的解决方案',
      icon: '⚡'
    },
    {
      title: '安全可靠',
      description: '注重数据安全，确保系统稳定运行',
      icon: '🛡️'
    }
  ];

  return (
    <section className="features" id="features">
      <h2>我们的优势</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;