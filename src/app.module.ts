import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { LoginController } from './login/login.controller';
import { TestMiddleware } from './test.middleware';
import { TestController } from './test/test.controller';

@Module({
  imports: [AuthModule],
  controllers: [AppController, LoginController, TestController],
  providers: [AppService],
})
export class AppModule{}
//  implements NestModule{
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(TestMiddleware,).forRoutes('*')
//   }
// }