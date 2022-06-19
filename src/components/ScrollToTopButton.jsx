import { MdDoubleArrow } from "react-icons/md";
import { IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
const ScrollToTopButton = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
      if (window.scrollY > 100) setIsTop(false);
      else setIsTop(true);
    });
  }, []);

  const handleScroll = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isTop)
    return (
      <div className="fixed bottom-8 right-8">
        <IconButton
          className="hover:bg-green-500 hover:text-white border-2 border-green-500"
          variant="ghost"
          icon={<MdDoubleArrow className="rotate-[270deg]" />}
          onClick={() => handleScroll()}
        />
      </div>
    );
  if (isTop) return null;
};

export default ScrollToTopButton;
