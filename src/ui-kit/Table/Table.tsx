import {
  Pagination,
  TableBody,
  TableCell,
  TableColumn,
  Table as TableComponent,
  TableHeader,
  TableRow,
  getKeyValue,
} from '@nextui-org/react';
import { useMemo, useState } from 'react';

interface TableProps {
  rows: { key: number }[];
  columns: { key: string; label: string }[];
  className?: string;
  withPagination?: boolean;
}

export const Table: React.FC<TableProps> = ({
  rows,
  columns,
  className,
  withPagination,
}) => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const pages = Math.ceil(rows.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return rows.slice(start, end);
  }, [page, rows]);

  return (
    <TableComponent
      aria-label='Table'
      className={className}
      bottomContent={
        withPagination && (
          <div className='flex w-full justify-center'>
            <Pagination
              isCompact
              showControls
              showShadow
              color='primary'
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
          </div>
        )
      }
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </TableComponent>
  );
};
