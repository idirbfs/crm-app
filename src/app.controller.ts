import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
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
  root() {
    return { message: 'Hello world!' };
  }

  @Get('/profiles') // Define the route where you want to render the profiles
  @Render('profiles') // Render the profile-list.hbs template
  async showProfiles() {
    const profiles = await this.appService.getProfiles();
    return { profiles };
  }

  @Get('/profile/:id')
  @Render('profile')
  async showProfileById(@Param('id') id: UUID): Promise<Profile> {
    try {
      const profile = await this.appService.getProfileById(id);
      return { ...profile };
    } catch (error) {
      console.error(error);
      // Handle the error gracefully, perhaps by rendering an error page
      throw new HttpException('Profile not found', HttpStatus.NOT_FOUND);
    }
  }

  @Post('/profile')
  async createProfile(@Body() createProfileDto: CreateProfileDto) {
    return await this.appService.createProfile(createProfileDto);
  }

  @Get('/profile/:id/edit') // Define the route where you want to render the profiles
  @Render('edit-profile') // Render the profile-list.hbs template
  async editProfile(@Param('id') id: UUID) {
    const profile = await this.appService.getProfileById(id);
    return { profile };
  }

  @Post('profile/:id/edit')
  async updateProfile(
    @Param('id') id: UUID,
    @Body() createProfileDto: CreateProfileDto,
  ) {
    return await this.appService.updateProfile(id, createProfileDto);
  }

  @Post('profile/:id/delete')
  async deleteProfile(@Param('id') id: UUID) {
    return await this.appService.deleteProfile(id);
  }
}
//get profile
//get ALL profiles
//post profile
//update profile
//delete profile
