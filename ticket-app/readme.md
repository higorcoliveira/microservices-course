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
Use the docker driver inside minikube
```
minikube config set driver docker
```

## Skaffold
Install Skaffold and run the command in the root path of the project
```
skaffold dev
```

## Create secret in kubernetes
Run the following command to create the secret used by all services
```
kubectl create secret generic jwt-secret --from-literal=jwt=asdf
```

## How to access the application
Run the following command into your cluster:
```
kubectl get deploy -n kube-system
```

Get the name of the ingress deployment (will be something like ingress-nginx-controller) and execute:
```
kubectl expose deployment name_of_the_deployment --target-port=80 --type=NodePort -n kube-system
```

Make sure to change /etc/hosts file, adding the following
```
your_ip_address tickets.dev
```
If you are using minikube, use the command ```minikube ip``` to get the IP address.

Next, access http://tickets.dev on your browser. If chrome popup security messages, just type inside the tab (thisisunsafe)