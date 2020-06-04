FROM openjdk:8
RUN mkdir /usr/src/ecommerce
COPY  ./user-authentication-service-0.0.1-SNAPSHOT.jar /usr/src/ecommerce
WORKDIR /usr/src/ecommerce
RUN ls -a
EXPOSE  8086
ENTRYPOINT ["java","-jar","user-authentication-service-0.0.1-SNAPSHOT.jar"]

