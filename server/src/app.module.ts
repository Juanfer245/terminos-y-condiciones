import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { MongooseConnectionModule } from './modules/mongo-conecction/mongo-conecction.module';
import { ProductModule } from './product/product.module';
import { UserService } from './login/user.service';

@Module({
  imports: [
    MongooseConnectionModule
    /*.forRoot('mongodb+srv://Erika:2123@product-nest.me6bnsb.mongodb.net/test', {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true
    }),
    ProductModule*/
  ],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {}
