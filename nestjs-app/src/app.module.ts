import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { QueryModule } from './query/query.module';
import { User } from './user/user.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'monitoring',
      entities: [User],
      synchronize: true,
      logging: true,
    }),
    UserModule,
    QueryModule,
  ],
})
export class AppModule {}

