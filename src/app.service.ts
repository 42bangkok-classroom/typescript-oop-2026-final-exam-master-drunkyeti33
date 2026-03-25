import { Injectable } from '@nestjs/common';
import { ApiResponse } from './interfaces/response.interface';
const hello: ApiResponse[] = [
  {success: boolean};
  {data:
    service: purchase-api, 
    version: 1.0.0
  };
  {message: 'Hello NestJS'};
];
@Injectable()
export class AppService {
  getHello(): string {
    return hello;
  }
}
