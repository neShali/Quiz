import type UsersType from './types/UsersType';

export async function loadStaticUsers(): Promise<UsersType[]> {
  const res = await fetch('/api/users');
  return res.json();
}
