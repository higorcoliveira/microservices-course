# A Very Simple blog made with microservices
This project is intended to be a simple representation of a blog, using basic concepts of microservices. None tool (asides Docker) was used to manage the services used here.

## Services available
- Posts
- Comments
- Query
- Moderation

## EventBus
The event bus was made with express and is a simple representation of a event bus like RabbitMQ, Kafka etc

## How to run
Just run in each service folder
```
npm install
npm start
```

## kubernetes
The infra folder contains all files to deploy this application into k8s