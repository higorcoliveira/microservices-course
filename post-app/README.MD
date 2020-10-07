# A Very Simple blog made with microservices
This project is intended to be a simple representation of a blog, using basic concepts of microservices. None tool (asides Docker) was used to manage the services used here.

## Services available
- Posts
- Comments
- Query
- Moderation

## EventBus
The event bus was made with express and is a simple representation of a event bus like RabbitMQ, Kafka etc.

## How to run (without kubernetes)
Just run in each service folder
```
npm install
npm start
```

## kubernetes
The infra folder contains all files to deploy this application into k8s. Use the following command:
```kubectl apply -f .```

## How to access the application
Make sure to change /etc/hosts file, adding the following
```your_ip_address posts.com```

If you are using minikube, use the command *minikube ip* to get the IP address

Next, access http://post.com on your browser