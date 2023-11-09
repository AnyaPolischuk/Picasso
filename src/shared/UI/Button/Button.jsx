import classes from './Button.module.scss';

export const Button = ({ children }) => {
  return (
    <button className={classes.button}>{children}</button>
  )
}