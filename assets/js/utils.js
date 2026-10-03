// Asset URL Resolver for Hostinger & GitHub Pages
export function getAssetUrl(path) {
  const cleanPath = path.replace(/^[.\/]+/, '');
  const pathname = window.location.pathname;
  
  // Detect if running on GitHub Pages under /AI-Prompt-Library
  if (pathname.includes('/AI-Prompt-Library')) {
    return '/AI-Prompt-Library/' + cleanPath;
  }
  
  return '/' + cleanPath;
}
