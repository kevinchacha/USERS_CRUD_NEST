import {
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    Max,
    MaxLength,
    MinLength,
  } from 'class-validator';
  
  export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    readonly nombre: string;
  
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(12)
    readonly password: string;
  
    @IsNotEmpty()
    @IsNumber()
    @Max(110)
    readonly edad: number;
  
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;
  
    @IsOptional()
    @IsString()
    readonly celular?: string;
  
  }
  
  