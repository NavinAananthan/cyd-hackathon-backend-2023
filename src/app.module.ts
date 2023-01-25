import { SharedModule } from './shared';
import { Module } from '@nestjs/common';
import { AppController,Tokencontroller } from './app.controller';
import { AppService } from './app.service';
import { TokenService } from './app.Tokenservices';

@Module({
  imports: [SharedModule],
  controllers: [AppController,Tokencontroller],
  providers: [AppService,TokenService],
})
export class AppModule {}
