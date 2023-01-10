import { HttpException, Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { User } from './interfaces/users.interface';
import { CreateUserDto } from './dto/users.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import {hash,compare} from 'bcrypt'
@Injectable()
export class UsersService {

    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    // Get all users
    async getUsers(): Promise<User[]> {
        const users = await this.userModel.find();
        return users;
    }
    // Post a user(Register)
    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const {password} = createUserDto
        const planToHash =await hash(password,10)
        createUserDto = {...createUserDto,password:planToHash}
        return this.userModel.create(createUserDto)
    }
    // Login for User
    async login(loginAuthDto: LoginAuthDto) {
        const {email,password} = loginAuthDto;
        const findUser = await this.userModel.findOne({email})
        if(!findUser){
            throw new  HttpException('Usuario no encontrado',404);
        } 
        const validatePassword = await compare(password,findUser.password);
        if(!validatePassword) {
            throw new  HttpException('Password Incorrecto',403);
        }
        return findUser
    }
    

    // Delete User
    async deleteUser(userID: any): Promise<User> {
        const deletedUser = await this.userModel.findOneAndDelete(userID);
        return deletedUser;
    }

    // Put a User
    async updateUser(userID: string, createUserDto: CreateUserDto): Promise<User> {
        const updatedUser = await this.userModel
                            .findByIdAndUpdate(userID, createUserDto, {new: true});
        return updatedUser;
    }

}
