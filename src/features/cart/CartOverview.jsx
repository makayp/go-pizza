import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalPrice = useSelector(getTotalCartPrice);
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  const location = useLocation();

  if (!totalCartQuantity) return null;

  return (
    <div className=" z-10 flex justify-between bg-slate-950 p-4 text-sm uppercase text-slate-300 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold">
        <span>
          {totalCartQuantity} pizza{totalCartQuantity > 1 && "s"}
        </span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      {location.pathname !== "/cart" && (
        <Link to="/cart">Open cart &rarr;</Link>
      )}
    </div>
  );
}

export default CartOverview;
