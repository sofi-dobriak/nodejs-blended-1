import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products';
import { Product } from '../types/product';

// interface GroupByCategory {
//   [key: string]: string[];
// }

const groupProductsByCategories = async (): Promise<void> => {
  try {
    const data: string = await fs.readFile(PATH_DB, 'utf-8');
    const products: Product[] = JSON.parse(data);

    const groupByCategory: Record<string, string[]> = {};

    for (const product of products) {
      const { category, name } = product;

      if (!groupByCategory[category]) {
        groupByCategory[category] = [];
      }

      groupByCategory[category].push(name);

      console.log('Grouped products by category:');
      console.log(groupByCategory);
    }
  } catch (error: unknown) {
    console.log(error instanceof Error ? error.message : String(error));
  }
};

groupProductsByCategories();
