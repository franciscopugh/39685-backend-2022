# Establecer la imagen base
FROM node:18.16.0

#Crear y establecer el directorio de mi contenedor

WORKDIR /clase-36

#Copio todos los archivos de src al directorio de trabajo

COPY src ./src
COPY package*.json ./

#Instalar dependencias

RUN npm install

# Puerto de app

EXPOSE 8080

#Comando para iniciar mi aplicacion 

CMD ["node", "src/index.js"]