import { Link } from "react-router-dom";

function Button({ to, type, disabled, onClick, children }) {
  const base =
    "text-sm appearance-none shadow-none inline-block rounded-full bg-sky-500 font-semibold uppercase tracking-wide text-slate-100 transition-colors duration-300 hover:bg-sky-400 focus:bg-sky-400 focus:outline-none focus:ring focus:ring-sky-400 focus:ring-offset-2 disabled:cursor-not-allowed";

  const style = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "inline-block rounded-full border-2 border-slate-300  px-4 py-2.5 text-sm font-semibold uppercase tracking-wide text-slate-500 transition-colors duration-300 hover:bg-slate-300 hover:text-slate-600 focus:bg-slate-300 focus:text-slate-700 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-3.5",
  };

  if (to)
    return (
      <Link to={to} className={style[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={style[type]}
      >
        {children}
      </button>
    );

  return (
    <button type="submit" disabled={disabled} className={style[type]}>
      {children}
    </button>
  );
}

export default Button;
