import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: "Name",
    placeholder: "Enter your name",
    helperText: "plz enter your name ",
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    type: "password",
  },
};

export const WithClear: Story = {
  args: {
    label: "Search",
    placeholder: "Type something...",
    value: "Hello",
  },
};

export const Loading: Story = {
  args: {
    label: "Email",
    placeholder: "Loading state",
    loading: true,
  },
};

export const DarkMode: Story = {
  args: {
    label: "Username",
    placeholder: "Dark mode enabled",
    helperText: "Switch Storybook to dark theme to see effect",
  },
};
