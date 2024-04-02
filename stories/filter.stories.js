import { fn } from "@storybook/test";
import { Filter } from "./filter";

export default {
  title: "Example/Filter",
  component: Filter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
};

export const FilterComponent = {
  args: {
    filters: [
      {
        id: 1,
        type: "CHECKBOX",
        name: "Brand",
        options: [
          { name: "Doodhvale", id: 1 },
          { name: "Delisio", id: 2 },
          { name: "BMW", id: 3 },
          { name: "TATA", id: 4 },
          { name: "NETFLIX", id: 5 },
          { name: "KFC", id: 6 },
        ],
      },
      {
        id: 2,
        type: "RADIO",
        name: "Type",
        options: [
          { name: "Leafy Vegetables", id: 1 },
          { name: "Flower Vegetables", id: 2 },
          { name: "Root Vegetables & Tubers", id: 3 },
        ],
      },
    ],
  },
};
