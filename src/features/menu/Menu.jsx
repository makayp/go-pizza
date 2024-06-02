import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import { useEffect, useRef } from "react";

function Menu() {
  const menu = useLoaderData();
  const scrollButton = useRef();

  useEffect(function () {
    function handleShowButton() {
      const btn = scrollButton.current?.classList;
      const scrollY = document.getElementById("page").scrollTop;
      if (scrollY > 200) {
        btn.add("showScrollBtn");
        btn.remove("scrollBtn");
      } else {
        btn.remove("showScrollBtn");
        btn.add("scrollBtn");
      }
    }
    document
      .getElementById("page")
      .addEventListener("scroll", handleShowButton);

    return function () {
      document
        .getElementById("page")
        .removeEventListener("scroll", handleShowButton);
    };
  }, []);

  return (
    <div id="menu" className="pt-10">
      <ul className="divide-y divide-stone-200 px-2">
        {menu.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </ul>
      <span
        ref={scrollButton}
        className="scrollBtn absolute bottom-16  rounded-md border-2 border-sky-700 bg-slate-700 transition-all duration-300"
      >
        <a
          href="#menu"
          className="flex h-8 w-8 items-center justify-center text-2xl text-sky-400"
        >
          ^
        </a>
      </span>
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
