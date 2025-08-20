/* eslint-disable storybook/no-renderer-packages */
import type { Meta, StoryObj } from "@storybook/react";
import { PasswordField } from "./PasswordField";

const meta: Meta<typeof PasswordField> = {
  title: "Components/PasswordField",
  component: PasswordField,
};
export default meta;

type Story = StoryObj<typeof PasswordField>;

export const Default: Story = {
  args: {
    label: "Enter Password",
    placeholder: "••••••••",
  },
};
