import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(append: boolean = false): string {
    let result = 'Hello World!';
    if (append) {
      result += ' and this & that ....';
    }
    return result;
  }
}
