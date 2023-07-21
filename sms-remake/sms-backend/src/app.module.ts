import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthGuard } from './auth.guard';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: 'APP_GUARD', useClass: AuthGuard },
    JwtService,
  ],
})
export class AppModule {}
