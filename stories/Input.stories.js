import { fn } from '@storybook/test';
import { Input } from './INput';


export default {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
};

export const InputComponent = {
  args: {
    placeholder: "Enter your nearest landmark",
    // type: "MOBILE_NUMBER",
    label: "Mobile Number"
  },
};

