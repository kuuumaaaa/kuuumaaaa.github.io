FROM node:14.17.0
WORKDIR /usr/src/app

RUN npm install react-share --save
RUN npm install scss
RUN npm install sass