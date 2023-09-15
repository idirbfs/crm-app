import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateProfileDto {
  @IsNotEmpty()
  @IsString()
  fisrtName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  phone: string;
}
