"use client"
import { Like, Post } from "@/app/types/types";
import LikeButton from "./likeButton";
import { useState } from "react";
import Article from "./article";

const News = ({ likedNews, postedNews }: { likedNews?: Like[], postedNews?: Post[] }) => {
  const [likeIsActive, setLikeIsActive] = useState(true)
  return (
    <>
      <div className='border-2 border-darkGreen rounded-md w-[333px] h-[315px]  mt-3 flex flex-col items-start overflow-hidden  lg:mt-0 lg:h-full'>

        <div className="flex border-darkGreen border-b-2 h-[45px]">
          <LikeButton handleClick={() => setLikeIsActive(true)} title='Liked News' isActive={likeIsActive} />
          <LikeButton handleClick={() => setLikeIsActive(false)} title="Posted News" isActive={!likeIsActive} />
        </div>

        <div className="flex flex-col items-start gap-2 p-3 lg:p-2 overflow-y-auto max-h-[85%]">
          {likeIsActive
            ? <>
              {likedNews?.map((article, index) => (
                <div className="w-full" key={`${article.post_id} - ${article.user_id}`}>
                  <Article
                    title={article.title}
                    content={article.description}
                    image={!article.filename || article.filename === 'No file' ? null : article.filename}
                    post_id={article.post_id}
                    side={index % 2 === 0 ? 'left' : 'right'}
                    customLineClamp="line-clamp-2"
                  />
                </div>
              ))}
            </>
            : <>
              {postedNews?.map((article, index) => (
                <div className="w-full" key={`${article.id} - ${article.user_id}`}>
                  <Article
                    title={article.title}
                    content={article.description}
                    image={!article.filename || article.filename === 'No file' ? null : article.filename}
                    post_id={article.id}
                    side={index % 2 === 0 ? 'left' : 'right'}
                    customLineClamp="line-clamp-2"
                  />
                </div>
              ))}
            </>
          }
        </div>
      </div>
    </>
  )
};

export default News;