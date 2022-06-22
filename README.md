# orm_node_mysql

## Dependencies

* Sequelize
* Mysql 

## Dockernize 

```bash
export DB_NAME=alura && \
docker run --name=$DB_NAME -d -p 3306:3306 \
-e MYSQL_ROOT_PASSWORD=sa \
-e MYSQL_USER=sa -e MYSQL_PASSWORD=sa \
-e MYSQL_DATABASE=$DB_NAME mysql:5.6
```