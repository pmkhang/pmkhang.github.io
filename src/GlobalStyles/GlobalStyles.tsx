import './GlobalStyles.scss';
import React, { ReactNode } from 'react';

interface GlobalStylesProps {
   children: ReactNode;
}

const GlobalStyles: React.FC<GlobalStylesProps> = ({ children }) => {
   return <>{children}</>;
};

export default GlobalStyles;
