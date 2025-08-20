import type { Meta, StoryObj } from "@storybook/react-vite";
import { InputField } from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  args: {
    label: "Username",
    placeholder: "Enter text...",
  },
};
export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {};

export const WithHelperText: Story = {
  args: {
    helperText: "This is a helper message.",
  },
};

export const ErrorState: Story = {
  args: {
    invalid: true,
    errorMessage: "This field is required",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "Disabled value",
  },
};

export const PasswordField: Story = {
  args: {
    type: "password",
    label: "Password",
    placeholder: "Enter password",
  },
};

// ✅ NEW STORY for password toggle
export const PasswordWithToggle: Story = {
  args: {
    type: "password",
    label: "Password",
    placeholder: "Enter password",
  },
};

// ✅ NEW STORY for clearable input
export const ClearableInput: Story = {
  args: {
    clearable: true,
    label: "Search",
    placeholder: "Type something...",
  },
};

export const Loading: Story = {
  args: {
    value: "Loading...",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <InputField label="Outlined" variant="outlined" placeholder="Outlined" />
      <InputField label="Filled" variant="filled" placeholder="Filled" />
      <InputField label="Ghost" variant="ghost" placeholder="Ghost" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <InputField label="Small" size="sm" placeholder="Small input" />
      <InputField label="Medium" size="md" placeholder="Medium input" />
      <InputField label="Large" size="lg" placeholder="Large input" />
    </div>
  ),
};
