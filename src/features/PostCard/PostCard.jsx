import React from "react";
import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import { Link } from 'react-router-dom';

import { Button } from '../../shared/UI/Button/Button';
import { Loader } from "../../shared/UI/Loader/Loader";
import classes from './PostCard.module.scss';

export const PostCard = ({
    hasNextPage,
    isNextPageLoading,
    items,
    loadNextPage
  }) => {
  
  const postCount = hasNextPage ? items.length + 1 : items.length;
  const loadMorePosts = isNextPageLoading ? () => {} : loadNextPage;
  const isPostLoaded = index => !hasNextPage || index < items.length;

  const Item = ({ index, style }) => {
    if (!isPostLoaded(index)) {
      return (
        <div style={style}>
          <Loader />
        </div>
      )
    } else {
      return (
        <div style={style}>
          <div className={classes.postWrapper}>
            <h1 className={classes.title}>{items[index].id}. {items[index].title}</h1>
            <p className={classes.text}>{(items[index].body).substr(0, 100)}...</p>
            <Link to={"posts/" + items[index].id}>
              <Button>Просмотр</Button>
            </Link>
          </div>
        </div>
      )    
    }
  };

  return (
    <InfiniteLoader
      isItemLoaded={isPostLoaded}
      itemCount={postCount}
      loadMoreItems={loadMorePosts}
    >
      {({ onItemsRendered, ref }) => (
        <List
          className="List"
          height={963}
          itemCount={postCount}
          itemSize={240}
          onItemsRendered={onItemsRendered}
          ref={ref}
          width='100%'
        >
          {Item}
        </List>
      )}
    </InfiniteLoader>
  );
}