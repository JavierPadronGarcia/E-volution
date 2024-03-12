import React from 'react';
import Article from '@/components/article';
import DownRightArrow from '@/components/downRightArrow';
import MirroredArticle from '@/components/mirroredArticle';


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
          <div className='absolute right-0 bottom-0'>
            <DownRightArrow></DownRightArrow>
          </div>
        </div>

        <div className='relative'>
          <Article
            image='/breakingNews.png'
            title="Put title here"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <div className='absolute right-0 bottom-0'>
            <DownRightArrow></DownRightArrow>
          </div>
        </div>

        <div className='relative'>
          <MirroredArticle
            image='/breakingNews.png'
            title="Put title here"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <div className='absolute left-0 bottom-0 rotate-90'>
            <DownRightArrow></DownRightArrow>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPage;