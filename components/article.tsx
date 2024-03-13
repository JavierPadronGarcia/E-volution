import React from 'react';
import DownRightArrow from '@/components/downRightArrow';

interface ArticleProps {
  title: string;
  image: string;
  content: string;
}

const Article: React.FC<ArticleProps> = ({ title, image, content}) => {
  return (
    <div className="grid grid-cols-3 bg-darkGreen w-[325px] h-[120px] rounded-md">
      <img className="w-[108px] h-[108px] p-5" src={image} alt={title} />
      <div className='col-span-2 p-2'>
        <h2 className='text-xl text-start underline'>{title}</h2>
        <p className='text-xs text-left text-lightWhite'>{content}</p>
      </div>
      <div className='absolute right-0 bottom-0'>
          <DownRightArrow></DownRightArrow>
        </div>
    </div>
    
  );
};

export default Article;