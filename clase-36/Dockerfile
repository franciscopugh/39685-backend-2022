# Establecer la imagen base
FROM node:18.16.0

#Variables de entorno
#ENV DB_URI = mongodbatlas

#Crear y establecer el directorio de mi contenedor

WORKDIR /clase-36

#Agrego argumentos para el .env, por defecto de desarrollo
ARG ENV_FILE = .env.development 

#Comando para ejecutar: docker build --build-arg ENV_FILE=.env.production -t test:production .
#Copio todos los archivos de src al directorio de trabajo

COPY src ./src
COPY package*.json ./
COPY $ENV_FILE ./

#Instalar dependencias

RUN npm install

# Puerto de app

EXPOSE 8080

#Comando para iniciar mi aplicacion 

CMD ["node", "src/index.js"]