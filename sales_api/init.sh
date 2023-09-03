#!/bin/sh

# Espere até que o banco de dados MySQL esteja pronto (pode levar alguns segundos após a inicialização)
until nc -z -v -w30 salesdb 3306
do
  echo "Aguardando que o MySQL esteja disponível..."
  sleep 1
done
docker exec -it sales-app sh
# Execute as migrações do banco de dados
npx sequelize-cli db:migrate

# Inicialize seu aplicativo Node.js
exec "$@"
