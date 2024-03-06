import React from 'react';
import Article from '../../components/article/article';
import BackArrow from '@/components/backArrow';

const MyPage: React.FC = () => {
  return (
    <>
    <div>
      <Article
        title="Put title here"
        image="/sample-image.jpg"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </div>
    <BackArrow></BackArrow>
    </>
  );
};

export default MyPage;