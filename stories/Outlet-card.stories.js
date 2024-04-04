import { fn } from "@storybook/test";
import { OutletCard } from "./outlet-card";

export default {
  title: "Example/OutletCard",
  component: OutletCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
};

export const OutletCardComponent = {
  args: {},
};
