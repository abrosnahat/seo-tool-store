import cn from 'classnames';
import styles from './ToolContent.module.scss';

interface ToolContentProps {
  children: React.ReactNode;
  className?: string;
}

export const ToolContent: React.FC<ToolContentProps> = ({
  children,
  className,
}) => {
  return <div className={cn(styles.root, className)}>{children}</div>;
};
