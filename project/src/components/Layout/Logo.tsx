import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
  const { isDark } = useTheme();
  
  return (
    <div className={`${className} rounded-lg flex items-center justify-center overflow-hidden`}>
      <img
        src="/src/assets/Screenshot 2025-06-28 125409-fotor-20250628125542.png"
        alt="Booksy Logo"
        className={`w-full h-full object-contain transition-all duration-200 ${
          isDark 
            ? 'filter brightness-0 invert' 
            : ''
        }`}
        style={{
          backgroundColor: isDark ? '#000000' : '#ffffff',
          padding: '2px'
        }}
      />
    </div>
  );
}