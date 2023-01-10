import {
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    Length,
    Max,
    MaxLength,
  } from 'class-validator';
  
  export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    readonly nombre: string;
  
    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    readonly apellido: string;
  
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
  
  