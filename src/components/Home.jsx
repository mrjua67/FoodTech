import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Home = () => {
  const { language } = useLanguage();

  return (
    <div>
      <h2>{language === 'en' ? 'Welcome to our store!' : '¡Bienvenido a nuestra tienda!'}</h2>
      <p>{language === 'en' ? 'Check out our products.' : 'Mira nuestros productos.'}</p>
    </div>
  );
};

export default Home;
