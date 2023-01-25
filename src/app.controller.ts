import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { TokenService } from './app.Tokenservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  async getHello(): Promise<string> {
    return this.appService.getHello();
  }

}

@Controller()
export class Tokencontroller{
  constructor(private readonly tokenService:TokenService){}

  @Get('/balances/:address')
  async getBalances(@Param('address') address: string) {
    return await this.tokenService.getBalances(address);
  }


  /*@Get('/balances')
  async getBalances() {
    return await this.tokenService.getBalances();
  }*/

  
  @Get('/list-coins/:id')
  async getCoin(@Param('id') id: string) {
    return await this.tokenService.getCoinDetails(id);
  }

  @Get('/allcoins')
  async getallCoin() {
    return await this.tokenService.getallcoindetails();
  }





}
