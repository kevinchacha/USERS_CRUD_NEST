import {
    IsEmail,
    IsNotEmpty,
    MaxLength,
    MinLength,
  } from 'class-validator';
  
  export class LoginAuthDto {

    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(12)
    readonly password: string;
  
  }
  
  