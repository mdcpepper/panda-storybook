import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../components/buttons/Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    backgroundColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: ({ label, ...args}) => (
      <Button type="primary" {...args}>{label}</Button>
  ),
  args: {
    label: 'Button'
  }
};

export const Secondary: Story = {
  render: ({ label, ...args}) => (
    <Button type="secondary" {...args}>{label}</Button>
  ),
  args: {
    label: 'Button'
  }
};

export const Small: Story = {
  render: ({ label, ...args}) => (
    <Button size="small" {...args}>{label}</Button>
  ),
  args: {
    type: 'primary',
    label: 'Button'
  }
};

export const Medium: Story = {
  render: ({ label, ...args}) => (
    <Button size="medium" {...args}>{label}</Button>
  ),
  args: {
    type: 'primary',
    label: 'Button'
  }
};

export const Large: Story = {
  render: ({ label, ...args}) => (
    <Button size="large" {...args}>{label}</Button>
  ),
  args: {
    type: 'primary',
    label: 'Button'
  }
};
