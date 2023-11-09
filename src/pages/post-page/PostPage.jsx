import { useParams, Link } from 'react-router-dom';

import { useGetPostsByIdQuery } from "../../store/API/postApi";
import { Loader } from '../../shared/UI/Loader/Loader';
import { Button } from '../../shared/UI/Button/Button';

import classes from './PostPage.module.scss';

export const PostPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetPostsByIdQuery(id);

  return (
    <div className={classes.wrapper}>
      {isLoading 
      ?
      <Loader />
      :
      <>
        <h1 className={classes.title}>{data.id}. {data.title}</h1>
        <p  className={classes.text}>{data.body}</p>
        <Link to='/'>
          <Button>Назад</Button>
        </Link>
      </>
    }
    </div>
  )
}