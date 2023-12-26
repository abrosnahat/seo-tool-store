import cn from 'classnames';
import styles from './ToolContentText.module.scss';

interface ToolContentTextProps {
  children: React.ReactNode;
  className?: string;
}

export const ToolContentText: React.FC<ToolContentTextProps> = ({
  children,
  className,
}) => {
  return <p className={cn(styles.root, className)}>{children}</p>;
};
