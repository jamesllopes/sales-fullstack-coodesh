FROM node:alpine

WORKDIR /usr/app
COPY package*.json ./
RUN yarn install
COPY init.sh /usr/app/
COPY . . 
EXPOSE 3333


# RUN ["chmod", "+x", "/usr/app/init.sh"]
CMD [ "/usr/app/init.sh" ]

# CMD ["powershell", "-Command", "Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process -Force; .\\init.sh"]
# CMD ["powershell", "-Command", "Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process -Force; .\\init.sh"]

# CMD ["cmd", "/C", "init.sh"]

