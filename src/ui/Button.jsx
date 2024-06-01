import { Link } from "react-router-dom";

function Button({ to, type, disabled, onClick, children }) {
  const base =
    "text-sm inline-block rounded-full bg-sky-500 font-semibold uppercase tracking-wide text-slate-100 transition-colors duration-300 hover:bg-sky-400 focus:bg-sky-400 focus:outline-none focus:ring focus:ring-sky-400 focus:ring-offset-2 disabled:cursor-not-allowed";

  const style = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "text-sm inline-block rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-500 hover:text-stone-800 focus:text-stone-800 transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
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
