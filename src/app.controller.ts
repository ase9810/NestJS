import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// Controller는 express의 router와 같은 역할을 한다
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Get은 Get방식, Post는 Post방식을 나타낸다
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // 데코레이터는 자신을 나타낼 함수와 붙어 있어야함
  // Controller의 함수명과 Service의 함수명이 달라도 동작하나 같도록 만드는게 일반적
  @Get('/hello')
  sayHello(): string {
    return this.appService.getHi();
  }
}
