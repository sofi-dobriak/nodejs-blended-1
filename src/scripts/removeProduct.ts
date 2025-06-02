import fs from 'node:fs/promises';
import { Product } from '../types/product';
import { PATH_DB } from '../constants/products';

const removeProduct = async (name: string): Promise<void> => {
  try {
    const data: string = await fs.readFile(PATH_DB, 'utf-8');
    const products: Product[] = JSON.parse(data);

    const isProductName: boolean = products.some(
      (product) => product.name === name,
    );

    if (!isProductName) {
      return console.log(`No product with name "${name}"`);
    }

    const updateProducts: Product[] = products.filter(
      (product) => product.name && product.name !== name,
    );

    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updateProducts, null, 2),
      'utf-8',
    );

    console.log(`The product "${name}" has been removed`);
  } catch (error: unknown) {
    console.log(error instanceof Error ? error.message : String(error));
  }
};

removeProduct('Sleek Granite Shoes');
