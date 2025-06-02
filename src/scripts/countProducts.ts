import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products';
import { Product } from '../types/product';

const countProducts = async (): Promise<number> => {
  try {
    const data: string = await fs.readFile(PATH_DB, 'utf-8');
    const products: Product[] = JSON.parse(data);

    const countProduct: number = products.length;
    console.log(`Number of products in the database ${countProduct}`);

    return countProduct;
  } catch (error: unknown) {
    console.log(error instanceof Error ? error.message : String(error));
    return 0;
  }
};

countProducts();
