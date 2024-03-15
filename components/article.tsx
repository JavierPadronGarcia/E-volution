import { ImageBucketURL } from '@/app/constants/supabaseConstants';
import { type UUID } from 'crypto';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight, FaImage } from "react-icons/fa";

type ArticleProps = {
  title: string;
  image?: string | null;
  content: string;
  post_id?: UUID;
  side: string;
  customLineClamp?: string;
  defaultLineClamp?: boolean | undefined;
}

const Article: React.FC<ArticleProps> = ({ title, image, content, side, post_id, customLineClamp, defaultLineClamp }) => {
  return (
    <Link
      className={`relative flex ${side === 'left' ? 'flex-row' : 'flex-row-reverse'} items-center bg-notWhite border-2 border-darkGreen aspect-articleCard w-full rounded-md gap-5 px-5 py-4 article-container`}
      href={`/selectedNews/${post_id}`}
    >
      <div className='w-[30%] aspect-square'>
        {image
          ? <img className="size-full rounded-md article-image" src={`${ImageBucketURL}/${image}`} alt={title} />
          : <FaImage className='size-full rounded-md article-image' />
        }
      </div>
      <div className='w-[70%] flex flex-col h-full p-1'>
        <p className='text-xl text-start font-bold line-clamp-1'>{title}</p>
        <p className={`text-xs text-left text-ellipsis ${!defaultLineClamp && 'line-clamp-3'} ${customLineClamp}`}>{content}</p>
      </div>
      <div className={`absolute w-[22px] h-[22px] article-arrow cursor-pointer bottom-0
        ${side === 'left'
          ? 'rotate-45 right-0'
          : 'rotate-[135deg] left-0'
        } 
        `}>
        <FaArrowRight
          className='size-full'
        />
      </div>
    </Link>
  );
};

export default Article;