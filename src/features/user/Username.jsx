import { useSelector } from "react-redux";

function Username() {
  const { username } = useSelector((store) => store.user);

  if (!username) return null;

  return (
    <div className="hidden text-sm font-semibold text-slate-100 md:block">
      {username}
    </div>
  );
}

export default Username;
