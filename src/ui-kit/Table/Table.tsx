import {
  TableBody,
  TableCell,
  TableColumn,
  Table as TableComponent,
  TableHeader,
  TableRow,
  getKeyValue,
} from '@nextui-org/react';

interface TableProps {
  rows: Record<string, string>[];
  columns: { key: string; label: string }[];
}

export const Table: React.FC<TableProps> = ({ rows, columns }) => {
  return (
    <TableComponent>
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </TableComponent>

    // <table className={styles.root}>
    //   <thead className={styles.thead}>
    //     <tr>
    //       {headers.map((header, index) => (
    //         <th
    //           key={index}
    //           className={styles.th}
    //         >
    //           {header}
    //         </th>
    //       ))}
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {data.map((row, index) => (
    //       <tr key={index}>
    //         {Object.values(row).map((value, index) => (
    //           <td
    //             key={index}
    //             className={styles.td}
    //           >
    //             {value}
    //           </td>
    //         ))}
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
  );
};
