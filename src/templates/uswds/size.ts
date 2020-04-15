export default (size) => {
  switch (size) {
    case 'xs': return '';
    case 'sm': return 'mobile-lg';
    case 'md': return 'tablet';
    case 'lg': return 'desktop';
    default: return 'tablet';
  }
};