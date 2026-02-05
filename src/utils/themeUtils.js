export const getTextColorClass = () => {
  return 'text-black';
};

export const getSecondaryTextColorClass = () => {
  return 'text-gray-900';
};

export const getMutedTextColorClass = () => {
  return 'text-gray-700';
};

export const getCardBgClass = (theme) => {
  return theme === 'dark' 
    ? 'bg-gray-800/30' 
    : 'bg-white/50';
};

export const getBorderClass = (theme) => {
  return theme === 'dark' 
    ? 'border-gray-600' 
    : 'border-gray-200';
};