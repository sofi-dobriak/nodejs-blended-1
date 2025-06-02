import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products';
import { Product } from '../types/product';

const modifyProducts = async (): Promise<Product[]> => {
  try {
    const data: string = await fs.readFile(PATH_DB, 'utf-8');

    const products: Product[] = JSON.parse(data);

    const modifyProducts: Product[] = products.map((product) => {
      const { description, ...rest } = product;
      return rest;
    });

    await fs.writeFile(
      PATH_DB,
      JSON.stringify(modifyProducts, null, 2),
      'utf-8',
    );

    console.log('Description field removed');

    return modifyProducts;
  } catch (error: unknown) {
    console.error(error instanceof Error ? error.message : String(error));
    return [];
  }
};

modifyProducts();
