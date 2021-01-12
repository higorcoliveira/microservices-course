import axios from "axios";

export default ({ req }) => {
  if (typeof window === "undefined") {
    // we are on the server.
    return axios.create({
      baseURL: "http://ingress-nginx-controller.kube-system.svc.cluster.local",
      headers: req.headers,
    });
  } else {
    // we are on the browser.
    // requests can be made with a base url of ''
    return axios.create({
      baseURL: "/",
    });
  }
};
