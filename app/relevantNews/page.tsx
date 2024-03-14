import React from 'react';
import Article from '@/components/article';
import BackArrow from '@/components/backArrow';
import DownRightArrow from '@/components/downRightArrow';
import Author from '@/components/author';
import {getAllLikes} from '@/services/likes.service';
import { Like } from "../types/types";


export default async function RelevantNewsPage() {

  const allPosts: Like[] = await getAllLikes();

  return (
    <div className="flex flex-col gap-10 relative w-full">
      <h1 className="text-center mt-10 font-bold text-xl">Relevant News</h1>
      <div className="flex flex-col gap-7 items-center w-full pb-5">
        {allPosts.map((like: Like, index) => (
          <Article
            image={!like.filename || like.filename === 'No file' ? null : like.filename}
            title={like.title}
            content={like.description}
            side={index % 2 === 0 ? 'left' : 'right'}
            post_id={like.post_id}
            //user_id={like.user_id}
          />
        ))}
      </div>
    </div>
  )
}