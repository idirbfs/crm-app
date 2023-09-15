import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { Profile } from './schemas/Profile.schema';
import { UUID } from 'crypto';
import { CreateProfileDto } from './dto/create-profile.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  async getAllProfiles(): Promise<Profile[]> {
    return await this.appService.getProfiles();
  }

  @Get()
  async getProfileById(id: UUID): Promise<Profile> {
    return await this.appService.getProfileById(id);
  }

  @Post()
  async createProfile(@Body() createProfileDto: CreateProfileDto) {
    return await this.appService.createProfile(createProfileDto);
  }

  @Put()
  async updateProfile(id: UUID, @Body() createProfileDto: CreateProfileDto) {
    return await this.appService.updateProfile(id, createProfileDto);
  }

  @Delete()
  async deleteProfile(id: UUID) {
    return await this.appService.deleteProfile(id);
  }
}
//get profile
//get ALL profiles
//post profile
//update profile
//delete profile
