"use client";

import IDropDown from "@/app/models/dropdown.interface";
import IconArrowDown from "@/public/svg/arrow-down";
import { useEffect, useState } from "react";
import { limitChar } from "@/app/models/limitChar";

export default function DropDown({
  title,
  description,
  background,
}: IDropDown) {
  const [openDescription, setOpenDescription] = useState<boolean>(false);
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

  const titleLimit = 25;

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const displayedTitle =
    openDescription || isLargeScreen ? title : limitChar(title, titleLimit);

  return (
    <div className={`bg-${background} rounded-xl py-5 px-6 break-words`}>
      <div
        onClick={() => setOpenDescription(!openDescription)}
        className="cursor-pointer flex items-center gap-x-5 h-6"
      >
        <h1>{displayedTitle}</h1>{" "}
        <span
          className={`ml-auto transition-transform duration-200 ease-out ${
            openDescription ? "rotate-180" : ""
          }`}
        >
          <IconArrowDown />
        </span>{" "}
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${
          openDescription ? "h-32 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="h-full overflow-y-auto">
          <p className="text-sm pt-4 pr-2">{description}</p>
        </div>
      </div>
    </div>
  );
}
