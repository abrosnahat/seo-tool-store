import cn from 'classnames';
import styles from './MainTitle.module.scss';

interface MainTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const MainTitle: React.FC<MainTitleProps> = ({
  children,
  className,
}) => {
  return <h2 className={cn(styles.root, className)}>{children}</h2>;
};
