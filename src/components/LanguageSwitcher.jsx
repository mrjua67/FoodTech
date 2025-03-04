import { useLanguage } from '../contexts/LanguageContext';

function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage(); // ✅ Usamos `toggleLanguage`

  return (
    <button
      onClick={toggleLanguage} // ✅ Llamamos directamente a `toggleLanguage`
      className="fixed top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded shadow-md hover:bg-blue-600 transition"
    >
      {language === 'en' ? '🇪🇸 Español' : '🇬🇧 English'}
    </button>
  );
}

export default LanguageSwitcher;
