import { faker } from '@faker-js/faker';
import { Product } from '../types/product';

export const createFakeProduct = (): Product => ({
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  category: faker.commerce.department(),
  description: faker.commerce.productDescription(),
});
