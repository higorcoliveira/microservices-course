import StartForm from "../../component/startForm";

export default () => {
  return <StartForm service={"/api/users/signin"} label={"Sign In"} />;
};
