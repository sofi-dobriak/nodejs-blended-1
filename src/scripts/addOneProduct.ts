import { PATH_DB } from '../constants/products';
import fs from 'node:fs/promises';
import { createFakeProduct } from '../utils/createFakeProducts';
import { Product } from '../types/product';

const addOneProduct = async (): Promise<Product[]> => {
  try {
    const data: string = await fs.readFile(PATH_DB, 'utf-8');
    const products: Product[] = JSON.parse(data);

    const newProduct: Product = createFakeProduct();

    products.push(newProduct);

    await fs.writeFile(PATH_DB, JSON.stringify(products, null, 2), 'utf-8');

    console.log('Added one product');
    return products;
  } catch (error: unknown) {
    console.log(error instanceof Error ? error.message : String(error));
    return [];
  }
};

addOneProduct();
