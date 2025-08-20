import { useState } from "react";

type PasswordFieldProps = {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const PasswordField: React.FC<PasswordFieldProps> = ({
  label,
  placeholder,
  value,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      {label && <label className="font-medium">{label}</label>}
      <div className="flex items-center border rounded px-3 py-2 bg-white shadow-sm">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="flex-1 outline-none"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="ml-2 text-sm text-blue-600"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
};
