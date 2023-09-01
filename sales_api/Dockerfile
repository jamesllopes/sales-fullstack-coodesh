# FROM node:alpine

# WORKDIR /usr/app
# COPY package*.json ./
# RUN yarn install
# COPY . . 
# EXPOSE 3333

# RUN docker exec -it sales-app sh
# CMD ["/usr/app/init.sh"]


FROM node:alpine

WORKDIR /usr/app
COPY package*.json ./
RUN yarn install
COPY . . 
EXPOSE 3333

# Copie o arquivo de inicialização
COPY init.sh /usr/app/init.sh

# Dê permissão de execução ao arquivo de inicialização
RUN chmod +x /usr/app/init.sh

# Use o arquivo de inicialização como o comando principal
CMD ["yarn", "dev", "/usr/app/init.sh"]



