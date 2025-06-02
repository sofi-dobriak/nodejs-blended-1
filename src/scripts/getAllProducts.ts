import fs from 'node:fs/promises';
import { Product } from '../types/product';
import { PATH_DB } from '../constants/products';

const getAllProducts = async (): Promise<Product[]> => {
  try {
    const data: string = await fs.readFile(PATH_DB, 'utf-8');
    const products: Product[] = JSON.parse(data);

    console.log(products);

    return products;
  } catch (error: unknown) {
    console.log(error instanceof Error ? error.message : String(error));
    return [];
  }
};

getAllProducts();
