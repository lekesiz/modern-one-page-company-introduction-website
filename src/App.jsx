import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div>
      <header>
        <h1>AI Danışmanlık Firması</h1>
      </header>
      <section className="about-us">
        <h2>Hakkımızda</h2>
        <p>Öncü yapay zeka danışmanlığı firmamız, işletmenizin dijital dönüşümünü hızlandırmak için en iyi çözümleri sunar. Veri analizi, makine öğrenmesi ve yapay zeka teknolojilerini kullanarak işletmelerin potansiyelini maksimize ediyoruz.</p>
      </section>
      <section className="services">
        <h2>Hizmetlerimiz</h2>
        <ul>
          <li><strong>Veri Analizi:</strong> İşletmenizin verilerini analiz ederek optimize çözümler sunarız.</li>
          <li><strong>Makine Öğrenmesi:</strong> Yapay zeka modelleri geliştirmek ve uygulamak için uzmanlaşmış bir ekibimiz var.</li>
          <li><strong>Dijital Dönüşüm:</strong> İşletmenizin dijital dönüşüm sürecinde size rehberlik ederiz.</li>
        </ul>
      </section>
      <section className="contact">
        <h2>Bize Ulaşın</h2>
        <p>Email: bilgi@aidanismanlik.com</p>
        <p>Telefon: (123) 456-7890</p>
        <p>Adres: Şahitkaya Mah. No: 1, 34394 Şişli/İstanbul</p>
      </section>
    </div>
  );
}

export default App;
