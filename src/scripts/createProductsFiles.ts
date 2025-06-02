import path from 'node:path';
import fs from 'node:fs/promises';
import { PATH_DB, PATH_FILES_DIR } from '../constants/products';
import { Product } from '../types/product';

const toKebabCase = (str: string): string =>
  str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '');

const createProductsFiles = async (): Promise<void> => {
  try {
    const data: string = await fs.readFile(PATH_DB, 'utf-8');
    const products: Product[] = JSON.parse(data);

    for (const product of products) {
      const fileName = `${toKebabCase(product.name)}.json`;
      const filePath = path.join(PATH_FILES_DIR, fileName);

      await fs.writeFile(filePath, JSON.stringify(product, null, 2), 'utf-8');
    }

    console.log(`✅ Створено ${products.length} файлів у папці files`);
  } catch (error: unknown) {
    console.log(error instanceof Error ? error.message : String(error));
  }
};

createProductsFiles();
