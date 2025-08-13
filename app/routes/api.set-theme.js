// This file is for Remix API routes and not compatible with React Router
// Theme switching functionality should be handled client-side with localStorage

export function action() {
  console.warn('API route not available in React Router setup');
  return { status: 'not available' };
}
