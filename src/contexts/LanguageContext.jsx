import { createContext, useContext, useState } from 'react';

// Diccionario de traducciones
const translations = {
  en: {
    home: "Home",
    products: "All Products",
    food: "Food",
    tech: "Tech",
    cart: "Cart",
    searchPlaceholder: "Search products...",
  },
  es: {
    home: "Inicio",
    products: "Todos los productos",
    food: "Comida",
    tech: "Tecnología",
    cart: "Carrito",
    searchPlaceholder: "Buscar productos...",
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Idioma por defecto

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'es' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
