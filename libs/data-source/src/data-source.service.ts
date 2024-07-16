import { Injectable } from '@nestjs/common';

@Injectable()
export class DataSourceService {
  getData(): { message: string } {
    return { message: 'Hello from data source lib' };
  }
}
