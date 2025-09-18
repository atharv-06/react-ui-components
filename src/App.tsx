import React from 'react'
import InputField from './components/InputField/InputField'
import DataTable from './components/DataTable/DataTable'

const sample = [
  { id: 1, name: 'Alice', email: 'alice@example.com', age: 24 },
  { id: 2, name: 'Bob', email: 'bob@example.com', age: 30 },
  { id: 3, name: 'Charlie', email: 'charlie@example.com', age: 28 },
]

const columns = [
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'email', title: 'Email', dataIndex: 'email' },
  { key: 'age', title: 'Age', dataIndex: 'age', sortable: true },
]

export default function App(){
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">UI Components Starter</h1>
      <div className="max-w-md">
        <InputField label="Full name" placeholder="Enter your name" helperText="Helper text example" />
      </div>
      <div>
        <DataTable data={sample} columns={columns} selectable onRowSelect={(rows)=>console.log('selected', rows)} />
      </div>
    </div>
  )
}
