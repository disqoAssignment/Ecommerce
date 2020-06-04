**JEE Project - eCommerce**
**IDE**
	IntellijIDEA
	
	
**Main Dependencies**
	Spring Boot
	Spring Security
	Spring Data JPA
	Spring Cloud Netflix Eureka server
	Spring Cloud Netflix Eureka client
	Hibernate
	Angular 9
	MySQL-connector
	
**Elastic Search**
Download elasticsearch version 6.4.3 (link https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-6.4.3.zip)
Goto installation folder and open conf/elasticsearch.yml file
Set cluster.name=ecommerce
data.path=/elastic-data
Go to /bin and click on elasticsearch.bat file

**Eureka server Discovery**
URL: http://localhost:8761

**Swagger**
cart-service 
URL: http://localhost:8087/swagger-ui.html
inventory-service 
URL: http://localhost:8084/swagger-ui.html
order-service 
URL: http://localhost:8085/swagger-ui.html
repository-service 
URL: http://localhost:8082/swagger-ui.html
authentication service 
URL: http://localhost:8086/swagger-ui.html

**WIP  Function**
	* Login with spring security jwt
	* API Product listing 
	* API Product details
	* API Cart System with cart item listing /add /remove items to cart
	* API Order item listing /add /remove items customer orders
	
**APIS**
**Cart service**
http://repository-service/api/repo/cart
http://repository-service/api/repo/cart/{customerId}
**Order service**
http://repository-service/api/repo/order
http://repository-service/api/repo/order/all/{customerId}
http://repository-service/api/repo/order/{orderId}
**Repository service**
http://repository-service/api/repo/product
http://repository-service/api/repo/product/all
http://repository-service/api/repo/product/item/{productId}
**Authentication service** 
http://localhost:8086/login

**AWS USER AUTHENTICATION URL**
http://3.21.207.187/login
username: admin
password:admin

**Roles**
	* ROLE_USER - user already confirm email 
	* ROLE_ADMIN - full authority to controller the whole web

**DOCKERIZATION**
docker-compose up -d
docker ps 
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                               NAMES
2849a8020fe5        nginx               "/docker-entrypoint.…"   7 minutes ago       Up 7 minutes        0.0.0.0:80->80/tcp                  docker_web_1
86d93aeccd95        docker_ecommerce    "java -jar user-auth…"   2 hours ago         Up 7 minutes        0.0.0.0:8080->8086/tcp              docker_ecommerce_1
1504c6718fc3        mysql:8.0.18        "docker-entrypoint.s…"   2 hours ago         Up 7 minutes        33060/tcp, 0.0.0.0:3307->3306/tcp   docker_mysql-db_1

**DB Schemas**
Schema name :user_authentication 
SQL scripts {PROJECT_BASE_PATH}/user-authentication-service/sql
Schema name : ecommerce 
SQL scripts {PROJECT_BASE_PATH}/repository-service/sql

	 