import StartForm from "../../component/startForm";

export default () => {
  return <StartForm service={"/api/users/signup"} label={"Sign Up"} />;
};
