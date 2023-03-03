import Theme from './types/Theme';

export async function loadThemes(): Promise<Theme[]> {
  const res = await fetch('/api/themes');
  return res.json();
}
