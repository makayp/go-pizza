import { Link, useNavigate } from "react-router-dom";

function LinkButton({ to, children }) {
  const navigate = useNavigate();
  const style = "text-sm text-blue-500 hover:text-blue-600 hover:underline";

  if (to === "-1")
    return (
      <button className={style} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={style}>
      {children}
    </Link>
  );
}

export default LinkButton;
