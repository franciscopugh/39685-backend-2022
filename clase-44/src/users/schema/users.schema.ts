import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose' //Tipo
import { HydratedDocument } from 'mongoose' //Funcionabilidades

export type UserDocument = HydratedDocument<User> //Le doy las caracteristicas propias de mongoose a esta clase

@Schema()
export class User {
    @Prop({ required: true }) //Definiciones de propiedades van dentro de @Prop
    first_name: string
    @Prop({ required: true })
    last_name: string
    @Prop({ required: true, unique: true })
    email: string
    @Prop({ required: true })
    password: string
}

export const UserSchema = SchemaFactory.createForClass(User) //Defino mi modelo 