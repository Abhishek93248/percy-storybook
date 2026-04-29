import type { Meta, StoryObj } from '@storybook/angular';

import { AppComponent } from './app.component';

const meta: Meta<AppComponent> = {
  title: 'Pages/Landing',
  component: AppComponent,
};

export default meta;
type Story = StoryObj<AppComponent>;

export const LandingPage: Story = {
  parameters: {
    percy: {
      name: 'Untitled',
    },
  },
};
