import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  postHello(@Req() request: Request): string {
    // console.log(request.headers['authorization']);
    // console.log(request['user']);
    console.log(request.body);
    return this.appService.getHello();
  }
}
