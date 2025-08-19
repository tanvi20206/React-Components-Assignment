import React, { useState } from "react";

export interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

export function DataTable<T extends { id: string | number }>({
  data,
  columns,
  loading,
  selectable,
  onRowSelect,
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortAsc, setSortAsc] = useState(true);
  const [selected, setSelected] = useState<Set<string | number>>(new Set());

  // Handle loading/empty states
  if (loading) return <div className="p-4 text-center">Loading...</div>;
  if (!data || data.length === 0)
    return <div className="p-4 text-center">No data available</div>;

  // Sorting logic
  const handleSort = (col: Column<T>) => {
    if (!col.sortable) return;
    if (sortKey === col.key) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(col.key);
      setSortAsc(true);
    }
  };

  let sortedData = [...data];
  if (sortKey) {
    sortedData.sort((a, b) => {
      const valA = a[sortKey as keyof T];
      const valB = b[sortKey as keyof T];
      return sortAsc
        ? String(valA).localeCompare(String(valB))
        : String(valB).localeCompare(String(valA));
    });
  }

  // Row selection
  const toggleRow = (id: string | number) => {
    const newSet = new Set(selected);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setSelected(newSet);
    onRowSelect?.(data.filter((row) => newSet.has(row.id)));
  };

  // Select all
  const toggleAll = () => {
    if (selected.size === data.length) {
      setSelected(new Set());
      onRowSelect?.([]);
    } else {
      const allIds = new Set(data.map((row) => row.id));
      setSelected(allIds);
      onRowSelect?.(data);
    }
  };

  return (
    <table
      role="table"
      aria-label="Data Table"
      className="w-full border border-gray-300 rounded-md overflow-hidden"
    >
      <thead className="bg-gray-100 dark:bg-gray-700">
        <tr role="row">
          {selectable && (
            <th className="p-2 text-center">
              <input
                type="checkbox"
                aria-label="Select all rows"
                checked={selected.size === data.length}
                onChange={toggleAll}
              />
            </th>
          )}
          {columns.map((col) => (
            <th
              key={col.key}
              role="columnheader"
              aria-sort={
                sortKey === col.key
                  ? sortAsc
                    ? "ascending"
                    : "descending"
                  : "none"
              }
              className="p-2 text-left cursor-pointer select-none text-gray-700 dark:text-gray-200"
              onClick={() => handleSort(col)}
            >
              {col.title} {col.sortable && "↕"}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, idx) => (
          <tr
            key={row.id}
            role="row"
            className={`border-t hover:bg-gray-50 dark:hover:bg-gray-800 ${
              idx % 2 === 0
                ? "bg-white dark:bg-gray-900"
                : "bg-gray-50 dark:bg-gray-800"
            }`}
          >
            {selectable && (
              <td className="p-2 text-center">
                <input
                  type="checkbox"
                  aria-label={`Select row ${row.id}`}
                  checked={selected.has(row.id)}
                  onChange={() => toggleRow(row.id)}
                />
              </td>
            )}
            {columns.map((col) => (
              <td
                key={col.key}
                role="cell"
                className="p-2 text-gray-800 dark:text-gray-100"
              >
                {String(row[col.dataIndex])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
