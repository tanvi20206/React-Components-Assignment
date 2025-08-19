
// Make sure the file exists at the specified path, or update the path if needed.
import {InputField} from "./components/InputField/InputField";
import {DataTable} from "./components/DataTable/DataTable";

function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Assignment Demo</h1>

      {/* Input field */}
      <InputField label="Name" placeholder="Enter your name" />

      {/* Button
      <div className="mt-4">
        <Button label="Submit" />
      </div> */}

      {/* Data Table */}
      <div className="mt-6">
        <DataTable data={[]} columns={[]} />
      </div>
    </div>
  );
}

export default App;
