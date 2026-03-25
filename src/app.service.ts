import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '{"data": {"service": "purchase-api", "version": "1.0.0"}, "message": "Hello NestJS", "success": true}';
  }
}
