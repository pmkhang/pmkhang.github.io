import React, { createContext, useState, useContext, useEffect } from 'react';

type SupportedLanguages = 'en' | 'vi';

interface LanguageContextType {
   language: SupportedLanguages;
   toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
   language: 'en',
   toggleLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

interface LanguageProviderProps {
   children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
   const [language, setLanguage] = useState<SupportedLanguages>(() => {
      const savedLanguage = localStorage.getItem('language');
      return savedLanguage === 'vi' ? 'vi' : 'en';
   });

   const toggleLanguage = () => {
      setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'vi' : 'en'));
   };

   useEffect(() => {
      localStorage.setItem('language', language);
   }, [language]);

   const contextValue: LanguageContextType = {
      language,
      toggleLanguage,
   };

   return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
};
