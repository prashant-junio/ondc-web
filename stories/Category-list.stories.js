import { fn } from "@storybook/test";
import { CategoryList } from "./Categories-list";

export default {
  title: "Example/CategoryList",
  component: CategoryList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
};

export const CategoryListComponent = {
  args: {
    list: [
      { label: "Grocery and Masalas" },
      { label: "Meat, Fish and Eggs" },
      { label: "Fruits and vegetables" },
      { label: "Dry fruits and nuts" },
    ],
  },
};
