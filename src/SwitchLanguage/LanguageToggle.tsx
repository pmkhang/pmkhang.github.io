import React from 'react';
import { useLanguage } from './Language';
import './LanguageToggle.scss';

interface LanguageToggleProps {
   className?: string;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ className }) => {
   const { language, toggleLanguage } = useLanguage();
   const languageToggleClassName = className;

   return (
      <div className={languageToggleClassName}>
         <button className='language-btn' onClick={toggleLanguage}>{language === 'vi' ? 'VI' : 'EN'}</button> {/* Cập nhật nút hiển thị */}
      </div>
   );
};

export default LanguageToggle;
