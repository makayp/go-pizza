import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";
import { useEffect, useRef } from "react";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

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
    <div className="grid h-dvh grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <div id="page" className="relative overflow-scroll pb-16">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
        <span
          ref={scrollButton}
          className="scrollBtn fixed bottom-16  rounded-md border-2 border-sky-700 bg-slate-700 transition-all duration-300"
        >
          <a
            href="#menu"
            className="flex h-8 w-8 items-center justify-center text-2xl text-sky-400"
          >
            ^
          </a>
        </span>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
