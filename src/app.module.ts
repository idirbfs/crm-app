import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Profile, ProfileSchema } from './schemas/Profile.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:8081'),
    MongooseModule.forFeature([{ name: Profile.name, schema: ProfileSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
