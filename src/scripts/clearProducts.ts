import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products';
import { Product } from '../types/product';

const clearProducts = async (): Promise<void> => {
  try {
    const data: string = await fs.readFile(PATH_DB, 'utf-8');
    const products: Product[] = JSON.parse(data);

    if (!products.length) {
      console.log('No products');
      return;
    }

    await fs.writeFile(PATH_DB, JSON.stringify([]), 'utf-8');
    console.log('All products have been removed');
  } catch (error: unknown) {
    console.log(error instanceof Error ? error.message : String(error));
  }
};

clearProducts();
