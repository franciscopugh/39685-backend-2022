import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose' //Poder utilizar el model de mongoose
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schema/users.schema'
import { Model } from 'mongoose'

@Injectable()
export class UsersService {
  //Genero un atributo que sera mi modelo para utilizar en mis metodos
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

  create(createUserDto: CreateUserDto) {
    return this.userModel.create(createUserDto)
  }

  findAll() {
    return this.userModel.find()
  }

  findOne(id: string) {
    return this.userModel.findById(id)
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, updateUserDto)
  }

  remove(id: string) {
    return this.userModel.findByIdAndDelete(id)
  }
}
