import "bootstrap/dist/css/bootstrap.css";

// custom global app component wrapper
export default ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};
