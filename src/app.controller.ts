import { Controller, Get, HttpCode, Param, Query } from '@nestjs/common';
import { query } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @HttpCode(201) //change status code
  @Get('/data/:id')
  getData(@Param() id: number) {
    console.log(id);
    return `succuss`;
  }

  @Get('/query')
  getDataQuery(@Query() query: Record<string, any>) {
    console.log(query);
    return `succuss`;
  }
}
