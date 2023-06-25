import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/new')
  newEndpoint(): string {
    return 'I am a new endpoint';
  }

  @Get('/route')
  hello(): string {
    return 'with /sas/';
  }
}
