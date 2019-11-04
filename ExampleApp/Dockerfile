FROM node:10
MAINTAINER Joon <jk1094@naver.com>

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start","&"]