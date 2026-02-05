// src/components/ThemeWrapper.js
import React from 'react';
import { getThemeClasses } from '../utils/themeUtils';

function ThemeWrapper({ children, theme }) {
  // Get theme classes without modifying children
  const themeClasses = getThemeClasses(theme);
  
  // This component doesn't render anything, just provides context
  // Your pages remain exactly the same
  return <>{children}</>;
}

export default ThemeWrapper;