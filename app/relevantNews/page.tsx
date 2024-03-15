import React from 'react';
import Article from '@/components/article';
import { getAllLikes } from '@/services/likes.service';
import { Like } from "../types/types";
import Link from 'next/link';
import { getLoggedInUser } from '@/services/auth.service';

export const revalidate = 0;

export default async function RelevantNewsPage() {

  const allPosts: Like[] = await getAllLikes();
  const user = await getLoggedInUser();

  return (
    <div className="flex flex-col gap-10 relative w-full m-h-screen">
      <h1 className="text-center mt-10 font-bold text-xl">Relevant News</h1>
      <div className="flex flex-col gap-7 items-center w-full p-5">
        {allPosts.map((like: Like, index) => (
          <div className='sm:w-[80%] lg:w-[780px]'>
            <Article
              image={!like.filename || like.filename === 'No file' ? null : like.filename}
              title={like.title}
              content={like.description}
              side={index % 2 === 0 ? 'left' : 'right'}
              post_id={like.post_id}
              key={`${like.post_id} - ${like.user_id}`}
            />
          </div>
        ))}
      </div>
      <div className='flex w-full justify-center'>
        <Link href='/news' className='p-3 bg-yellowButton rounded-xl'>
          See more news
        </Link>
      </div>
      {!user &&
        <div className="flex gap-7 justify-center m-5">
          <Link href='/login' className="underline justify-center flex">Login</Link>
          <Link href='/register' className="underline justify-center flex">Register</Link>
        </div>
      }
    </div>
  )
}