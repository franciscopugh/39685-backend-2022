import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose' //Modulo para poder conectar mi BDD
import { AppService } from './app.service';
import { RequestMethod } from '@nestjs/common/enums'
import { UsersModule } from './users/users.module';
import ExampleMiddleware from './middlewares/exampleMiddleware';

@Module({
  //Importaciones de mis modulos
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],                          //CONSULTAR UNA VARIABLE DE ENTORNO
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>("MONGO_ATLAS_URL")
      })
    }),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule { //Aqui implemento los middlewares 
  //Configuracion de todos los middlewares
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ExampleMiddleware).forRoutes({ path: "*", method: RequestMethod.ALL }) //Aqui implemento las rutas de aplicacion y los metodos posibles para mi middleware
  }
}
