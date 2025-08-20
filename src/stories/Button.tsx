import "./button.css";

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
  /** Optional click handler */
  onClick?: () => void;
  /** Variant type */
  variant?: "primary" | "secondary";
  /** Children instead of label */
  children: React.ReactNode;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  variant = "secondary",
  children,
  ...props
}: ButtonProps) => {
  const mode =
    primary || variant === "primary"
      ? "storybook-button--primary"
      : "storybook-button--secondary";

  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {children}
    </button>
  );
};
