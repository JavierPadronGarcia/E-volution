import React from 'react';

interface ArticleProps {
  title: string;
  image: string;
  content: string;
  isLeft : boolean;
}



const Article: React.FC<ArticleProps> = ({ title, image, content, isLeft }) => {
  return (
    <div className="grid grid-cols-3 bg-darkGreen w-[368px] h-[120px] rounded-md">
      {isLeft && <img className="w-[108px] h-[108px] p-5" src={image} alt={title} />}
      <div className='col-span-2 p-2'>
        <h2 className='text-xl text-start underline'>{title}</h2>
        <p className='text-xs text-left text-lightWhite'>{content}</p>
      </div>
      {!isLeft && <img className="w-[108px] h-[108px] p-5" src={image} alt={title} />}
    </div>
  );
};

export default Article;