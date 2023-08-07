// LanguageToggle.tsx

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../redux/slice/switchLanguage'; // Địa chỉ đúng đến file languageSlice.ts
import { RootState } from '../redux/store/store'; // Địa chỉ đúng đến file store.ts
import './LanguageToggle.scss';

interface LanguageToggleProps {
   className?: string;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ className }) => {
   const language = useSelector((state: RootState) => state.language.language); // Lấy trạng thái language từ store
   const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);
   const dispatch = useDispatch();

   const languageToggleClassName = className;

   const handleToggleLanguage = () => {
      const newLanguage = language === 'vi' ? 'en' : 'vi'; // Chuyển đổi ngôn ngữ khi người dùng nhấn nút
      dispatch(setLanguage(newLanguage)); // Gửi action để cập nhật ngôn ngữ
   };

   return (
      <div className={languageToggleClassName}>
         <button className={`language-btn ${darkMode ? 'darkmode' : ''}`} onClick={handleToggleLanguage}>
            {language === 'vi' ? 'VI' : 'EN'}
         </button>
      </div>
   );
};

export default LanguageToggle;
