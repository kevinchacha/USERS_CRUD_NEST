import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { User } from './interfaces/users.interface';
import { CreateUserDto } from './dto/users.dto';

@Injectable()
export class UsersService {

    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

   // Get all users
    async getUsers(): Promise<User[]> {
        const users = await this.userModel.find();
        return users;
    }
    // Post a user
    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const newUser = new this.userModel(createUserDto);
        return newUser.save();
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
