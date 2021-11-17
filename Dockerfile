FROM node:16

WORKDIR /hom/blackraider/Proyectos/node/SOfertas

COPY package*.json ./

RUN npm install

COPY ./dist .

EXPOSE 8080
CMD [ "node", "index.js" ]
