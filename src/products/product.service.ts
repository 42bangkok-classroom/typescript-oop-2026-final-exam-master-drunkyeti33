import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.interface';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const filePath = join(__dirname, '../../data/products.json');

@Injectable()
export class ProductService {
  findAll(): Product[] {
    const readProduct = readFileSync(filePath, 'utf-8');
    const proData = JSON.parse(readProduct) as Product[];
    return {
      success: true,
      data: proData,
      message: 'Fetched products successfully',
    };
  }
}
