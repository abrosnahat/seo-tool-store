import cn from 'classnames';
import styles from './Description.module.scss';

interface DescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const Description: React.FC<DescriptionProps> = ({
  children,
  className,
}) => {
  return <p className={cn(styles.root, className)}>{children}</p>;
};
