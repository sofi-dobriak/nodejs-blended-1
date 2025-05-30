import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products';
import { Product } from '../types/product';

const getUniqueCategories = async (): Promise<void> => {
  try {
    const data: string = await fs.readFile(PATH_DB, 'utf-8');
    const products: Product[] = JSON.parse(data);

    const categoriesArray: string[] = products.map(
      (product) => product.category,
    );

    const uniqueCategories: string[] = Array.from(new Set(categoriesArray));

    console.log(`List of the unique categories:`);
    console.table(uniqueCategories);
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
  }
};

getUniqueCategories();
