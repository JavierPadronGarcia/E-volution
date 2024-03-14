"use client"
import { Like, Post } from "@/app/types/types";
import LikeButton from "./likeButton";
import { useState } from "react";
import Article from "./article";

const News = ({ likedNews, postedNews }: { likedNews?: Like[], postedNews?: Post[] }) => {
  const [likeIsActive, setLikeIsActive] = useState(true)
  return (
    <>
      <div className='border-2 border-darkGreen rounded-md w-[333px] h-[315px]  mt-3 flex flex-wrap justify-center overflow-hidden'>
        <div className="flex border-darkGreen border-b-2 h-[15%]">
          <LikeButton handleClick={() => setLikeIsActive(true)} title='Liked News' isActive={likeIsActive} />
          <LikeButton handleClick={() => setLikeIsActive(false)} title="Posted News" isActive={!likeIsActive} />
        </div>
        <div className="flex flex-col items-center gap-2 p-3 overflow-y-auto max-h-[85%]">
          {likeIsActive
            ? <>
              {likedNews?.map((article, index) => (
                <div className="w-full">
                  <Article
                    title={article.title}
                    content={article.description}
                    image={!article.filename || article.filename === 'No file' ? null : article.filename}
                    post_id={article.post_id}
                    side={index % 2 === 0 ? 'left' : 'right'}
                  />
                </div>
              ))}
            </>
            : <>
              {postedNews?.map((article, index) => (
                <div className="w-full">
                  <Article
                    title={article.title}
                    content={article.description}
                    image={!article.filename || article.filename === 'No file' ? null : article.filename}
                    post_id={article.id}
                    side={index % 2 === 0 ? 'left' : 'right'}
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