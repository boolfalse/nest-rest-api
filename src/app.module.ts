import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemController } from './item/item.controller';
import { ItemService } from './item/item.service';
import { ItemModule } from './item/item.module';
import { MongooseModule} from "@nestjs/mongoose";
import { ConfigModule } from '@nestjs/config'; // TODO: create separated config module

@Module({
  imports: [ItemModule, ConfigModule.forRoot(), MongooseModule.forRoot(process.env.MONGO_URI)],
  controllers: [AppController, ItemController],
  providers: [AppService, ItemService],
})
export class AppModule {}
