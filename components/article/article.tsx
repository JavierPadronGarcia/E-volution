import React from 'react';

interface ArticleProps {
  title: string;
  image: string;
  content: string;
}

const Article: React.FC<ArticleProps> = ({ title, image, content }) => {
  return (
    <div className="grid grid-cols-3 bg-darkGreen">
      <h2 className='text-5xl '>{title}</h2>
      <img src={image} alt={title} />
      <p>{content}</p>
    </div>
  );
};

export default Article;