import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProfileModule } from './profile/profile.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MatchGateway } from './match/match.gateway';
import { MatchService } from './match/match.service';
import { User } from './database/tables/User';
import { Game } from './database/tables/Game';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './tmp.sqlite',
      entities: [User, Game],
      synchronize: true,
      extra: {
        busyTimeout: 5000,
      },
    }),
    AuthModule,
    UsersModule,
    ProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService, MatchGateway, MatchService],
})
export class AppModule {}
