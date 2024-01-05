import cn from 'classnames';
import React from 'react';
import { TabBaseProps, TabProps } from './Tab/Tab';
import styles from './Tabs.module.scss';

interface TabsProps<T> extends TabBaseProps<T> {
  children: React.ReactElement[];
  className?: string;
}

export const Tabs = <T,>({
  children,
  onChange,
  value,
  className,
}: TabsProps<T>) => {
  return (
    <div className={cn(styles.root, className)}>
      <div className={styles.tabs}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement<TabProps<T>>(child)) {
            return React.cloneElement(child, {
              onChange: (value: T) => {
                onChange?.(value);
                child.props.onChange?.(value);
              },
              isActive: child.props.isActive || child.props.value === value,
            });
          }

          return child;
        })}
      </div>
    </div>
  );
};
