import { getAll } from '@/services/likes.service';
import { Like } from '@/app/types/types';



export const revalidate = 0;

export default async function ServiceTest() {

  const allLikes: Like[] = await getAll();
  return (
    <div>
      <h1>Likes</h1>
      {allLikes?.map((like: Like) =>
        <div>
          <div>User ID : {like.user_id}</div>
          <div>Post ID : {like.post_id}</div>
          <div>Created At : {like.created_at}</div>
        </div>
      )}
    </div>
  )
};