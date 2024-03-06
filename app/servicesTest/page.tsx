import { getAll as getAllLikes } from '@/services/likes.service';
import { ReactNode } from 'react';

export const revalidate = 0;

export default async function ServiceTest() {

  const allLikes = await getAllLikes();

  return (
    <div>
      <h1>Likes</h1>
      <pre>{allLikes}</pre>
    </div>
  )
};