import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Demo: ComponentStory<typeof Button> = (args) => {
  return <Button {...args}>{args.children}</Button>;
};
Demo.argTypes = {
  backgroundColor: { control: 'color' },
  type: { control: 'select', defaultValue: 'primary' },
  children: {
    defaultValue: 'click me',
    type: { name: 'string', required: true, summary: 'React.ReactNode' },
  },
};
