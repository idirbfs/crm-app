import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Render,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Profile } from './schemas/Profile.schema';
import { UUID } from 'crypto';
import { CreateProfileDto } from './dto/create-profile.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  async getAllProfiles(): Promise<Profile[]> {
    return await this.appService.getProfiles();
  }

  @Get(':id')
  async getProfileById(@Param('id') id: UUID): Promise<Profile> {
    return await this.appService.getProfileById(id);
  }

  @Post()
  async createProfile(@Body() createProfileDto: CreateProfileDto) {
    return await this.appService.createProfile(createProfileDto);
  }

  @Put(':id')
  async updateProfile(
    @Param('id') id: UUID,
    @Body() createProfileDto: CreateProfileDto,
  ) {
    return await this.appService.updateProfile(id, createProfileDto);
  }

  @Delete(':id')
  async deleteProfile(@Param('id') id: UUID) {
    return await this.appService.deleteProfile(id);
  }
}
//get profile
//get ALL profiles
//post profile
//update profile
//delete profile
