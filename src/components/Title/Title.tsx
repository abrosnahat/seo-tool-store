import cn from 'classnames';
import styles from './Title.module.scss';

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

export const Title: React.FC<TitleProps> = ({ children, className }) => {
  return <h2 className={cn(styles.root, className)}>{children}</h2>;
};
