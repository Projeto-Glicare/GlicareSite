"use client";

import IDropDown from "@/app/models/dropdown.interface";
import IconArrowDown from "@/public/svg/arrow-down";
import { useState } from "react";

export default function DropDown({ title, description, background }: IDropDown) {

    const [openDescription, setOpenDescription] = useState<boolean>(false);


    return (
        <div className={`bg-${background} rounded-xl py-5 px-6 break-words`}>
            <div onClick={() => setOpenDescription(!openDescription)} className="cursor-pointer flex items-center gap-x-5"><h1>{title}</h1> <span className="ml-auto"><IconArrowDown /></span> </div>
            {openDescription ? <p className="text-sm pt-4">{description}</p> : null}
        </div>
    );
}
