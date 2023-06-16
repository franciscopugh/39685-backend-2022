import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  users: Array<User> //Defino la coleccion de mi clase -> Un array de Users

  constructor() {
    this.users = []
  }

  create(createUserDto: CreateUserDto) {
    console.log(createUserDto)
    this.users.push(createUserDto)
    return 'This action adds a new user';
  }

  findAll() {
    return this.users
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
