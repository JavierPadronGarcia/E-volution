import React from 'react';
import Article from '@/components/article';
import BackArrow from '@/components/backArrow';
import DownRightArrow from '@/components/downRightArrow';
import Author from '@/components/author';

const MyPage: React.FC = () => {
  return (
    <>
      <div className='grid gap-8 grid-cols-1'>

        <div className='relative'>
          <Article
            image='/breakingNews.png'
            title="Put title here"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>

        <div className='relative'>
          <Article
            image='/breakingNews.png'
            title="Put title here"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>

        <div className='relative'>
          <Article
            image='/breakingNews.png'
            title="Put title here"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>

      </div>
      <div>
        Made by
        <Author></Author>
      </div>
    </>
  );
};

export default MyPage;