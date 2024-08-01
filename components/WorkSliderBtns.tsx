"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

export default function WorkSliderBtns({
  containerClassName,
  btnClassName,
  iconsClassName,
}: {
  containerClassName?: string;
  btnClassName?: string;
  iconsClassName?: string;
}) {
  const swiper = useSwiper();
  return (
    <div className={containerClassName}>
      <button className={btnClassName} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconsClassName} />
      </button>
      <button className={btnClassName} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconsClassName} />
      </button>
    </div>
  );
}
