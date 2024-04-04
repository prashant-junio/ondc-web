import { fn } from '@storybook/test';
import { StoreListItem } from './Store-list-item';


export default {
  title: 'Example/StoreListItem',
  component: StoreListItem,
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
  },
};

