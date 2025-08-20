
// Make sure the file exists at the specified path, or update the path if needed.
import {InputField} from "./components/InputField/InputField";
import {DataTable} from "./components/DataTable/DataTable";

import {Button} from "./stories/Button";

function App() {
  // Dummy data for table
  const data = [
    { id: 1, name: "Tanvi", email: "tanvi@example.com" },
    { id: 2, name: "Riya", email: "riya@example.com" },
    { id: 3, name: "Aman", email: "aman@example.com" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Assignment Demo</h1>

      {/* Input field */}
      <InputField label="Name" placeholder="Enter your name" />

      {/* Button */}
      <div className="mt-4">
        <Button label="Submit" />
      </div>

      {/* Data Table */}
      <div className="mt-6">
        <DataTable data={data} columns={[]} />
      </div>
    </div>
  );
}

export default App;
