import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useGetPostsQuery } from '../../store/API/postApi';
import { PostCard } from '../../features/PostCard/PostCard';
import { increasePage, selectPage } from '../../store/postSlice';

export const MainPage = () => {
  const page = useSelector(selectPage);
  const dispatch = useDispatch();
  const { data } = useGetPostsQuery(page);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isNextPageLoading, setIsNextPageLoading] = useState(false);
  
  const posts = data ?? [];

  const loadNextPage = () => {
    setIsNextPageLoading(true);
    
    setTimeout(() => {
      dispatch(increasePage());
      setHasNextPage(posts.length < 100);
      setIsNextPageLoading(false);
    }, 3000);
  }

    return (
      <div>
        <PostCard
          hasNextPage={hasNextPage}
          isNextPageLoading={isNextPageLoading}
          items={posts}
          loadNextPage={loadNextPage}
        />
      </div>
    );
}