import { useLocation } from "react-router-dom";
import Button from "./Button";

function PageNotFound() {
  const location = useLocation();

  return (
    <div className="absolute inset-3 flex flex-col items-center justify-center gap-2 text-center">
      <h1 className="text-2xl sm:text-3xl">Page not found!</h1>
      <p>
        No route matches{" "}
        <span className="font-semibold">
          <q>{location.pathname}</q>
        </span>
      </p>
      <Button type="small" to="/">
        Go home
      </Button>
    </div>
  );
}

export default PageNotFound;
