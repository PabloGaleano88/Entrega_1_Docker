# Usamos una imagen oficial de Node con Alpine para que pese menos
FROM node:alpine3.19

# Configuramos el directorio de trabajo con sus respectivos permisos
RUN mkdir -p /home/node/app && chown -R node:node /home/node/app

# Configuramos el directorio de trabajo
WORKDIR /home/node/app

# Copiado de packetjson como root
COPY package*.json ./

# Instalamos las dependencias como root para evitar problemas
RUN npm install

# Copiamos el codigo junto con el resto de los archivos con el usuario node
COPY --chown=node:node . .

# Cambiamos de usuario a node
USER node

# Expose del puerto 8010
EXPOSE 8010

# Corremos la aplicación
CMD [ "node", "index.js" ]
