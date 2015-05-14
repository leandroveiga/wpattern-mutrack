# wpattern-mutrack
<b>Under development.<b/>

Project using to track packages (correios, fedex, ...). The project are using REST (back-end) and AngularJS (front-end).

* Requeriments

The project can be used in any system, but the follow description is based on Ubuntu.

Firt is recommend: $ sudo apt-get update

Git
JDK 1.8
Maven 3.0+ (can be installed with the command: $ sudo apt-get install maven)

* Configuration

Create the database using the script "wpattern-mutrack/wpattern-mutrack-all/project_files/database/database_create.sql".
Configure properties used by the database "wpattern-mutrack/wpattern-mutrack-all/wpattern-mutrack-data/src/main/resources/data.properties".
After that execute these follow commands:

$ git clone https://github.com/bbranquinho/wpattern-mutrack.git

$ cd wpattern-mutrack

$ cd wpattern-mutrack-all

* Executing

$ cd wpattern-mutrack

$ cd wpattern-mutrack-all

$ mvn clean install -DskipTests=true

$ cd wpattern-mutrack-factory

$ mvn clean install jetty:run -DskipTests=true

* REST Service

Example of services:

GET http://localhost:8080/service/public/user (Find all users)

GET http://localhost:8080/service/public/user/1 (Find the user with the id 1)

GET http://localhost:8080/service/public/user/page/0/5 (Find first 5 users)

GET http://localhost:8080/service/public/user/page/0/5/name,email (Sort by name and email and get first 5 users)

GET http://localhost:8080/service/public/user/name/branquinho (Find the user with the name 'branquinho')

GET http://localhost:8080/service/public/user/name/branquinho@gmail.com  (Find the user with the email 'branquinho@gmail.com')

POST http://localhost:8080/service/public/user (Add a new user. Must pass a JSON in the body, like {"userEntity":{"email":"my@gmail.com","name":"MyName","password":"123456"}} and put in the header Content-type: application/json)

PUT http://localhost:8080/service/public/user (Update a user. Must pass a JSON in the body, like {"userEntity":{"email":"my@gmail.com","name":"MyName","password":"123456"}} and put in the header Content-type: application/json)

DELETE http://localhost:8080/service/public/user (Delete a user based in a ID)

GET http://localhost:8080/service/public/userpermission/1,2 (Find the userpermission with the userId 1 and permissionId 2)
