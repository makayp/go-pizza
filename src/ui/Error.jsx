import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function NotFound() {
  const error = useRouteError();

  return (
    <div className="absolute inset-4 flex flex-col items-center justify-center gap-2 text-center">
      <h1 className="text-xl sm:text-2xl">Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton to={"-1"}>&larr; Go back</LinkButton>
    </div>
  );
}

export default NotFound;
