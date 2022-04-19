FROM bellsoft/liberica-openjdk-alpine-musl:18
MAINTAINER baeldung.com
COPY target/spring-boot-docker.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]