import { useState } from "react";
import { PasswordField } from "./components/Password/PasswordField";
import { Button } from "./stories/Button";

import { InputField } from "./components/InputField/InputField";
import { DataTable, type Column } from "./components/DataTable/DataTable";
type User = {
  id: number;
  name: string;
  email: string;
};
const columns: Column<User>[] = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "email", title: "Email", dataIndex: "email", sortable: true },
];

function App() {
  const [search, setSearch] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRows, setSelectedRows] = useState<User[]>([]);

  const data: User[] = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
  ];

  const filteredData = data.filter(
    (row) =>
      row.name.toLowerCase().includes(search.toLowerCase()) ||
      row.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6">React Component Demo</h1>

      {/* InputField demo */}
      <div className="mb-6">
        <InputField
          label="Search Users"
          placeholder="Type a name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          clearable
        />
      </div>

      {/* PasswordField demo */}
      <div className="mb-6">
        <PasswordField
          label="Enter Password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {/* Buttons demo */}
      <div className="flex gap-4 mb-6">
        <Button variant="primary">Submit</Button>
        <Button variant="secondary">Cancel</Button>
      </div>

      {/* DataTable demo */}
      <DataTable<User>
        data={filteredData}
        columns={columns} // ✅ Use the correct columns definition
        selectable // ✅ enable row selection
        onRowSelect={setSelectedRows} // ✅ use correct prop
      />

      {/* Selected rows output */}
      <div className="mt-6 bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-2">Selected Rows:</h2>
        <pre className="text-sm">{JSON.stringify(selectedRows, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
