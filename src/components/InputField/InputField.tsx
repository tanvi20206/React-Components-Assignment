import React, { useState } from "react";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  loading?: boolean;
  type?: "text" | "password"; // NEW: support password
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-2 text-base",
  lg: "px-4 py-3 text-lg",
};

const variantClasses = {
  filled:
    "bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:border-blue-500",
  outlined: "border border-gray-400 dark:border-gray-600 focus:border-blue-500",
  ghost: "border-none bg-transparent focus:ring-1 focus:ring-blue-500",
};

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  loading,
  type = "text",
  variant = "outlined",
  size = "md",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
          {label}
        </label>
      )}

      <div className="relative w-full">
        <input
          type={type === "password" && !showPassword ? "password" : "text"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={invalid}
          className={`w-full rounded-md outline-none pr-10 
            ${sizeClasses[size]} ${variantClasses[variant]} 
            ${invalid ? "border-red-500 focus:border-red-500" : ""} 
            ${
              disabled ? "bg-gray-200 dark:bg-gray-800 cursor-not-allowed" : ""
            }`}
        />

        {/* Clear button */}
        {!disabled && value && (
          <button
            type="button"
            aria-label="Clear input"
            onClick={() => onChange?.({ target: { value: "" } } as any)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            ✕
          </button>
        )}

        {/* Password toggle */}
        {type === "password" && (
          <button
            type="button"
            aria-label="Toggle password visibility"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white"
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        )}

        {/* Loading spinner */}
        {loading && (
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>

      {helperText && !invalid && (
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {helperText}
        </span>
      )}
      {invalid && errorMessage && (
        <span className="text-xs text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};
