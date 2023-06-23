import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose'
import { User, UserSchema } from './schema/users.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{ //Defino mi modelo de datos para este modulo
      name: User.name,
      schema: UserSchema
    }])
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule { }
