import { type UUID } from 'crypto';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from "react-icons/fa";

type ArticleProps = {
  title: string;
  image: string;
  content: string;
  post_id?: UUID;
  side: string;
}

const Article: React.FC<ArticleProps> = ({ title, image, content, side, post_id }) => {
  return (
    <div
      className={`relative flex ${side === 'left' ? 'flex-row' : 'flex-row-reverse'} items-center bg-darkGreen w-[368px] h-[120px] rounded-md gap-5 px-5 py-4`}
    >
      <div className='w-[30%] h-[84px]'>
        <img className="size-full rounded-md" src={image} alt={title} />
      </div>
      <div className='w-[70%] flex flex-col h-full p-1'>
        <p className='text-xl text-start font-bold line-clamp-1'>{title}</p>
        <p className='text-xs text-left text-ellipsis line-clamp-3'>{content}</p>
      </div>
      <Link href={`/selectedNews/${post_id}`} className={`absolute w-[22px] h-[22px] hover:text-green-500 cursor-pointer bottom-0
        ${side === 'left'
          ? 'rotate-45 right-0'
          : 'rotate-[135deg] left-0'
        } 
        `}>
        <FaArrowRight
          className='size-full'
        />
      </Link>
    </div>
  );
};

export default Article;