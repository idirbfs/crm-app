import { HttpCode, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist/common/mongoose.decorators';
import { Profile } from './schemas/Profile.schema';
import { Model } from 'mongoose';
import { UUID } from 'crypto';
import { CreateProfileDto } from './dto/create-profile.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Profile.name) private readonly profileModel: Model<Profile>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  //get profile

  async getProfileById(id: UUID): Promise<Profile> {
    return await this.profileModel.findOne({ _id: id }).exec();
  }
  //get ALL profiles

  async getProfiles(): Promise<Profile[]> {
    return await this.profileModel.find().exec();
  }
  //post profile

  async createProfile(createProfileDto: CreateProfileDto) {
    await this.profileModel.create(createProfileDto);
    return HttpCode[201];
  }
  //update profile

  async updateProfile(id: UUID, createProfileDto: CreateProfileDto) {
    await this.profileModel.updateOne({ _id: id }, createProfileDto);
  }
  //delete profile
  async deleteProfile(id: UUID) {
    await this.profileModel.deleteOne({ _id: id });
    return HttpCode[200];
  }
}
