import { ToolsList } from '@/components/ToolsList';
import styles from './page.module.scss';

export default function Tools() {
  return (
    <div className={styles.root}>
      <ToolsList />
    </div>
  );
}
