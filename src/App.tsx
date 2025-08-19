import { InputField } from "./components/InputField/InputField";

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-4">Day 1 - Input Field</h1>
        <InputField label="Username" placeholder="Enter your username" />
        <InputField
          label="Password"
          type="password"
          placeholder="Enter your password"
        />
      </div>
    </div>
  );
}

export default App;
