import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DataTable from './DataTable';

const columns = [
  { key: 'a', title: 'A', dataIndex: 'a', sortable: true },
  { key: 'b', title: 'B', dataIndex: 'b' },
];

const data = [
  { a: 'one', b: 'x' },
  { a: 'two', b: 'y' },
];

test('renders rows', () => {
  render(<DataTable data={data} columns={columns} />);
  expect(screen.getByText('one')).toBeInTheDocument();
  expect(screen.getByText('two')).toBeInTheDocument();
});

test('selectable rows', () => {
  const onRowSelect = vi.fn();
  render(<DataTable data={data} columns={columns} selectable onRowSelect={onRowSelect} />);
  const checkbox = screen.getAllByRole('checkbox')[1];
  fireEvent.click(checkbox);
  expect(onRowSelect).toHaveBeenCalled();
});
