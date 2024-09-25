import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './logger/logger.middleware';
import { MorganMiddleware } from '@nest-middlewares/morgan';
import { ChienModule } from './chien/chien.module';
import { MongooseModule } from '@nestjs/mongoose';
import { OwnerModule } from './owner/owner.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/zoomanagement'),
    CatsModule,
    ChienModule,
    OwnerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    MorganMiddleware.configure('dev');
    consumer.apply(MorganMiddleware, LoggerMiddleware).forRoutes('*');
  }
}
