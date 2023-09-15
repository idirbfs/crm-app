import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Profile, ProfileSchema } from './schemas/Profile.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://belfaresidir:belfaresidir@cluster0.umecbmu.mongodb.net/?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([{ name: Profile.name, schema: ProfileSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
