import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    console.log(process.env.MESSAGE);
    return { message: 'Hello API' };
  }
}
