import styles from './Table.module.scss';

interface TableProps {
  data: Record<string, string>[];
  headers: string[];
}

export const Table: React.FC<TableProps> = ({ data, headers }) => {
  return (
    <table className={styles.root}>
      <thead className={styles.thead}>
        <tr>
          {headers.map((header, index) => (
            <th
              key={index}
              className={styles.th}
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {Object.values(row).map((value, index) => (
              <td
                key={index}
                className={styles.td}
              >
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
