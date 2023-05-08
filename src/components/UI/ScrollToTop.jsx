import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AiOutlineArrowUp } from "react-icons/ai";
const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [showBtn, setShowBtn] = useState(false);

  const scrollTo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollTo();
    window.addEventListener("scroll", () => {
      window.scrollY >= 550 ? setShowBtn(true) : setShowBtn(false);
    });
  }, [pathname]);

  return (
    showBtn && (
      <div className="fixed z-0 flex items-center justify-center right-4 bottom-4">
        <button
          onClick={scrollTo}
          className="flex md:h-[70px] h-[50px] md:w-[70px] w-[50px] items-center justify-center rounded-full bg-custom_purple text-white"
        >
          <AiOutlineArrowUp size={25} />
        </button>
      </div>
    )
  );
};

export default ScrollToTop;
