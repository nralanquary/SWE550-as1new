FROM node:14-alpine

#RUN mkdir -p /srv/app/client
WORKDIR '/app'

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start"]