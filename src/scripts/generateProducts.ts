import { PATH_DB } from '../constants/products';

import fs from 'node:fs/promises';
import { createFakeProduct } from '../utils/createFakeProducts';
import { Product } from '../types/product';

const generateProducts = async (number: number): Promise<void> => {
  try {
    const data: string = await fs.readFile(PATH_DB, 'utf-8');
    const products: Product[] = JSON.parse(data);

    const newProducts: Product[] = Array.from({ length: number }, () =>
      createFakeProduct(),
    );

    products.push(...newProducts);

    await fs.writeFile(PATH_DB, JSON.stringify(products, null, 2), 'utf-8');
    console.log(`${number} products added.`);
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
  }
};

generateProducts(3);
