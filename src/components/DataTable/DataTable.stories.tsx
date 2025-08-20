/* eslint-disable storybook/no-renderer-packages */
import type { Meta, StoryObj } from "@storybook/react";
import { DataTable, type Column } from "./DataTable";

interface User {
  id: number;
  name: string;
  email: string;
}

const columns: Column<User>[] = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "email", title: "Email", dataIndex: "email", sortable: true },
];

const data: User[] = [
  { id: 1, name: "tanvi", email: "tanvi@example.com" },
  { id: 2, name: "satyam", email: "satyam@example.com" },
  { id: 3, name: "prateek", email: "prateek@example.com" },
];

const meta: Meta<typeof DataTable<User>> = {
  title: "Components/DataTable",
  component: DataTable<User>,
  args: {
    data,
    columns,
  },
};
export default meta;

type Story = StoryObj<typeof DataTable<User>>;

export const Default: Story = {};

export const Sortable: Story = {
  args: {
    columns,
  },
};

export const Loading: Story = {
  args: {
    data: [],
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    data: [],
  },
};

export const SelectableRows: Story = {
  args: {
    selectable: true,
    onRowSelect: (rows) => console.log("Selected rows:", rows),
  },
};
