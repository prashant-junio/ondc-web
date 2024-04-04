import { fn } from "@storybook/test";
import { Search } from "./search";

export default {
  title: "Example/Search",
  component: Search,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
};

export const OutletListCardComponent = {
  args: {
    filters: [],
  },
};
