import { Controller, Post, Res, HttpStatus, Body, Get, Param, NotFoundException, Delete, Query, Put } from '@nestjs/common';
import { UsersService } from './users.service';

import { CreateUserDto} from "./dto/users.dto"

import { LoginAuthDto } from './dto/login-auth.dto';
@Controller('user')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @Get('/')
    async getUsers(@Res() res) {
        const users = await this.usersService.getUsers();
        return res.status(HttpStatus.OK).json(users);
    }

    @Post('/register')
    async createUser(@Res() res, @Body() createUserDto: CreateUserDto) {
        const user = await this.usersService.createUser(createUserDto);
        return res.status(HttpStatus.OK).json({
            message: 'Usuario creado correctamente',
            user
        });
    }
    @Post('/login')
    async LoginUser(@Res() res,@Body() loginAuthDto: LoginAuthDto) {
        const login= await this.usersService.login(loginAuthDto);
        return res.status(HttpStatus.OK).json({
            message: 'Usuario Logueado correctamente',
            login
        });
    }

    @Delete('/delete')
    async deleteUser(@Res() res, @Query('userID') userID) {
        const userDeleted = await this.usersService.deleteUser(userID);
        if (!userDeleted) throw new NotFoundException('Usuario no existente');
        return res.status(HttpStatus.OK).json({
            message: 'Usuario eliminado correctamente',
            userDeleted
        });
    }

    @Put('/update')
    async updateUser(@Res() res, @Body() createUserDto: CreateUserDto, @Query('userID') userID) {
        const updatedUser = await this.usersService.updateUser(userID, createUserDto);
        if (!updatedUser) throw new NotFoundException('Usuario no existente');
        return res.status(HttpStatus.OK).json({
            message: 'Usuario actualizado correctamente',
            updatedUser 
        });
    }

}