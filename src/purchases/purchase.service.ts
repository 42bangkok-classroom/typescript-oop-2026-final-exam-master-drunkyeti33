import { Injectable } from '@nestjs/common';
import { Purchase } from './purchase.interface';
import { readFileSync } from 'fs';
import { join } from 'path';

const filePath = join(__dirname, '../../data/purchases.json');

@Injectable()
export class PurchaseService {
  findAll(): Purchase[] {
    const readPurchase = readFileSync(filePath, 'utf-8');
    const purData = JSON.parse(readPurchase) as Purchase[];
    return {
      success: true,
      data: purData,
      message: 'Fetched purchases successfully',
    };
  }
}
