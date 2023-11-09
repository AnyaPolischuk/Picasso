import { Routes, Route } from 'react-router-dom';

import { MainPage } from './main-page/MainPage';
import { PostPage } from './post-page/PostPage';

export const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={ <MainPage /> } />
      <Route path='posts/:id' element={ <PostPage /> } />
    </Routes>
  )
}