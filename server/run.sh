#!/bin/bash

#docker run -i -t --rm -p 8080:8080 metleb1996/node-ecommerce-backend
#docker run -d --rm -p 8080:8080 metleb1996/node-ecommerce-backend
#docker stack deploy -c stack.yml backend
docker-compose down
docker-compose -f docker-compose.yml up --build &