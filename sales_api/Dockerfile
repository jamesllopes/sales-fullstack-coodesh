FROM node:alpine

WORKDIR /usr/app
COPY package*.json ./
RUN yarn install
COPY . . 
EXPOSE 3333

COPY ["init.sh", "/usr/app/init.sh"]
RUN ["chmod", "+x", "/usr/app/init.sh"]
CMD ["yarn", "dev", "/usr/app/init.sh"]