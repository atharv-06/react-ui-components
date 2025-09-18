import React from 'react';
import { Column } from '../../types/table';

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = React.useState<keyof T | null>(null);
  const [sortAsc, setSortAsc] = React.useState(true);
  const [selected, setSelected] = React.useState<Set<number>>(new Set());

  const handleSort = (col: Column<T>) => {
    if (!col.sortable) return;
    const key = col.dataIndex as keyof T;
    if (sortKey === key) setSortAsc((s) => !s);
    else {
      setSortKey(key);
      setSortAsc(true);
    }
  };

  const sorted = React.useMemo(() => {
    if (!sortKey) return data;
    const arr = [...data];
    arr.sort((a, b) => {
      const av = a[sortKey];
      const bv = b[sortKey];
      if (av == null) return 1;
      if (bv == null) return -1;
      if (av === bv) return 0;
      return av > bv ? (sortAsc ? 1 : -1) : sortAsc ? -1 : 1;
    });
    return arr;
  }, [data, sortKey, sortAsc]);

  const toggleRow = (index: number) => {
    const next = new Set(selected);
    if (next.has(index)) next.delete(index);
    else next.add(index);
    setSelected(next);
    onRowSelect?.([...next].map((i) => sorted[i]));
  };

  const toggleAll = () => {
    if (selected.size === sorted.length) {
      setSelected(new Set());
      onRowSelect?.([]);
    } else {
      const all = new Set<number>(sorted.map((_, i) => i));
      setSelected(all);
      onRowSelect?.(sorted);
    }
  };

  if (loading) {
    return (
      <div role="status" aria-live="polite" className="p-6 text-center">
        Loading...
      </div>
    );
  }

  if (!data.length) {
    return (
      <div className="p-6 text-center text-gray-500">No records to display</div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            {selectable && (
              <th className="px-4 py-2 text-left">
                <input
                  aria-label="select all rows"
                  type="checkbox"
                  checked={selected.size === sorted.length}
                  onChange={toggleAll}
                />
              </th>
            )}
            {columns.map((col) => (
              <th
                key={col.key}
                scope="col"
                className="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                <button
                  onClick={() => handleSort(col)}
                  aria-label={col.sortable ? `Sort by ${col.title}` : col.title}
                  className="flex items-center gap-2 w-full text-left"
                >
                  <span>{col.title}</span>
                  {col.sortable && sortKey === col.dataIndex && (
                    <span aria-hidden>{sortAsc ? '▲' : '▼'}</span>
                  )}
                </button>
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
          {sorted.map((row, idx) => (
            <tr key={idx} className={`${selected.has(idx) ? 'bg-indigo-50' : ''}`}>
              {selectable && (
                <td className="px-4 py-2">
                  <input
                    aria-label={`select row ${idx + 1}`}
                    type="checkbox"
                    checked={selected.has(idx)}
                    onChange={() => toggleRow(idx)}
                  />
                </td>
              )}
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200">
                  {String(row[col.dataIndex])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
