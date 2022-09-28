import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProductCard from './product-card';

export default {
  title: 'Component/ProductCard',
  component: ProductCard,
  argTypes : {
    size: {
      control: {
        type: 'select',
        options: ['small', 'large'],
      },
    },
    type: {
      control: {
        type: 'select',
        options: ['disabled', 'normal'],
      },
    },
  }
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => <ProductCard  {...args}/>;

export const Large = Template.bind({});
export const Small = Template.bind({});

Large.args = {
  title: 'Nike Phantom GT2 Academy TF Termurah di Indonesia',
  src: 'https://freepngimg.com/thumb/categories/627.png',
  price: 3000000,
  discount: 30,
  discountPrice:1000000,
  type: 'disabled',
  size: 'large'
};

Small.args = {
  title: 'Nike Phantom GT2 Academy TF Termurah di Indonesia',
  src: 'https://freepngimg.com/thumb/categories/627.png',
  price: 3000000,
  discount: 30,
  discountPrice:1000000,
  type: 'normal',
  size: 'small'
};