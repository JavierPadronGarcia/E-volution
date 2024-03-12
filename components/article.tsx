import React from 'react';

interface ArticleProps {
  title: string;
  image: string;
  content: string;
}

const Article: React.FC<ArticleProps> = ({ title, image, content }) => {
  return (
    <div className="grid grid-cols-3 bg-darkGreen w-[317px] h-[104px] rounded-md">
      <img className="w-[108px] h-[108px] p-5" src={image} alt={title} />
      <div className='col-span-2 p-2'>
        <h2 className='text-xl text-start underline'>{title}</h2>
        <p className='text-xs text-left text-lightWhite'>{content}</p>
      </div>
    </div>
  );
};

export default Article;