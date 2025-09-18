import React from 'react';
import { Meta, Story } from '@storybook/react';
import DataTable from './DataTable';
import { Column } from '../../types/table';

type Person = { id: number; name: string; email: string; age: number };

const columns: Column<Person>[] = [
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'email', title: 'Email', dataIndex: 'email' },
  { key: 'age', title: 'Age', dataIndex: 'age', sortable: true },
];

const sample: Person[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com', age: 24 },
  { id: 2, name: 'Bob', email: 'bob@example.com', age: 30 },
  { id: 3, name: 'Charlie', email: 'charlie@example.com', age: 28 },
];

export default {
  title: 'Components/DataTable',
  component: DataTable,
} as Meta;

export const Default: Story = () => <DataTable data={sample} columns={columns} />;

export const Selectable: Story = () => (
  <DataTable
    data={sample}
    columns={columns}
    selectable
    onRowSelect={(rows) => console.log('selected', rows)}
  />
);

export const Loading: Story = () => <DataTable data={[]} columns={columns} loading />;
