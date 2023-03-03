import type UsersType from './types/UsersType';

export async function loadStaticUsers(): Promise<UsersType[]> {
  const res = await fetch('/api/users');
  return res.json();
}

export async function addStaticUsers(score: number): Promise<UsersType[]> {
  const res = await fetch('/api/users/add-scores', {
    method: 'POST',
    body: JSON.stringify({ score }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
}
