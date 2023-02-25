import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('user')
  createUser(@Body() body: any) {
    console.log('@@ body');
    console.log(body);
    return this.appService.createUser(body);
  }

  @Post('post')
  createPost(@Body() body) {
    return this.appService.createPost(body);
  }
}
