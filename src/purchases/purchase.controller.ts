import { Controller, Get } from '@nestjs/common';
import { PurchaseService } from './purchase.service';

@Controller()
export class PurchaseController {
  constructor(private readonly PurchaseService: PurchaseService) {}

  @Get()
  getHello(): void {
    console.log(this.PurchaseService.findAll());
  }
}
