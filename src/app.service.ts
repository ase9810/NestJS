import { Injectable } from '@nestjs/common';

// Service는 Controller에서 실행되는 일반적인 function을 가지는 부분이다.
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Nest';
  }
  getHi(): string {
    return 'Hi Nest';
  }
}
