# --- Build Stage ---
    FROM maven:3.9.6-eclipse-temurin-21 AS build

    WORKDIR /app
    
    # Copy only the pom.xml to download dependencies first.
    COPY pom.xml .  
    RUN mvn dependency:go-offline
    
    # Copy the source code and build the application.
    COPY src ./src
    RUN mvn clean package -DskipTests
    
    # --- Runtime Stage ---
    FROM openjdk:21-jdk-slim
    
    WORKDIR /app
    
    # Copy the JAR file from the build stage.
    COPY --from=build /app/target/EMS-Backend-0.0.1-SNAPSHOT.jar .
    
    # Set default environment variables.
    # These can be overridden at runtime with docker run -e.
    ENV DATABASE_URL="mongodb+srv://TusharKumar:8506938133@cluster0.eww4p.mongodb.net/tk281141"
    ENV DATABASE_NAME="tk281141"
    
    EXPOSE 8080
    
    ENTRYPOINT ["java", "-jar", "/app/EMS-Backend-0.0.1-SNAPSHOT.jar"]
    