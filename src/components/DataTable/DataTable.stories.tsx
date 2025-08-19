import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "./DataTable";

interface User {
  id: number;
  name: string;
  age: number;
}

const meta: Meta<typeof DataTable<User>> = {
  title: "Components/DataTable",
  component: DataTable<User>,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof DataTable<User>>;

const sampleData: User[] = [
  { id: 1, name: "Tanvi", age: 22 },
  { id: 2, name: "Aarav", age: 25 },
  { id: 3, name: "Meera", age: 21 },
];

const columns: { key: string; title: string; dataIndex: keyof User; sortable: boolean }[] = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "age", title: "Age", dataIndex: "age", sortable: true },
];

export const Default: Story = {
  args: {
    data: sampleData,
    columns: columns,
    selectable: true,
  },
};

export const Loading: Story = {
  args: {
    data: [],
    columns: columns,
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns: columns,
  },
};
