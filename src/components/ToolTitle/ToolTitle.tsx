import cn from 'classnames';
import styles from './ToolTitle.module.scss';

interface ToolTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const ToolTitle: React.FC<ToolTitleProps> = ({
  children,
  className,
}) => {
  return <h1 className={cn(styles.root, className)}>{children}</h1>;
};
