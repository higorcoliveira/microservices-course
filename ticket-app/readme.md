# A Very Simple blog made using microservices architecture
This project is intended to be a simple representation of a blog, using basic concepts of microservices. None tool (asides Docker) was used to manage the services used here.

## Services available
- See the file services.png

## EventBus
TODO

## How to run - kubernetes

Install the plugin ingress-nginx (kubernetes.github.io/ingress-nginx) inside your k8s cluster

The infra/k8s folder contains all files to deploy this application into k8s. Use the following command to achieve this.
```
kubectl apply -f .
```

## Skaffold
Install Skaffold and run the command in the root path of the project
```
skaffold dev
```

## How to access the application
Make sure to change /etc/hosts file, adding the following
```
your_ip_address tickets.dev
```
If you are using minikube, use the command ```minikube ip``` to get the IP address.

Next, access http://tickets.dev on your browser. If chrome popup security messages, just type inside the tab (thisisunsafe)