import React, { useState } from "react";
import { Eye, EyeOff, X } from "lucide-react";

interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "text" | "password";
  clearable?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  value = "",
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  variant = "outlined",
  size = "md",
  type = "text",
  clearable = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2 text-base",
    lg: "px-4 py-3 text-lg",
  };

  const variantClasses = {
    filled: "bg-gray-100 border border-gray-300",
    outlined: "border border-gray-400 bg-white",
    ghost: "bg-transparent border border-transparent",
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-sm font-medium">{label}</label>}

      <div className="relative">
        <input
          type={type === "password" && showPassword ? "text" : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`
            w-full rounded-md focus:outline-none focus:ring-2 pr-10
            ${sizeClasses[size]}
            ${variantClasses[variant]}
            ${invalid ? "border-red-500 ring-red-200" : ""}
            ${disabled ? "bg-gray-200 cursor-not-allowed" : ""}
          `}
        />

        {/* Clear button */}
        {clearable && value && !disabled && (
          <button
            type="button"
            title="Clear input"
            onClick={() =>
              onChange?.({
                target: { value: "" },
              } as React.ChangeEvent<HTMLInputElement>)
            }
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
          >
            <X size={16} />
          </button>
        )}

        {/* Password toggle */}
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword((p) => !p)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        )}
      </div>

      {helperText && !errorMessage && (
        <p className="text-xs text-gray-500">{helperText}</p>
      )}
      {errorMessage && <p className="text-xs text-red-500">{errorMessage}</p>}
    </div>
  );
};
