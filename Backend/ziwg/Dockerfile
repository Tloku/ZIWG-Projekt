FROM maven:3.6.3 AS maven

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN mvn clean
RUN mvn package

FROM openjdk:17-alpine

WORKDIR /opt/app

COPY --from=maven /usr/src/app/target/ziwg-0.0.1-SNAPSHOT.jar /opt/app/

ENTRYPOINT ["java", "-jar", "ziwg-0.0.1-SNAPSHOT.jar"]